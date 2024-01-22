import Menu from '@/Components/Menu';
import '../../css/app.css';
import '../../css/index.css';

import PrimaryParty from '@/Components/PrimaryParty';
import { Link, Head } from '@inertiajs/react';
import ComponentForm from '@/Components/ComponentForm';
import { ParallaxProvider } from 'react-scroll-parallax';
import { Fade } from "react-awesome-reveal";

import Rodape from '@/Components/Rodap';
import SecundaryParty from '@/Components/secundaryparty';
import TerceiraParte from '@/Components/terceiraparty';

export default function Welcome() {
    return (
        <>
            <Head title="Bem vindo" />
            <ParallaxProvider scrollAxis="horizontal" >
                <div className="backgroundimage">
                    <Menu />
                
              
                    <br />
                    <Fade cascade damping={0.1}>
                        <PrimaryParty />

                    </Fade>
                

                </div>

                <div   style={{fontFamily: 'Cormorant Garamond, serif'}}>
                    <SecundaryParty />
                    <TerceiraParte />
                    

                 
                    <div className="row">

                    </div>
                    <ComponentForm />
                </div>
                <Rodape/>

            </ParallaxProvider>


        </>
    );
}
