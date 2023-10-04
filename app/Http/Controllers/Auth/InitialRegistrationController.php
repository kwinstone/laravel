<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;
use Inertia\Response;

class InitialRegistrationController extends Controller
{


    public function create(): Response|RedirectResponse {
        $usersCount = DB::table('users')->count();

        if ($usersCount != 0) {
            return redirect()->route('auth.login');
        }

        return Inertia::render('Auth/pages/InitialRegistration/index');
    }

    public function store(Request $request) {

        $validated = $request->validate([
            'first_name' => 'required|min:2',
            'last_name' => 'required|min:2',
            'email' => 'required|email',
            'password' => 'required|min:4'
        ]);
        return $request;
    }
}
