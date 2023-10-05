<?php

namespace App\Models;

use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticateContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Laravel\Passport\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class Admin extends Eloquent implements AuthenticateContract
{
    use Authenticatable, HasApiTokens, HasFactory, Notifiable, HasRoles;
    protected $fillable = [
        'image',
        'name',
        'username',
        'email',
        'password',
        'phone',
        'address',
        'status',
        'branch_id',
        'role',
    ];
    protected $hidden = [
        'password'
    ];
    protected $attributes = [
        'status'  => 0,
        'image'   => 'https://res.cloudinary.com/dteefej4w/image/upload/v1681474078/users/585e4bf3cb11b227491c339a_gtyczj.png',
        'phone'   => '',
        'address' => '',
    ];
}