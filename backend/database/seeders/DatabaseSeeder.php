<?php

namespace Database\Seeders;

use App\Models\Admin;
use App\Models\Branch;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    private array $branches;

    public function __construct()
    {
        $this->branches = [
            [
                'name' => 'PolyDev Hotel Quang Ninh',
                'address' => 'Quang Ninh',
                'phone' => '0123456789'
            ],
            [
                'name' => 'PolyDev Hotel Ha Noi',
                'address' => 'Ha Noi',
                'phone' => '0123456789'
            ],
            [
                'name' => 'PolyDev Hotel Hai Phong',
                'address' => 'Hai Phong',
                'phone' => '0123456789'
            ],
            [
                'name' => 'PolyDev Hotel Da Nang',
                'address' => 'Da Nang',
                'phone' => '0123456789'
            ],
            [
                'name' => 'PolyDev Hotel Ho Chi Minh',
                'address' => 'Ho Chi Minh',
                'phone' => '0123456789'
            ],
            [
                'name' => 'PolyDev Hotel Can Tho',
                'address' => 'Can Tho',
                'phone' => '0123456789'
            ],
            [
                'name' => 'PolyDev Hotel Nha Trang',
                'address' => 'Nha Trang',
                'phone' => '0123456789'
            ],
            [
                'name' => 'PolyDev Hotel Da Lat',
                'address' => 'Da Lat',
                'phone' => '0123456789'
            ],
            [
                'name' => 'PolyDev Hotel Vung Tau',
                'address' => 'Vung Tau',
                'phone' => '0123456789'
            ],
            [
                'name' => 'PolyDev Hotel Phu Quoc',
                'address' => 'Phu Quoc',
                'phone' => '0123456789'
            ]
        ];
    }

    public function run(): void
    {
<<<<<<< HEAD
//        RoomType::factory($this->num_seed)->create();
//        Room::factory($this->num_seed)->create();
        User::factory($this->num_seed)->create();
//        Category::factory($this->num_seed)->create();
//         Staff::factory($this->num_seed)->create();
//         Promotion::factory($this->num_seed)->create();
//         Utilities::factory($this->num_seed)->create();
//         CancellationPolicy::factory($this->num_seed)->create();
        foreach ($this->branchs as $branch) {
=======
        Admin::create([
            'name' => 'Super Admin',
            'email' => 'superadmin@gmail.com',
            'password' => bcrypt('Polydev@123'),
            'phone' => '0123456789',
            'branch_id' => 'all',
            'role' => 0,
        ]);
        foreach ($this->branches as $branch) {
>>>>>>> c1432f29fcbd9bfb1fdcc7ac75235c8d701fcf2a
            Branch::create($branch);
        }
//        createPermission();
    }
}
