import Menu from '@/Components/Menu';
import PrimaryParty from '@/Components/PrimaryParty';
import { IoLogoJavascript, IoLogoCss3,IoLogoReact,IoLogoNodejs  } from "react-icons/io5";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import { Link, Head } from '@inertiajs/react';
import ComponentForm from '@/Components/ComponentForm';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Fade } from "react-awesome-reveal";
import Bounce from 'react-reveal/Bounce';
import Rodape from '@/Components/Rodap';

export default function Welcome() {
    return (
        <>
            <Head title="Bem vindo" />
            <ParallaxProvider scrollAxis="horizontal" >
                <div className="container-fluid ">
                    <div className="backgroundimage">
                    
                        <Menu />
                        <br />
                        <Fade cascade damping={0.1}>
                            <PrimaryParty />

                        </Fade>
                    

                    </div>
                    
                    <div className="row" style={{paddingTop:'3em'}}>
                        <Fade cascade damping={0.1}>
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

                        </Fade>


                    </div>

                 
                    <div className="row">
                        <div className="backgroundimage" style={{paddingLeft:'4em'}}>
                            <Fade cascade damping={0.1}>
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
                                    <div className='d-flex align-content-start flex-wrap'>
                                        <Bounce left>
                                            {[
                                                {imagem:'a', Titulo:"Site para Clinica Odontológica",Descricao:"Site desenvolvido em projeto freelancer para a Rede de Clinica Odonto Centro e envio de email com nodemailler",Repositorio:"https://github.com/JuanMiguelElric/RededeClinicasODontoCentroRn"},
                                                {imagem:'a', Titulo:"jogo do Detona Ralph", Descricao:"Jogo do Detona Ralph que desenvolvi utilizando Java Script Html e CSS",Repositorio:"https://github.com/JuanMiguelElric/DethonaHalpDIO"},
                                                {imagem:'a', Titulo:"Agendador de Tarefas", Descricao:"Agendador de Tarefas que Desenvolvi utilizando php e mysql.", Repositorio:"https://github.com/JuanMiguelElric/ListadeTarefas"},
                                                {imagem:'a', Titulo:"Teste postaAqui", Descricao:"Nas minhas férias desenvolvi um projeto de teste para o processo Seletivo da PostaAqui, onde Utilizei React js.",Repositório:"https://github.com/JuanMiguelElric/TestePostaqui"},
                                                {imagem:'a', Titulo:"Mini ERP", Descricao:"Mini ERP Desenvolvido em Laravel e Mysql", Repositorio:"https://github.com/JuanMiguelElric/ERP"},
                                                {imagem: 'a', Titulo:"Buscador de CEp", Descricao:"Buscador de cep feito em php utilizando a api viacep", Repositorio:"https://github.com/JuanMiguelElric/BuscadordeCep/blob/main/src/Search.php"},
                                                {image:'a',Titulo:"CruddeUsuario", Descricao:"Crud de Usuario feito para em laravel php  e mysql ", Repositorio:"https://github.com/JuanMiguelElric/CrudUsuario"},
                                                {image: 'a', Titulo:"Api Rest ", Descricao:"Api Rest Desenvolvida em php com o auxilio do curso da Dio", Repositorio:"https://github.com/JuanMiguelElric/ApiRestDioPHP"},
                                                {image:'a', Titulo: "Site Ecommerce Rip Point", Descricao:"Site Ecommerce Freelancer Desenvolvido Em ReactJs, Laravel e mysql.", Repositorio:"https://github.com/JuanMiguelElric/https-github.com-JuanMiguelElric-Ecommerce"}
                                            ].map((projeto,index)=>(
                                            <div key={index} className="cardProjetos">
                                                <div className="card-body">
                                                    <h5 className="card-title">{projeto.Titulo}</h5>
                                                    <p className="card-text">{projeto.Descricao}</p>
                                                    <a href={projeto.Repositorio} className="btn btn-dark">Repositório</a>

                                                </div>
                                            </div>

                                            ))}

                                        </Bounce>
                                    </div>
                                </div>

                            </Fade>
                        </div>

                    </div>
                    <ComponentForm />
                </div>
                <Rodape/>

            </ParallaxProvider>


        </>
    );
}
