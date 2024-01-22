import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Fade } from "react-reveal";
import { IoLogoJavascript, IoLogoCss3,IoLogoReact,IoLogoNodejs  } from "react-icons/io5";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import Bounce from 'react-reveal/Bounce';
import Odonto from "../../../public/images/websites/OdontoCentro.jpg";
import Halph from "../../../public/images/websites/detonahalp.jpg";
import Agendadordetarefas from "../../../public/images/websites/agendador-de-tarefas.png";
import Testepostaqui from "../../../public/images/websites/Testepostaqui.png";
import MiniErp from "../../../public/images/websites/erp.png";
import Carrinho from "../../../public/images/websites/cariinho.jpg";
import Rippoint from "../../../public/images/websites/rip.jpg";

const TerceiraParte = () =>{
    return(
        <>
            <div className="container-fluid backgroundimage p-5">
                <div className="container">
                    <div >
                        <Fade cascade damping={0.1}>
                            <div className="text-center h1 " style={{marginTop:"3rem"}}>
                                <h2 style={{fontSize:"4rem"}}>Habilidades</h2>
                            </div>
                            <br />
                            <br />
                            <br />
                            <div className="col-sm-12" style={{color:'#ffff'}}>
                                <div className=" habilidades habilidadescell">
                                    <p>Desenvolvimento de interfaces utilizando HTML,CSS e JavaScript. </p> 
                                </div>
                                <br />
                                <div className=" habilidades habilidadescell">
                                    Desenvolvimento de interfaces com REACTjs, TypeScript, Redux e Bootstrap.
                                </div>
                                <br />
                                <div className=" habilidades habilidadescell">
                                    Desenvolvimento backend utilizando Nodejs, laravel.
                                </div>

                            </div>
                            <br />
                            <div className="col-sm-6">
                                <IoLogoJavascript color="yellow" size="4em" />
                                <BsFiletypeHtml color="red" size="4em" />
                                <IoLogoCss3 color='blue' size="4em" />
                                <FaPhp color='blue' size="4em" />
                                <IoLogoNodejs color='green' size="4em"/>
                                <IoLogoReact color='white' size="4em"/>
                                <SiMysql size="4em" />

                            </div>

                        </Fade>
                        <Fade cascade damping={0.1}>
                            <div className='col-sm-12'>
                                {/* para adicionar os meus projetos  */}
                                <div className='text-center' style={{marginTop:"10rem"}}>
                                    <h4 style={{fontSize:"4rem"}}>Projetos</h4>

                                </div>
                                <div className='d-flex align-content-start flex-wrap p'>
                                    <Bounce left>
                                        {[
                                            {imagem: Odonto, Titulo:"Site para Clinica Odontológica",Descricao:"Site desenvolvido em projeto freelancer para a Rede de Clinica Odonto Centro e envio de email com nodemailler",Repositorio:"https://github.com/JuanMiguelElric/RededeClinicasODontoCentroRn"},
                                            {imagem:Halph, Titulo:"jogo do Detona Ralph", Descricao:"Jogo do Detona Ralph que desenvolvi utilizando Java Script Html e CSS",Repositorio:"https://github.com/JuanMiguelElric/DethonaHalpDIO"},
                                            {imagem:Agendadordetarefas, Titulo:"Agendador de Tarefas", Descricao:"Agendador de Tarefas que Desenvolvi utilizando php e mysql.", Repositorio:"https://github.com/JuanMiguelElric/ListadeTarefas"},
                                            {imagem:Testepostaqui, Titulo:"Teste postaAqui", Descricao:"Nas minhas férias desenvolvi um projeto de teste para o processo Seletivo da PostaAqui, onde Utilizei React js.",Repositório:"https://github.com/JuanMiguelElric/TestePostaqui"},
                                            {imagem:MiniErp, Titulo:"Mini ERP", Descricao:"Mini ERP Desenvolvido em Laravel e Mysql", Repositorio:"https://github.com/JuanMiguelElric/ERP"},
                                            {imagem: 'a', Titulo:"Buscador de CEp", Descricao:"Buscador de cep desenvolvido em php utilizando a api viacep", Repositorio:"https://github.com/JuanMiguelElric/BuscadordeCep/blob/main/src/Search.php"},
                                            {imagem: Carrinho,Titulo:"Carrinho de compras", Descricao:"Carrinho de compras desenvolvido em React js e Redux apenas para treinamento ", Repositorio:"https://github.com/JuanMiguelElric/CrudUsuario"},
                                            {imagem:Rippoint, Titulo: "Site Ecommerce Rip Point", Descricao:"Site Ecommerce Freelancer Desenvolvido Em ReactJs, Laravel e mysql.", Repositorio:"https://github.com/JuanMiguelElric/https-github.com-JuanMiguelElric-Ecommerce"}
                                        ].map((projeto,index)=>(
                                        <div key={index} className="cardProjetos cardProjetoSm">
                                             <img class="card-img-top" src={projeto.imagem} alt="Card image cap"></img>
                                            <div className="card-body">
                                                <h5 className="card-title">{projeto.Titulo}</h5>
                                                <p className="card-text paragrafo">{projeto.Descricao}</p>
                                                <a href={projeto.Repositorio} className="btn  btn-dark buttonCell">Repositório</a>
                                                <a href={projeto.Repositorio}  className="btn  btn-primary buttonCell">Repositório</a>

                                            </div>
                                        </div>

                                        ))}

                                    </Bounce>
                                </div>
                            </div>

                        </Fade>
                    </div>

                </div>
                

            </div>
        </>
    )
}
export default TerceiraParte;