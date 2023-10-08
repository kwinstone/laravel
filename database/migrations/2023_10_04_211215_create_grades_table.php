<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('grades', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('color');

            $table->timestamps();
        });

        Schema::table('users', function (Blueprint $table) {
            $table->integer('grade_id')->nullable();
            $table->foreign('grade_id')->references('id')->on('grades');
        });

        DB::table('grades')->insert([
            [
                'name' => 'Intern',
                'color' => 'gray'
            ],
            [
                'name' => 'Junior',
                'color' => 'lime'
            ],
            [
                'name' => 'Pre-Middle',
                'color' => 'green'
            ],
            [
                'name' => 'Middle',
                'color' => 'yellow'
            ],
            [
                'name' => 'Upper-Middle',
                'color' => 'orange'
            ],
            [
                'name' => 'Senior',
                'color' => 'red'
            ],
        ]);
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('grades');

        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('grade_id');
        });
    }
};
