import React from "react";
import logo from "../../../public/images/logo.png"
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css'

const Menu = () =>{
    console.log('menu');
    return(
        <>
            <nav  className="navbar  navbar-inverse">
                <div className="container " style={{paddingRight:'10rem'}}>
                    <div className="navbar-header">
                        <img src={logo} style={{width:'6em'}} alt="" />
                    </div>
                    <ul className="d-flex p-3 ">
                        <li className="d-none d-xl-block">Home</li>
                        <li className="d-none d-xl-block">Sobre mim</li>
                        <li className="d-none d-xl-block">Habilidades</li>
                        <li className="d-none d-xl-block">Projetos</li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Menu;