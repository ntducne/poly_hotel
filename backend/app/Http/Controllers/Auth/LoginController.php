<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Http\Requests\Auth\LoginRequest;
use Carbon\Carbon;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class LoginController extends Controller
{
    public function removeUser($userId){
        DB::table('oauth_access_tokens')->where('user_id', $userId)->delete();
//        DB::table('tokens')->where('user_id', $userId)->delete();
    }
    public function index(LoginRequest $request): JsonResponse
    {
        $checkLogin = Auth::guard($request->segment(2))
            ->attempt([
                'email' => $request->email,
                'password' => $request->password
            ]);
        if ($checkLogin) {
            $user = Auth::guard($request->segment(2))->user();
            $this->removeUser($user->id);
            $tokenResult = $user->createToken(ucfirst($request->segment(2)).' Access Token',[$request->segment(2)]);
            $token = $tokenResult->token;
            if ($request->segment(2) == 'user')
                $token->expires_at = Carbon::now()->addYear();
            $token->save();
            return response()->json([
                'status'        => true,
                'accessToken'   => [
                    'token_type' => 'Bearer',
                    'token'      => $tokenResult->accessToken,
                    'expires_at' => Carbon::parse($tokenResult->token->expires_at)->toDateTimeString(),
                ],
            ]);
        }
        else {
            return response()->json([
                'status' => false,
                'message' => 'Unauthorized'
            ]);
        }

    }
}
