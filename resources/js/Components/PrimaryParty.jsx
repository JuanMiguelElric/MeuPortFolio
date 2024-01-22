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
                    <div className="col-sm-6 col-md-6   ">
                        <img src={logo} className="logoIpadMini logolg"   alt="" />
                       
                    </div>
                    <div className="col-sm-6 col-md-6 ">
                        <div >
                            <h1  className=" h1 titulo tituloMd float-right">JUAN <br /> MIGUEL</h1>
                        </div>
                        <p className=" paragrafomd paragrafo " >Bem-vindo ao meu portfólio! Sou um apaixonado
                            desenvolvedor web com experiência sólida na
                            criação de soluções digitais inovadoras e eficientes. Abaixo, você encontrará uma visão geral dos meus
                            projetos e habilidades.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}
export default PrimaryParty;