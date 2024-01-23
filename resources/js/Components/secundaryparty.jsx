import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from "react-reveal";
import MinhaFoto from "../../../public/images/minhafoto.png";
import "../../css/app.css";
import '../../css/index.css';

const SecundaryParty= () =>{
    return(
        <>
            <div className="container">
                <div className="row" style={{paddingTop:'3em'}}>
                    <Fade cascade damping={0.1}>
                        <div className='col-sm-6 ' >
                            <div className='text-center'>

                                <h2 style={{fontSize:'4em'}}>Sobre mim</h2>
                            </div>
                            <div className="paragrafo">
                                <p style={{fontSize:'19px', color:'black'}}>     
                                        Olá, meu nome é Juan Miguel de Oliveira, sou desenvolvedor fullstack.Atualmente, estou cursando Ciência da Computação na Unifenas, embora eu tenha me formado em TI pelo IF Sul de Minas. Apaixonado por tecnologia e por desafios, ingressei na área em 2020, trabalhando no SAAE de Campo do Meio como Técnico de Informática. Lá, atuei na administração de redes, na manutenção de computadores e no desenvolvimento de planilhas.Atualmente, atuo como freelancer no campo de desenvolvimento web,porém, estou em busca de uma recolocação profissional. Acredito que tenho muito a agregar à minha carreira ao fazer parte de uma empresa
                                </p>

                            </div>
                        </div>
                        <div className="col-sm-6 removerSm">  
                            <img src={MinhaFoto} className="MinhaFoto" alt="" />

                        </div>

                    </Fade>


                </div>
            </div>
        </>

    )
}
export default SecundaryParty;