import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import escritaimg from "../../assets/imgs/TrackIt.png";
import styledComponents from "styled-components";
import HabitoFechado from "../HabitoFechado/HabitoFechado";
import HabitoCheck from "../HabitoCheck/HabitoCheck";
export default function Hoje(){
    return(
        <Container>
        <Header img={escritaimg}/>
        <HabitoCheck />
        <Footer done="75" />
        </Container>
    )
}

const Container = styledComponents.div`
margin-left:18px;
margin-right:18px;
`;
