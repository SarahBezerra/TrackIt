import axios from "axios"
import React, { useState } from "react"
import logo from "../../images/logo.png"
import { Image, Form, StyledLink } from './style.js'
import Loader from "react-loader-spinner"
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function SignUpPage(){
    const [ isEnabled, setIsEnabled ] = useState(true);
    const [ registrationData, setRegistrationData ] = useState({
            email: "",
            name: "",
            image: "",
            password: ""
        }
    )

    function handleInputChange(e){
        setRegistrationData({...registrationData, [e.target.name]: e.target.value});
    }

    function handleSignUp(e){
        e.preventDefault();
        setIsEnabled(false)

        const promise = axios.post("https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up",
        registrationData);
        
        promise.then(response => {
            console.log(response);
            setIsEnabled(true)
        });
        promise.catch(error => console.log(error.response));
    }

    return(
        <>
        <Image src={logo} alt="logo TrackIt" />
        <Form onSubmit={handleSignUp} enabled={isEnabled}>
            <fieldset disabled={!isEnabled}>
                <input type="email" placeholder="email" name="email" value={registrationData.email} onChange={handleInputChange} required />
                <input type="password" placeholder="senha" name="password" value={registrationData.password} onChange={handleInputChange} required />
                <input type="text" placeholder="nome" name="name" value={registrationData.name} onChange={handleInputChange} required />
                <input type="url" placeholder="foto" name="image" value={registrationData.image} onChange={handleInputChange} required />
                <button type="submit">{isEnabled ? "Cadastrar" : <Loader type="ThreeDots" color="#FFF" height={13} width={38} />}</button>
            </fieldset>
        </Form>
        <StyledLink to="/">Já tem uma conta? Faça login!</StyledLink>
        </>
    )
}