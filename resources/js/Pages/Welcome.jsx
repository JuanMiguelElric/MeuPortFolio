import Menu from '@/Components/Menu';
import PrimaryParty from '@/Components/PrimaryParty';

import { Link, Head } from '@inertiajs/react';
export default function Welcome({ quote }) {
    return (
        <>
            <Head title="Bem vindo" />
            <div className="container-fluid ">
                <div className="backgroundimage">
                
                    {/*<Menu />*/}
                    <br />
                    <PrimaryParty />
                

                </div>
            </div>


        </>
    );
}
