import React, { useState } from "react"
import axios from "axios";
import Loader from "react-loader-spinner";
import { Image, Form, StyledLink } from "./style";
import logo from "../../images/logo.png";

export default function LoginPage(){
    const [ token, setToken ] = useState("");
    const [ isEnabled, setIsEnabled ] = useState(true);
    const [ loginData, setLoginData ] = useState({
        email: "",
        password: ""
    });

    function handleLogin(e){
        e.preventDefault();
        setIsEnabled(false)
        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login", 
        loginData);

        promise.then(response => {
            setIsEnabled(true)
            console.log(response)
            console.log(response.data.token)
            setToken(response.data.token)
        })
        promise.catch(error => {
            setIsEnabled(true)
            console.log(error.response)
        })
    }

    function handleInputChange(e){
        setLoginData({...loginData, [e.target.name]: e.target.value})
    }

    return(
        <>
        <Image src={logo} alt="logo TrackIt"/>
        <Form onSubmit={handleLogin} enabled={isEnabled}>
            <fieldset disabled={!isEnabled}>
                <input type="email" placeholder="email" name="email" value={loginData.email} onChange={handleInputChange} required />
                <input type="password" placeholder="senha" name="password" value={loginData.password} onChange={handleInputChange} required />

                <button type="submit">{isEnabled ? "Entrar" : <Loader type="ThreeDots" color="#FFF" height={13} width={38} />}</button>
            </fieldset>
        </Form>
        <StyledLink to="/cadastro">Não tem uma conta? Cadastre-se!</StyledLink>
        </>
    )
}
