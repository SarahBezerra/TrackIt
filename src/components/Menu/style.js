import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    height: 70px;
    padding: 0 35px;

    background-color: #FFFFFF;
    font-size: 18px;

    position: fixed;
    bottom: 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    span{
        color: #52B6FF;
    }

    div{
        width: 91px;
        height: 91px;
        border-radius: 50px;

        background-color: #52B6FF;
        color: #FFFFFF;

        margin-bottom: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
}
`;