import React from "react"
import logo from "../../images/logo.png"
import { Image, Form, StyledLink } from './style.js'

export default function SignUpPage(){
    return(
        <>
        <Image src={logo} alt="logo TrackIt" />
        <Form>
            <input type="email" placeholder="email" name="email" required />
            <input type="password" placeholder="senha" name="password" required />
            <input type="text" placeholder="nome" name="name" required />
            <input type="url" placeholder="foto" name="photo" required />
            <button>Cadastrar</button>
        </Form>
        <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </>
    )
}