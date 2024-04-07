import perfil from "../../images/perfil.svg";
import sacola from "../../images/sacola.svg";
import styled from "styled-components";

const Icone = styled.li`
    margin-right: 40px;
    width: 25px;
`;

const ListaIcones = styled.ul`
    display: flex;
    align-items: center;
`;

const icones = [perfil, sacola];

function IconesHeader() {
    return (
        <ListaIcones>
            {icones.map((icone) => (
                <Icone>
                    <img src={icone} alt='icone'></img>
                </Icone>
            ))}
        </ListaIcones>
    );
}

export default IconesHeader;
