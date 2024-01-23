import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../css/app.css'
import '../../css/index.css'
import { Head } from '@inertiajs/react';
import ComponentForm from "@/Components/ComponentForm";


const Contato = ()=>{
    return(
        <>
        
            <Head title="Contato" />
            <div className="container-fluid">
                <ComponentForm />
            </div>
        </>
    )
}
export default Contato;