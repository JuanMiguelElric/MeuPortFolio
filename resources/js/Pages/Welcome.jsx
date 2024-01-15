import Menu from '@/Components/Menu';
import PrimaryParty from '@/Components/PrimaryParty';
import { IoLogoJavascript, IoLogoCss3,IoLogoReact,IoLogoNodejs  } from "react-icons/io5";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";

import { Link, Head } from '@inertiajs/react';
export default function Welcome({ quote }) {
    return (
        <>
            <Head title="Bem vindo" />
            <div className="container-fluid ">
                <div className="backgroundimage">
                
                    <Menu />
                    <br />
                    <PrimaryParty />
                

                </div>
                <div className="row" style={{paddingTop:'3em'}}>
                    <div className='col-sm-6 ' style={{paddingLeft:'4em'}}>
                        <div className='text-center'>

                            <h2 style={{fontSize:'4em'}}>Sobre mim</h2>
                        </div>
                        <div className="paragrafo">
                            <p style={{fontSize:'19px'}}>     
                                    Olá, meu nome é Juan Miguel de Oliveira, sou desenvolvedor fullstack.Atualmente, estou cursando Ciência da Computação na Unifenas, embora eu tenha me formado em TI pelo IF Sul de Minas. Apaixonado por tecnologia e por desafios, ingressei na área em 2020, trabalhando no SAAE de Campo do Meio como Técnico de Informática. Lá, atuei na administração de redes, na manutenção de computadores e no desenvolvimento de planilhas.Atualmente, atuo como freelancer no campo de desenvolvimento web,porém, estou em busca de uma recolocação profissional. Acredito que tenho muito a agregar à minha carreira ao fazer parte de uma empresa
                            </p>

                        </div>
                    </div>


                </div>
                <div className="row">
                    <div className="backgroundimage" style={{paddingLeft:'4em'}}>
                        <div className="text-center h1 " style={{marginTop:"3rem"}}>
                             <h2 style={{fontSize:"4rem"}}>Habilidades</h2>
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="col-sm-12">
                            <div className=" habilidades">
                                <p>Desenvolvimento de interfaces utilizando HTML,CSS e JavaScript. </p> 
                            </div>
                            <br />
                            <div className=" habilidades">
                                Desenvolvimento de interfaces com REACTjs, TypeScript, Redux e Bootstrap.
                            </div>
                            <br />
                            <div className=" habilidades">
                                Desenvolvimento backend utilizando Nodejs, laravel.
                            </div>

                        </div>
                        <br />
                        <div className="col-sm-6">
                            <IoLogoJavascript size="4em" />
                            <BsFiletypeHtml size="4em" />
                            <IoLogoCss3 size="4em" />
                            <FaPhp size="4em" />
                            <IoLogoNodejs size="4em"/>
                            <IoLogoReact size="4em"/>
                           <SiMysql size="4em" />

                        </div>
                    </div>

                </div>
            </div>


        </>
    );
}
