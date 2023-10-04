<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\URL;
use Inertia\Inertia;
use Inertia\Response;

class LoginController extends Controller {

    public function create(): Response {
        return Inertia::render('Auth/pages/Login/index', [
            'forgot_password_link' => URL::route('auth.forgot_password')
        ]);
    }
}
