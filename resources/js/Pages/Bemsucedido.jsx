import { Head } from "@inertiajs/react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css';
import { MdVerified } from "react-icons/md";
import React from "react";
import Menu from "@/Components/Menu";
import { Zoom } from "react-reveal";
import { Link } from '@inertiajs/react';
import Rodape from "@/Components/Rodap";
const Bemsucedido = () =>{
    return(
        <>
        <Head title="Bemsucedido" />
            <div className="container-fluid backgroundimage" style={{fontFamily: 'Cormorant Garamond, serif'}}>
                <Menu />
                <div className="row">
                    <div className="col-sm-12 p-5">
                        <div className="text-center">
                            <Zoom >
                                <h1><MdVerified color="green" size={200} /></h1>
                            </Zoom>
                            <h1 style={{fontSize:'4em',color:"green"}}>Dados enviados com sucesso!</h1>
                            <br />
                            <br />
                            <p style={{fontSize:'2em', color:"#fffff"}}>Em breve, entrarei em contato com você. Enquanto aguarda, que tal desfrutar <br />de uma pausa com um gole de café e explorar o meu site?</p>
                            <br />
                            <br />
                            <button className="btn btn-success">
                                <Link className="link" href="/">
                                    Clique aqui!
                                
                                </Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Rodape/>
            
        </>
    )
}
export default Bemsucedido;