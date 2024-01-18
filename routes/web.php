<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*\App\Http\Controllers/ContatoController@Store
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Welcome');
});

Route::get('/dashboard', function () {
    return Inertia::render('Curriculo');
});
Route::post('/Erros/FalhaProcessamento',function(){
    return Inertia::render('ErroProcessamento');
});
Route::post('/Contatoenviado/obrigado', '\App\Http\Controllers\ContatoController@Store');




