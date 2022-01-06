import ReactDOM from "react-dom";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './styles/reset.css';
import './styles/style.css';
import LoginPage from "./components/LoginPage/index.js";
import SignUpPage from "./components/SignUpPage/index.js"


function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/cadastro" element={<SignUpPage />} />
            </Routes>
        </BrowserRouter>
    )
}

ReactDOM.render (<App />, document.querySelector('.root'));