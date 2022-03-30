import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import Escritaimg from "../../assets/imgs/TrackIt.png";
import styledComponents from "styled-components";
export default function Hoje(){
    return(
        <Container>
        <Header img={Escritaimg}/>
        <DiaConcluido>
          <span className="title">Segunda, 17/05</span>
          <span className="subtitle">Nenhum hábito concluído ainda</span>
        </DiaConcluido>
            <HabitosFechados>
            <HabitoFechados>

            </HabitoFechados>
            </HabitosFechados>
        <Footer done="75" />
        </Container>
    )
}
const HabitoFechados=styledComponents.div`
width: 340px;
height: 94px;
border-radius: 5px;
background-color: tomato;
`

const HabitosFechados=styledComponents.div`

`
const Container = styledComponents.div`
margin-left:18px;
margin-right:18px;

`;

const DiaConcluido = styledComponents.div`
   display:flex;
   flex-direction:column;
    margin-top: 100px;
    margin-bottom:7px;
        span{
            color: #126BA5;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 23px;
        }
        .subtitle{
            color:#BABABA;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
        }
        `