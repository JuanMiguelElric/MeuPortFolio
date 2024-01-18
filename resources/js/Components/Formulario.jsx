import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from '@inertiajs/react'



const Formulario=()=>{
    const [informacoes,setInformacoes]= useState({
        nome:'',
        email:'',
        telefone:'',

    });
    const InputData = (event)=>{
        const {name,value}= event.target;
        setInformacoes({...informacoes, [name]:value});
    }
   


    const handleSubmit = async (event)=>{
        event.preventDefault();

        router.post('/Contatoenviado/obrigado',informacoes);
    }


    return(
        <>
            <div className="container mt-5" >
                <div className="d-flex justify-content-center text-center" style={{ border: "3px solid black", padding: "20px" }}>
                    <div>
                        <h2>Entrar em contato!</h2>
                        <form onSubmit={handleSubmit} method="POST">
                            <label htmlFor="">Nome:</label>
                            <input type="text" name="nome" className="mt-3 form-control" value={informacoes.nome} placeholder="Digite seu nome"  onChange={InputData} /> 
                            <br />
                            <label htmlFor="">Email:</label>
                            <input type="email" name="email" className="mt-1 form-control" value={informacoes.email} placeholder="Digite seu melhor email" onChange={InputData} />
                            <br />
                            <label htmlFor="">
                                Telefone:
                            </label>
                            <input type="text" name="telefone"  value={informacoes.telefone} className="mt-1 form-control" placeholder="Digite seu telepone" onChange={InputData} />

                            <button className="btn btn-lg btn-dark mt-3" type="submit">Enviar</button>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Formulario;