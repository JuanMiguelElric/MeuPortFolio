<?php

namespace App\Http\Controllers;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ContatoController extends Controller
{


    public function Store(Request $request)
    {
        try {
            $nome = $request->input('nome');
            $email = $request->input('email');
            $telefone = $request->input('telefone');

            DB::insert('insert into portfolios (nome, email, telefone) values (?, ?, ?)', [$nome, $email, $telefone]);

            return Inertia::render('Bemsucedido');

        } catch (\Exception $e) {
            return $e->getMessage();

            // Redirecione para a página de erro Inertia
            return Inertia::render('/Contatoenviado/obrigado');
        }
    }

}
