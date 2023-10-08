<?php

namespace App\Http\Controllers\Dashboard;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class DashboardController extends Controller
{


    public function show() {
        return Inertia::render('Dashboard/pages/RootPage/index');
    }
}
