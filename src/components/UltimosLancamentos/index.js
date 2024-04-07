import { livros } from "./dadosUltimosLancamentos";
import styled from "styled-components";
import { Titulo } from "../Titulo";
import CardRecomenda from "../CardRecomenda";
import imagemLivro from "../../images/livro2.png";

const UltimosLancamentosContainer = styled.section`
    background-color: #ebecee;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`;

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`;

function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo cor='#eb9b00' tamanhoFonte='36px'>
                ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <NovosLivrosContainer>
                {livros.map((livro) => (
                    <img src={livro.src} />
                ))}
            </NovosLivrosContainer>
            <CardRecomenda
                titulo='Talvez você se interesse por...'
                subtitulo='Angular 11'
                descricao='Construindo uma aplicação com a plataforma Google'
                img={imagemLivro}
            />
            <CardRecomenda
                titulo='Talvez você se interesse por...'
                subtitulo='Angular 12'
                descricao='Construindo uma aplicação com a plataforma Google'
                img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    );
}

export default UltimosLancamentos;
