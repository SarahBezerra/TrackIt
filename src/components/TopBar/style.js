import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 70px;
    padding: 0 18px;

    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);

    position: fixed;
    top: 0px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    p{
        font-family: 'Playball', cursive;
        font-size: 39px;
        color: #FFFFFF;
    }

    img{
        border-radius: 50%;
        width: 51px;
        height: 51px;
    }
`;