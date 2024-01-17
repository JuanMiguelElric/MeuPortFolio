import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { phoneMask } from "./mask/maks";


const Formulario=()=>{
    const [phoneValor,setPhoneValor] = useState("");
    function handlePhone(event){
        const {value}=event.target;
        setPhoneValor(phoneMask(value));
    }


    return(
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center text-center" style={{ border: "3px solid black", padding: "20px" }}>
                    <div>
                        <h2>Entrar em contato!</h2>
                        <form>
                            <label htmlFor="">Nome:</label>
                            <input type="text" className="mt-3 form-control" placeholder="Digite seu nome" name="" id="" /> 
                            <br />
                            <label htmlFor="">Email:</label>
                            <input type="email" name="" className="mt-1 form-control" placeholder="Digite seu melhor email" id="" />
                            <br />
                            <label htmlFor="">
                                Telefone:
                            </label>
                            <input type="text" name="" onChange={handlePhone} value={phoneValor} className="mt-1 form-control" placeholder="Digite seu telepone" id="" />

                            <button className="btn btn-lg btn-dark mt-3" type="submit">Enviar</button>

                        </form>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Formulario;