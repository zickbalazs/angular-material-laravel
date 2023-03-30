<?php

use App\Models\Power;
use App\Http\Controllers\PowerController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/




Route::get('consumptions', [PowerController::class, 'index']);
Route::get('consumption/{id}', [PowerController::class, 'show']);
Route::post('new-consumption', [PowerController::class, 'store']);
Route::put('mod-consumption', [PowerController::class, 'update']);
Route::delete('delete-consumption/{id}', [PowerController::class, 'destroy']);