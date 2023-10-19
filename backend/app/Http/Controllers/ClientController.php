<?php

namespace App\Http\Controllers;

use App\Http\Requests\Booking\BookingRequest;
use App\Http\Requests\Booking\SearchRequest;
use App\Http\Resources\RoomResource;
use App\Models\BookDetail;
use App\Models\Booking;
use App\Models\Rates;
use App\Models\Room;
use App\Models\RoomType;
use App\Models\User;
use Illuminate\Http\Request;

class ClientController extends Controller
{
    public function __construct()
    {
        $this->booking = new Booking();
        $this->book_detail = new BookDetail();
    }

    public function roomType()
    {
        return response()->json(RoomType::all());
    }

    public function rooms()
    {
        return RoomResource::collection(Room::paginate(10));
    }

    public function roomDetail($id)
    {
        $room = Room::find($id);
        if (!$room) {
            return response()->json([
                'status' => 'error',
                'message' => 'Phòng không tồn tại !',
            ]);
        }
        return response()->json([
            'room' => new RoomResource($room),
            'rate' => $room->getRate()
        ]);
    }
    public function check_room($check_in, $check_out, $adults, $children, $branch_id, $room_type_id)
    {
        //Check qua thoi gian ben Booking
        $room_booked = $this->booking
            ->where('checkin', '<=', $check_in)
            ->where('checkout', '>=', $check_out)
            ->where('status', '=', false)
            ->get();
        //Chua id cac room da dat
        $room_id_booked = [];
        foreach ($room_booked as $item) {
            $room_id_booked[] = $this->book_detail->where('booking_id', '=', $item->_id)->get()->first()->room_id;
        }
        //Danh sach cac room
        $room = Room::where('adults', '>=', $adults)
            ->where('children', '>=', $children)
            ->where('branch_id', '=', $branch_id)
            ->where('room_type_id', '=', $room_type_id)
            ->get();
        $room_id_completed = [];
        foreach ($room as $item) {
            if (!in_array($item->_id, $room_id_booked)) {
                $room_id_completed[] = $item->_id;
            }
        }
        return $room_id_completed;
    }
    public function search(searchRequest $request)
    {
        $room_completed = $this->check_room($request->checkin, $request->checkout, $request->adult, $request->child, $request->branch_id, $request->room_type_id);
        if (!$room_completed) {
            $response = [
                'message' => 'Hết phòng !'
            ];
        } else {
            $room = [];
            foreach ($room_completed as $key => $value) {
                $room[] = [
                    'room' => Room::find($value),
                    'room_type' => RoomType::where('_id', '=', Room::find($value)->room_type_id)->get()
                ];
            }
            $response = [
                'message' => 'Tìm thành công 1',
                'data' => $room
            ];
        }
        return response()->json($response);
    }
    public function booking(BookingRequest $request)
    {
        $soLuong = $request->soLuong;
        $room_id = $request->room_id;
        $branch_id = $request->branch_id;
        (int) $adults = $request->adults;
        (int) $children = $request->children;
        $param = $request->except(['soLuong', 'room_id', 'branch_id', 'adult', 'child']);
        $room = Room::where('_id', '=', $room_id)->where('branch_id', '=', $branch_id)->first();
        //Kiem tra phong con trong hay khong
        $room_valid = $this->check_room($request->checkin, $request->checkout, $request->adults, $request->children, $branch_id, $room->room_type_id);
        $total_adults = 0;
        $total_children = 0;
        foreach ($room_valid as $key => $value) {
            $total_adults += Room::find($value)->adults;
            $total_children += Room::find($value)->children;
            $total_discount = Room::find($value)->discount;
            $total_price_per_night = RoomType::where('_id', '=', Room::find($value)->room_type_id)->first()->price_per_night;
        }
        //Bat loi dat so nguoi 
        if ($adults > $total_adults && $children > $total_children) {
            return response()->json([
                'message' => 'Phòng không đủ chỗ '
            ]);
        }
        //Bat loi dat so luong phong
        if (count($room_valid) < $soLuong) {
            return response()->json([
                'message' => 'Không đủ phòng trống !'
            ]);
        }

        $param['room_type'] = $room->room_type_id;
        $param['booking_date'] = now()->toDateTimeString();
        $param['price_per_night'] = $total_price_per_night - $total_discount; // gia 1 dem cua booking
        $param['amount_people'] = [
            'total_people' => $total_adults + $total_children,
            'total_adults' => $total_adults,
            'total_children' => $total_children
        ];
        $param['amount_room'] = $soLuong;
        //Lay ra id user neu ho da co tai khoan tu truoc
        $user = User::where('email', '=', $request->representative['email'])->first();
        $param['user_id'] = !empty($user) ? $user->_id : null;

        //phong co the dat 
        $room_booking = array_slice($room_valid, 0, $soLuong);
        $create = $this->booking->create($param);
        $details = [];
        foreach ($room_booking as $key => $value) {
            $details[] = [
                'booking_detail' => $this->book_detail->create(
                    [
                        'booking_id' => $create->_id,
                        'room_id' => $value,
                        'room_name' => Room::find($value)->name
                    ]
                ),
                'info_room' => [
                    'name' => Room::find($value)->name,
                    'price' => RoomType::where('_id', '=', Room::find($value)->room_type_id)->first()->price_per_night - Room::find($value)->discount
                ]
            ];
        }
        return response()->json([
            'message' => 'Đặt thành công !',
            'booking' => $create,
            'details' => $details
        ]);
    }
}