import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css'
import '../../css/index.css'
import logo from "../../../public/images/eu.png"


const PrimaryParty = ()=>{
    return(
        <>
            <div className="container" style={{marginTop:'4em',fontFamily: 'Cormorant Garamond, serif'}}>
                <div className="row " >
                    <div className="col-sm-6 d-none d-xl-block  ">
                        <img src={logo}  style={{width:'33em'}} alt="" />
                       
                    </div>
                    <div className="col-sm-6 ">
                        <div >
                            <h1  className=" titulo float-right">JUAN <br /> MIGUEL</h1>
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