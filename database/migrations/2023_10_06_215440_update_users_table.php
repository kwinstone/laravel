<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->string('role')->after('id');
            $table->json('permissions')->after('role');

            $table->string('sex');
            $table->date('birthday_date');

            $table->string('country')->nullable();
            $table->string('city')->nullable();

            $table->string('linkedin')->nullable();
            $table->string('phone')->nullable();
            $table->string('telegram')->nullable();

            $table->string('position');

            $table->string('work_type');
            $table->string('work_time');
            $table->string('hired_type');
            $table->date('hired_date');
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::table('users', function (Blueprint $table) {
            $table->dropColumn('role');
            $table->dropColumn('permissions');

            $table->dropColumn('sex');
            $table->dropColumn('birthday_date');

            $table->dropColumn('country');
            $table->dropColumn('city');

            $table->dropColumn('linkedin');
            $table->dropColumn('phone');
            $table->dropColumn('telegram');

            $table->dropColumn('position');

            $table->dropColumn('work_type');
            $table->dropColumn('work_time');
            $table->dropColumn('hired_type');
            $table->dropColumn('hired_date');
        });
    }
};
