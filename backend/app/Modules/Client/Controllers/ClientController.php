<?php

namespace App\Modules\Client\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Booking\BookingRequest;
use App\Models\Billing;
use App\Models\BookDetail;
use App\Models\Booking;
use App\Models\Branch;
use App\Models\Room;
use App\Models\RoomType;
use App\Modules\Branch\Resources\BranchResource;
use App\Modules\Room\Resources\RoomResource;
use App\Repositories\BookingRepository;
use App\Repositories\RoomRepository;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ClientController extends Controller
{
    private Booking $booking;
    private BookDetail $book_detail;
    private Billing $billing;
    private BookingRepository $bookingRepository;

    private RoomRepository $roomRepository;

    public function __construct(BookingRepository $bookingRepository, RoomRepository $roomRepository)
    {
        $this->bookingRepository = $bookingRepository;
        $this->roomRepository = $roomRepository;

        $this->booking = new Booking();
        $this->book_detail = new BookDetail();
        $this->billing = new Billing();
    }

    public function branch()
    {
        return BranchResource::collection(Branch::all());
    }

    public function roomType()
    {
        return RoomResource::collection(RoomType::all());
    }

    public function rooms(Request $request)
    {
        if (request()->has('checkin') && request()->has('checkout') && request()->has('adult') && request()->has('child') && request()->has('branch_id') && request()->has('soLuong')) {
            return $this->roomRepository->processSearchRoom($request);
        }
        return RoomResource::collection(Room::paginate(10));
    }

    public function roomDetail($id)
    {
        $room = Room::where('slug', '=', $id)->first();
        if (!$room) {
            return response()->json([
                'status' => 'error',
                'message' => 'Phòng không tồn tại !',
            ]);
        }
        $room_same = Room::where('room_type_id', '=', $room->room_type_id)
            ->where('branch_id', '=', $room->branch_id)
            ->where('_id', '!=', $id)
            ->get();
        return response()->json([
            'room' => new RoomResource($room),
            'room_same' => RoomResource::collection($room_same)
        ]);
    }

    public function checkBooking(Request $request){
        try {
            return $this->bookingRepository->checkBooking($request);
        } catch (Exception $exception) {
            Log::debug($exception->getMessage());
            return response()->json([
                'status' => false,
                'message' => 'Lỗi lấy dữ liệu đặt phòng !'
            ]);
        }
    }

    public function processSearch(Request $request){
        $data = $this->roomRepository->processSearchRoom($request);
        if(count($data) == 0){
            return response()->json([
                'status' => false,
                'message' => 'Không tìm thấy phòng !',
                'data' => []
            ]);
        }
        return response()->json([
            'status' => true,
            'message' => 'Lấy dữ liệu thành công !',
            'data' => $data
        ]);
    }

    public function processBooking(Request $request){
        return $this->roomRepository->processBooking($request);
    }

    public function processRenew(Request $request) {
        return $this->roomRepository->processRenew($request);
    }

}
