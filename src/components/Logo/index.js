import logo from "../../images/logo.svg";
import styled from "styled-components";

const LogoContainer = styled.div`
    display: flex;
    font-size: 30px;
`;

const LogoIcon = styled.img`
    margin-right: 10px;
`;

function Logo() {
    return (
        <LogoContainer>
            <LogoIcon src={logo} alt='logo Alura Books'/>
            <p>
                <strong>Alura</strong> Books
            </p>
        </LogoContainer>
    );
};

export default Logo;