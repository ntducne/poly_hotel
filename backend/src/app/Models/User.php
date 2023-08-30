<?php

namespace App\Models;

use App\Traits\Booking as BookingTrait;
use Illuminate\Auth\Authenticatable;
use Illuminate\Contracts\Auth\Authenticatable as AuthenticatableContract;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Notifications\Notifiable;
use Jenssegers\Mongodb\Eloquent\Model as Eloquent;
use Jenssegers\Mongodb\Eloquent\SoftDeletes;
use Jenssegers\Mongodb\Relations\HasMany;
use Laravel\Passport\HasApiTokens;

class User extends Eloquent implements AuthenticatableContract
{
    use Authenticatable, HasApiTokens, HasFactory, Notifiable, SoftDeletes, BookingTrait;
    protected $fillable = [
        'image',
        'name',
        'email',
        'password',
        'phone',
        'address',
        'status'
    ];
    protected $hidden = [
        'password', 'updated_at', 'deleted_at', 'created_at'
    ];
    protected $attributes = [
        'status'  => 0,
        'image'   => 'https://res.cloudinary.com/dteefej4w/image/upload/v1681474078/users/585e4bf3cb11b227491c339a_gtyczj.png',
        'phone'   => '',
        'address' => '',
        'deleted_at' => null
    ];
    public function bookings(): HasMany
    {
        return $this->hasMany(Booking::class);
    }
}
