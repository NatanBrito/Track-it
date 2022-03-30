import styledComponents from "styled-components";
import Escritaimg from "../../assets/imgs/TrackIt.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Habito from "../Habito/Habito";
import HabitoCheck from "../HabitoCheck/HabitoCheck";
export default function Habitos() {
  return (
    <Fundo>
    <Container>
      <Header img={Escritaimg} />
      <ButtonHabitos>
        <span>Meus hábitos</span>
        <button>+</button>
      </ButtonHabitos>
      <CriarHabitos>
          <HabitoCheck />
      </CriarHabitos>

      <Texto>
        <span>
          Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
          começar a trackear!
        </span>
      </Texto>
      <Footer done="45"/>
    </Container>
    </Fundo>
  );
}
const Fundo=styledComponents.div`
width: 100vw;
height: 100vh;
background-color:#E5E5E5;

`
const CriarHabitos=styledComponents.div`

`

const Container = styledComponents.div`
margin-left:18px;
margin-right:18px;
`;
const Texto = styledComponents.div`
span{
    color: #666666;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
}
`;
const ButtonHabitos = styledComponents.div`
    display:flex;
    justify-content:space-between;
    margin-top: 80px;
    margin-bottom:7px;
        span{
            color: #126BA5;
            font-family: 'Lexend Deca';
            font-style: normal;
            font-weight: 400;
            font-size: 23px;
        }
        button{
            color:white;
            width: 40px;
            height: 35px;
            background: #52B6FF;
            border-radius: 5px;
            border:none;
            cursor:pointer;
            font-size:28px;
        }
        button:hover{
          background-color:#0b7ccc;
          transition: 0.5s;
      
      }
    `;

