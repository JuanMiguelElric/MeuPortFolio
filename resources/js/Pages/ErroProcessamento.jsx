import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css';
import { Head } from '@inertiajs/react';
import { BiSolidMessageError } from "react-icons/bi";
const ErroProcessamento = () =>{
    return(
        <>
            <Head title="title ErroProcessamento" />
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 p-5">
                        <div className="text-center">
                            <BiSolidMessageError color="red" size={200} />

                        </div>
                        <h1 className="text-center" style={{fontSize:'4em',color:"Red"}}>Erro no servidor</h1>
                        <p className="text-center" style={{fontSize:'1em'}}>Desculpe, ocorreu um erro interno do servidor. Estamos trabalhando para corrigir isso.</p>
                    </div>
                </div>

            </div>
        </>
    )
}
export default ErroProcessamento;