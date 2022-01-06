import React from "react"
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../../images/logo.png";

export default function LoginPage(){
    return(
        <>
        <Image src={logo} alt="logo TrackIt"/>
        <Form>
            <input type="email" placeholder="email" name="email" required ></input>
            <input type="password" placeholder="senha" name="password" required ></input>
            <button>Entrar</button>
        </Form>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </>
    )
}


const Image = styled.img`
    width: 180px;
    margin-bottom: 32px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input, button{
        width: 303px;
        height: 45px;

        margin-bottom: 6px;
        border: solid 1px #D4D4D4;
        border-radius: 5px;
        padding: 9px 11px;

        ::placeholder{
            font-size: 20px;
            color: #DBDBDB;
        }
    }

    button{
        background-color: #52B6FF;
        font-size: 21px;
        color: #FFFFFF;

        margin-bottom: 25px;
    }
`;

const StyledLink = styled(Link)`
    font-size: 14px;
    color: #52B6FF;
`;