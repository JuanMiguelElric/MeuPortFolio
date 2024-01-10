import Menu from '@/Components/Menu';
import PrimaryParty from '@/Components/PrimaryParty';
import minhafoto from '../../../public/images/minhafoto.png'
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
                    <div className='col-sm-6 text-center'>
                        <h2 style={{fontSize:'4em'}}>Sobre mim</h2>
                        <p>     Olá, meu nome é Juan Miguel de Oliveira, sou desenvolvedor fullstack.
                                Atualmente, estou cursando Ciência da Computação na Unifenas, 
                                embora eu tenha me formado em TI pelo IF Sul de Minas. Apaixonado
                                por tecnologia e por desafios, ingressei na área em 2020, trabalhando
                                no SAAE de Campo do Meio como Técnico de Informática. Lá, atuei na
                                administração de redes, na manutenção de computadores e no 
                                desenvolvimento de planilhas.
                                    Atualmente, atuo como freelancer no campo de desenvolvimento web,
                                porém, estou em busca de uma recolocação profissional. Acredito que
                                tenho muito a agregar à minha carreira ao fazer parte de uma empresa
                        </p>
                    </div>
                    <div className="col-sm-6">
                        <img src={minhafoto}  alt="" />
                    </div>

                </div>
            </div>


        </>
    );
}
