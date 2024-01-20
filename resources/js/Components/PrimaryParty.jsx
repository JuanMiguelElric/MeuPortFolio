import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css'
import logo from "../../../public/images/eu.png"


const PrimaryParty = ()=>{
    return(
        <>
            <div className="container" style={{marginTop:'4em',fontFamily: 'Cormorant Garamond, serif'}}>
                <div className="row " >
                    <div className="col-sm-6 ">
                        <img src={logo} style={{width:'33em'}} alt="" />
                       
                    </div>
                    <div className="col-sm-6 ">
                        <div className="title">
                            <h1 style={{fontSize:'9rem'}} className="h1 d-none d-sm-block float-right">JUAN <br /> MIGUEL</h1>
                        </div>
                        <p className="paragrafo" style={{color:"#ffff",fontSize:"27px"}}>Bem-vindo ao meu portfólio! Sou um apaixonado
                            desenvolvedor web com experiência sólida na
                            criação de soluções digitais inovadoras e eficientes
                            . Abaixo, você encontrará uma visão geral dos meus
                            projetos e habilidades.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PrimaryParty;