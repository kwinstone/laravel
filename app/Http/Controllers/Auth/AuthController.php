<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class AuthController extends Controller
{

    public function login(): Response {
        return Inertia::render('Auth/pages/Login/Index');
    }

    public function forgot_password(Request $request): Response {
        return Inertia::render('Auth/pages/ForgotPassword/index');
    }
}
