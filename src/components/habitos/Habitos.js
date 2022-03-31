import styledComponents from "styled-components";
import Escritaimg from "../../assets/imgs/TrackIt.png";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import Habito from "../Habito/Habito";
import axios from "axios";
import HabitoFechado from "../HabitoFechado/HabitoFechado";
import { useState } from "react";
import { TokenContext } from "../../context/Token";
import { useEffect } from "react";
export default function Habitos() {
  const {token}= useContext(TokenContext);
  const [gerandoHabito, setGerandoHabito] = useState(false);
  const [ativando, setAtivando] = useState(true);
  const [habitosApi,setHabitosApi]=useState([])
  useEffect(()=>{
    const get="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"
    const config = {
     headers: {
      Authorization: `Bearer ${token}`
     }
   }
    const promise= axios.get(get,config)
    promise.then(response =>{ console.log(response.data); setHabitosApi(response.data)})
    promise.catch(err => console.log("erro fi"+err))
  },[])
  return (
    <Fundo>
      <Container>
        <Header img={Escritaimg} />
        <ButtonHabitos>
          <span>Meus hábitos</span>
          <button
            onClick={
              ativando
                ? () => {
                    setGerandoHabito(!gerandoHabito);
                    setAtivando(!ativando);

                  }
                : console.log("xx")
            }
          >
            +
          </button>
        </ButtonHabitos>
        <CriarHabitos>
          {gerandoHabito ? (
            <Habito
              callback={(value) => setGerandoHabito(value)}
              callbackAtivar={(value) => setAtivando(value)}
            />
            
          ) : (
            ""
          )}
          {habitosApi.map(habito =>{
            return(
              <HabitoFechado key={habito.name} habito={habito.name} dias={habito.days}/>
            )
          })}
        </CriarHabitos>

        <Texto>
          {habitosApi.length === 0 ?<span>
            Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
            começar a trackear!
          </span> : ""}
        </Texto>
        <Footer done="45" />
      </Container>
    </Fundo>
  );
}
const Fundo = styledComponents.div`
width: 100vw;
height: 100vh;
background-color:#E5E5E5;

`;
const CriarHabitos = styledComponents.div`

`;

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
