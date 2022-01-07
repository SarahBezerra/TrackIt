import { Container } from "./style.js"

export default function TopBar(){
    return(
        <Container>
            <p>TrackIt</p>
            <img src={"https://pt-pt.reactjs.org/logo-og.png"} alt="foto de perfil"/>
        </Container>
    );
}