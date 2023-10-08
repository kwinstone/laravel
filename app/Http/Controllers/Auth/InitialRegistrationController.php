<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Grade;
use App\Models\User;
use App\Providers\RouteServiceProvider;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Validation\ValidationException;
use Inertia\Inertia;
use Inertia\Response;

class InitialRegistrationController extends Controller
{


    public function create(): Response|RedirectResponse {
        if ($this->hasUsers()) {
            return redirect()->route('auth.login');
        }

        $grades = Grade::query()->select('id', 'name', 'color')->get();

        return Inertia::render('Auth/pages/InitialRegistration/index', compact('grades'));
    }

    public function store(Request $request) {
        $this->validateRequest($request);

        $grade = Grade::query()->find($request->grade);
        if (!$grade) {
            throw ValidationException::withMessages([
                'grade' => 'Квалификация не найдена',
            ]);
        }

        $user = User::query()->create($this->getUserData($request, $grade));

        Auth::login($user);

        return redirect(RouteServiceProvider::HOME);
    }



    private function hasUsers(): bool {
        return User::query()->count() !== 0;
    }

    private function validateRequest(Request $request): void {
        $request->validate([
            'first_name' => 'required|min:2|max:120',
            'last_name' => 'required|min:2|max:120',
            'email' => 'required|email|max:255',
            'sex' => 'required|min:4|max:50',
            'country' => 'nullable|string',
            'city' => 'nullable|string',
            'birthday_date' => 'required',
            'password' => 'required|min:8',

            'linkedin' => 'nullable|string',
            'phone' => 'nullable|string',
            'telegram' => 'nullable|string',

            'grade' => 'required',
            'position' => 'required|max:200',

            'work_type' => 'required|string',
            'work_time' => 'required|string',
            'hired_type' => 'required|string',
            'hired_date' => 'required|date'
        ]);
    }

    private function getUserData(Request $request, Grade $grade): array {
        return [
            'role' => 'ADMIN',
            'permissions' => [],
            'first_name' => $request->first_name,
            'last_name' => $request->last_name,
            'email' => $request->email,
            'sex' => $request->sex,
            'country' => $request->country,
            'city' => $request->city,
            'birthday_date' => $request->birthday_date,
            'password' => Hash::make($request->password),
            'linkedin' => $request->linkedin,
            'phone' => $request->phone,
            'telegram' => $request->telegram,
            'grade_id' => $grade->id,
            'position' => $request->position,
            'work_type' => $request->work_type,
            'work_time' => $request->work_time,
            'hired_type' => $request->hired_type,
            'hired_date' => $request->hired_date,
        ];
    }
}
