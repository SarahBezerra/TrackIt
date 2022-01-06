import styled from "styled-components";
import { Link } from "react-router-dom";

export const Image = styled.img`
    width: 180px;
    margin-bottom: 32px;
`

export const Form = styled.form`
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

export const StyledLink = styled(Link)`
font-size: 14px;
color: #52B6FF;
`;