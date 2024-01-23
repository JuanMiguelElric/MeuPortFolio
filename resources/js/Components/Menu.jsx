import React,{useState} from "react";
import logo from "../../../public/images/eu.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css'
import '../../css/index.css';
import { Link } from '@inertiajs/react';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";
import { InertiaLink } from "@inertiajs/inertia-react";


const Menu = () =>{
    const [navbarOpen, SetNavbarOpen] = useState(false);
    console.log('menu');
    return(
        <>
            <nav  className="navbar  navbar-inverse" style={{fontFamily: 'Cormorant Garamond, serif',color:'#fffff'}}>
                <div className="container " style={{paddingRight:'10rem'}}>
                    <div className="navbar-header">
                        <img src={logo} style={{width:'6em'}} alt="" />
                    </div>
                    <ul className="d-flex p-3 ">
                        <li className=" d-sm-block removerSm">
                            <Link className="link" href="/">
                                Home
                            </Link>
                        </li>
                        <li className=" removerSm"><Link className="link" href="/curriculoPessoal"> Curriculo</Link></li>
                        <li className=" removerSm link"><InertiaLink className="link" href="#habilidade">Habilidade</InertiaLink></li>
                        <li className=" removerSm link"><InertiaLink className="link" href="#projeto">Projeto</InertiaLink></li>
                        <li className=" menu d-md-none  d-lg-none">
                            <button className="menu" onClick={()=> SetNavbarOpen((prev) => !prev)}>
                                {navbarOpen ?  <MdClose color="white" size={45} /> : <GiHamburgerMenu size={45} color="white" />}
                                <div className={`menu-nav${navbarOpen ? ' show-menu' : ''}`}>
                                    <div color="black"><Link className="linksm" href="/">Home</Link></div>
                                    <div><Link className="linksm" href="/curriculoPessoal">Curriculo</Link></div>
                                    <div>
                                        <InertiaLink className="link" href="#habilidade">Habilidade</InertiaLink>
                                    </div>
                                    <div><InertiaLink className="link" href="#projeto">Projeto</InertiaLink> </div>
                                    <div><Link className="linksm" href="/Entraremcontato/desenvolvedorJuan">Contato</Link></div>

                                </div>
                            </button>
                        </li>
                    </ul>
                        
                </div>
                            <div className="menu-bar-toogle">

                            </div>
            </nav>
        </>
    )
}
export default Menu;