import styledComponents from "styled-components";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Habito from "../Habito/Habito";
import axios from "axios";
import HabitoFechado from "../HabitoFechado/HabitoFechado";
import { useState, useEffect, useContext } from "react";
import { FooterNumContext } from "../../context/FooterNum";
export default function Habitos() {
  const { footerNum } = useContext(FooterNumContext);
  const [gerandoHabito, setGerandoHabito] = useState(false);
  const [ativando, setAtivando] = useState(true);
  const [habitosApi, setHabitosApi] = useState([]);
  const ToToken = localStorage.getItem("token");
  const Toimage = localStorage.getItem("image");
  useEffect(() => {
    const get =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const config = {
      headers: {
        Authorization: `Bearer ${ToToken}`,
      },
    };
    const promise = axios.get(get, config);
    promise.then((response) => {
      setHabitosApi(response.data);
    });
    promise.catch((err) =>
      alert("voce escolheu um dia e escreveu um hábito...?")
    );
  }, []);
  return (
    <Fundo>
      <Container>
        <Header img={Toimage} />
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
        <Texto>
          {habitosApi.length === 0 ? (
            <span>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito
              para começar a trackear!
            </span>
          ) : (
            ""
          )}
        </Texto>
        <CriarHabitos>
          {gerandoHabito ? (
            <Habito
              callbackHabito={(value) => setHabitosApi(value)}
              callback={(value) => setGerandoHabito(value)}
              callbackAtivar={(value) => setAtivando(value)}
            />
          ) : (
            ""
          )}
          {habitosApi.map((habito) => {
            return (
              <HabitoFechado
                callbackHabito={(value) => setHabitosApi(value)}
                id={habito.id}
                key={habito.name + habito.id}
                habito={habito.name}
                dias={habito.days}
              />
            );
          })}
        </CriarHabitos>

        <Footer done={footerNum} />
      </Container>
    </Fundo>
  );
}
const Fundo = styledComponents.div`
width: 100%;
height:100%;
overflow:hidden;

background-color:#E5E5E5;
`;
const CriarHabitos = styledComponents.div`
`;
const Container = styledComponents.div`
margin-bottom:420px;
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
