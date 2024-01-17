<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class CurriculoController extends Controller
{
    public function curriculo(){
        return view('curriculo');
    }
}
