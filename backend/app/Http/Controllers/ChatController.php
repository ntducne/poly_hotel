<?php

namespace App\Http\Controllers;

use App\Events\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function message(Request $request)
    {
        event(new Message('duc','hihihihii'));
        return 1;
        // return response()->json($request->all());
    }
}