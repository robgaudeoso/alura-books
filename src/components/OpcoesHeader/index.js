import styled from "styled-components";

const ListaOpcoes = styled.ul`
    display: flex;
`;

const Opcao = styled.li`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
    font-size: 16px;
    min-width: 120px;
`;

const textoOpcoes = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"];

function OpcoesHeader() {
    return (
        <ListaOpcoes>
            {textoOpcoes.map((texto) => (
                <Opcao>
                    <p>{texto}</p>
                </Opcao>
            ))}
        </ListaOpcoes>
    );
}

export default OpcoesHeader;
