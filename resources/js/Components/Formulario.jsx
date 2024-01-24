import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { router } from '@inertiajs/react'

const Formulario = () => {
    const [informacoes, setInformacoes] = useState({
        nome: '',
        email: '',
        telefone: '',
    });

    const [erros, setErros] = useState({
        nome: '',
        email: '',
        telefone: '',
    });

    const InputData = (event) => {
        const { name, value } = event.target;
        setInformacoes({ ...informacoes, [name]: value });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Lógica para validar antes de enviar
        if (!informacoes.nome.trim()) {
            setErros({ ...erros, nome: 'Digite um nome válido' });
            return;
        } else if (!informacoes.email.trim()) {
            setErros({ ...erros, email: 'O campo e-mail não pode ser vazio' });
            return;
        } else if (informacoes.telefone.length !== 11) {
            setErros({ ...erros, telefone: 'Digite um telefone válido como (xx) xxxxx-xxxx dígitos' });
            return;
        }

        // Limpe os alertas antes de enviar
        setErros({
            nome: '',
            email: '',
            telefone: '',
        });

        // Envie os dados se a validação passar
        try {
            await router.post('/Contatoenviado/obrigado', informacoes);
        } catch (error) {
            console.error("Erro:", error);
            router.post('/Erros/FalhaProcessamento');
        }
    }

    return (
        <>
            <div className="container mt-5">
                <div className="d-flex justify-content-center text-center" style={{ border: "3px solid black", padding: "20px" }}>
                    <div>
                        <h2>Entrar em contato!</h2>
                        <form onSubmit={handleSubmit} method="POST">
                            <label htmlFor="nome">Nome:</label>
                            <input type="text" name="nome" className="mt-3 form-control" value={informacoes.nome} placeholder="Digite seu nome" onChange={InputData} />
                            <span className="text-danger">{erros.nome}</span>
                            <br />
                            <label htmlFor="email">Email:</label>
                            <input type="email" name="email" className="mt-1 form-control" value={informacoes.email} placeholder="Digite seu melhor email" onChange={InputData} />
                            <span className="text-danger">{erros.email}</span>
                            <br />
                            <label htmlFor="telefone">Telefone:</label>
                            <input type="text" name="telefone" value={informacoes.telefone} className="mt-1 form-control" placeholder="Digite seu telefone" onChange={InputData} />
                            <span className="text-danger">{erros.telefone}</span>
                            <br />
                            <button className="btn btn-lg btn-dark mt-3" type="submit">Enviar</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Formulario;
