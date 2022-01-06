import React from "react"
import { Image, Form, StyledLink } from "./style";
import logo from "../../images/logo.png";

export default function LoginPage(){
    return(
        <>
        <Image src={logo} alt="logo TrackIt"/>
        <Form>
            <input type="email" placeholder="email" name="email" required />
            <input type="password" placeholder="senha" name="password" required />
            <button>Entrar</button>
        </Form>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </>
    )
}