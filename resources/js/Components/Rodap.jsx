import React from "react";
import { Link } from '@inertiajs/react';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
const Rodape = () =>{
    return(
        <>
        <footer className="bg-dark textlight">
            <div className="container-fluid py-3">
                <div className="row">
                    <div className="col-4">
                        <div className="nav flex-column">
                            <di className="nav"><Link style={{color:"white"}} className="link" href="/">Home</Link></di>
                            <di className="nav"><Link style={{color:"white"}} className="link">Curriculo</Link></di>
                            <di className="nav"><Link style={{color:"white"}} className="link">Habilidades</Link></di>
                            <di className="nav"><Link style={{color:"white"}} className="link">Projetos</Link></di>
                        </div>
                    </div>
                    <div className="col-8">
                        <p style={{color:"white"}}>Tudo o que a sua mão encontrar para fazer, faça-o com todo o seu coração. <br /><small style={{color:"white",marginRight:"0"}}>-Salomão</small></p>

                        <div className="nav">
                            <div className="nav-link"><FaFacebook color="white" size={50} /></div>
                            <div className="nav-link"><FaInstagram color="white" size={50} /></div>
                            <div className="nav-link"><FaLinkedin color="white" size={50} /></div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center" style={{backgroundColor:"#333",padding:"20px", color:'white'}}>&copy 2018 Copyright:</div>
        </footer>
        </>

    );
}
export default Rodape;