import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { livros } from "./dadosPesquisa";

const PesquisaContainer = styled.section`
    background-image: linear-gradient(90deg, #002f52 35%, #326589 165%);
    color: #fff;
    text-align: center;
    padding: 85px 0;
    width: 100%;
`;

const Titulo = styled.h2`
    color: #fff;
    font-size: 36px;
    text-align: center;
    width: 100%;
`;

const Subtitulo = styled.h3`
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 40px;
`;

function Pesquisa() {
    const [livrosPesquisados, setLivrosPesquisados] = useState([]);

    return (
        <PesquisaContainer>
            <Titulo>Já sabe por onde começar?</Titulo>
            <Subtitulo>Encontre seu livro em nossa estante.</Subtitulo>
            <Input
                placeholder='Escreva sua próxima leitura'
                onBlur={(evento) => {
                    const textoDigitado = evento.target.value.toLowerCase();
                    const resultadoPesquisa = livros.filter((livro) =>
                        livro.nome.toLowerCase().includes(textoDigitado)
                    );
                    setLivrosPesquisados(resultadoPesquisa);
                }}
            />
            {livrosPesquisados.map((livro) => (
                <div>
                    <p>{livro.nome}</p>
                    <img src={livro.src} />
                </div>
            ))}
        </PesquisaContainer>
    );
}

export default Pesquisa;
