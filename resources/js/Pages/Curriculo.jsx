import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css'
import { Head } from '@inertiajs/react';
import { FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { SiGmail, SiPostgresql } from "react-icons/si";
import { IoLogoJavascript, IoLogoCss3,IoLogoReact,IoLogoNodejs, IoLogoLaravel  } from "react-icons/io5";
import { BsFiletypeHtml } from "react-icons/bs";
import { SiMysql } from "react-icons/si";
import { FaPhp } from "react-icons/fa";
import Menu from '@/Components/Menu';


const Curriculo = () => {
    return (
        <div>
            <Head title="Curriculo" />
            <div className="container-fluid  ">
                <div className="row backgroundimage p-5">
                    <Menu />
                    <div className="col-sm-12 text-center">
                        <div className='title'>
                            <h1 style={{fontSize:'4rem'}}>Desenvolvedor Full Stack</h1>
                            <h2>Nome: Juan Miguel de Oliveira</h2>

                        </div>

                    </div>
                    <div className="row " style={{marginTop:"10%"}}>
                        <div className="col-sm-6">

                        </div>
                        <div className="col-sm-6">
                            <div className="paragrafo">
                                <p>Busco oportunidade como Desenvolvedor Full Stack Júnior em uma empresa inovadora, onde posso aplicar e expandir meus conhecimentos em desenvolvimento web. Meu objetivo é contribuir para projetos desafiadores, desenvolver soluções eficientes e aprender continuamente em um ambiente colaborativo. Estou empolgado para trabalhar em equipes dinâmicas, enfrentar novos desafios e crescer profissionalmente, contribuindo para o sucesso da empresa. Com habilidades sólidas em tecnologias front-end e back-end, estou pronto para agregar valor através do meu comprometimento, criatividade e desejo constante de aprimorar minhas habilidades.</p>

                            </div>
                        </div>

                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-6">
                            <div className="title">
                                <h2>Contato</h2>
                                <p><SiGmail /> Email:oliveirajuan243@gmail.com</p>
                                <p><FaPhoneAlt/> Telefone:35991680924</p>
                                <p><FaLinkedin /> Linkedin:https://www.linkedin.com/in/miguel-oliveira-095671239/</p>
                            </div>
                        </div>

                        
                    </div>
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <h2>habilidades</h2>
                            <div className='habillitycurriculo'>
                                <div><IoLogoJavascript color='YELLOW' size={80}/></div>
                                <div><BsFiletypeHtml color='head' size={80} /></div>
                                <div><IoLogoCss3 color='blue' size={80} /></div>
                                <div><IoLogoReact color='white' size={80}/></div>
                                <div><FaPhp color='blue' size={80} /></div>
                                <div><IoLogoLaravel size={80} /></div>
                                <div><IoLogoNodejs color='green' size={80} /></div>
                                <div><SiMysql size={80} /></div>
                                <div><SiPostgresql color='blue' size={80} /></div>

                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <div className="title text-center ">
                                <h2 className="h1">Projetos Pessoais</h2>
                            </div>
                            <br />
                            <div className="paragrafo mt-5">
                                <h3 className="text-center">ERP para Ecommerce</h3>
                                <p>Desenvolvimento de um Mini ERP: Este sistema possibilita a gestão eficiente de produtos por meio de operações de adição, exclusão e alteração. Construído utilizando as tecnologias avançadas Laravel, MySQL e Bootstrap, o mini ERP proporciona uma experiência intuitiva e responsiva. Com funcionalidades robustas, o sistema permite o cadastro detalhado de produtos, proporcionando uma administração simplificada e eficaz para otimizar a gestão do seu negócio. </p>
                                <br />
                                
                            </div>
                            <div className="paragrafo mt-5">
                                <h3 className="text-center">Agendador de Tarefas </h3>
                                <p>Desenvolvi um Agendador de Tarefas personalizado, construído com as tecnologias CSS, PHP e MySQL. Este agendador foi projetado para atender às nossas necessidades, sendo utilizado por mim e minha esposa para organizar de maneira eficiente a nossa rotina diária. Com um design intuitivo e funcionalidades adaptáveis, o Agendador de Tarefas proporciona uma experiência personalizada, ajudando-nos a gerenciar e planejar as atividades do dia a dia de forma eficaz e organizada</p>
                                <br />

                            </div>
                            <div className="paragrafo mt-5">
                                <h3 className="text-center">Teste PostaAqui</h3>
                                <p>Participei do processo seletivo para a vaga de desenvolvedor fullstack na postAqui, no qual fui desafiado a criar uma calculadora de frete utilizando React.js integrado a uma API de CEP. </p>

                            </div>
                            <div className="paragrafo mt-5">
                                <h3 className="text-center">Aplicativo Hospitalar</h3>
                                <p>Estou desenvolvendo uma aplicação para uso em hospitais, com o objetivo de aprimorar o controle de administração de medicamentos líquidos. A solução engloba um sistema embarcado que atua como um contador preciso para infusão de soro, juntamente com um aplicativo (APK) que possibilita aos médicos registrarem as prescrições medicamentosas destinadas aos pacientes.

                                O aplicativo oferece um recurso regulador que permite aos médicos indicar a quantidade precisa de medicamento a ser administrada, por exemplo, especificando 10ml. Além disso, o sistema envia notificações aos enfermeiros quando restar apenas 5% do medicamento, garantindo uma gestão eficiente e oportuna do estoque.

                                Essa solução visa melhorar a comunicação entre médicos e enfermeiros, garantindo uma administração segura e controlada de medicamentos, enquanto utiliza tecnologia para otimizar o processo e a segurança do paciente.</p>

                            </div>



                        </div>
                    </div>
                    <br />
                    <br />
                    <div className="row mt-5">
                        <div className="col-sm-12">
                            <div className="title">
                                <h2 style={{fontSize:"3em"}}>Experiencias</h2>
                            </div>
                            <div className="paragrafo">
                                <h3>Técnico de Informática</h3>
                                <h2>Serviço Autonomo de água e esgoto de Campo do meio </h2>
                                <small>periodo 2021-2023</small>
                                <p>Construção de Plano Diretor de Informática (PDI)</p>
                                <p>Administração de Rede Linux</p>
                                <p>Gerencia de sistemas e processos</p>
                                <p>Implantação de Processos e sistemas de gestão</p>
                                <p>Manutenção Técnica em hardware.</p>
                                <p>Instalação e Administração do Banco de Dados SQL Server</p>
                            </div>
                            <br />
                            <br />
                            <div className="paragrafo">
                                <h3>Desenvolvedor Full stack</h3>
                                <h2>Autonomo </h2>
                                <small>periodo 2023-no momento</small>
                                <p>Construção de interfaces utilizando Java Script, Reactjs, Html, CSS e Bootstrap.</p>
                                <p>Desenvolvimento Backeend utilizando laravel php, Mysql, ProstgreSql.</p>
                                <p>Desenvolvimento de Websites</p>
                                <p>Desenvolvimento de Sistemas para clinicas odontológicas</p>
                                <p>Manutenção em Websites</p>
                                <p>Criação de APIS, de controle financeiro, controle de estoque e de cadastro de CLientes.</p>
                                <p>Desgin de websites</p>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    );
}

export default Curriculo;
