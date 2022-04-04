import styledComponents from "styled-components";
import { useState } from "react";
import axios from "axios";
import { ThreeDots } from "react-loader-spinner";
export default function Habito({ callback, callbackAtivar, callbackHabito }) {
  const [habitoText, setHabitoText] = useState("");
  const [habitoDay, setHabitoDay] = useState([]);
  const [click, setClick] = useState(false);
  const ToToken = localStorage.getItem("token");
  const component = <ThreeDots height={45} color={"white"} width={50} />;
  const [animationButton, setAnimationButton] = useState(true);
  const config = {
    headers: {
      Authorization: `Bearer ${ToToken}`,
    },
  };
  return (
    <Container>
      <input
        className="input"
        type="text"
        value={habitoText}
        onChange={(e) => {
          setHabitoText(e.target.value);
        }}
        placeholder="  nome do hábito"
      ></input>
      <WeekDays>
        <button
          className={habitoDay.includes("0") ? "clicado" : ""}
          dia="0"
          onClick={(e) => toggleClicado(e)}
        >
          D
        </button>
        <button
          className={habitoDay.includes("1") ? "clicado" : ""}
          dia="1"
          onClick={(e) => toggleClicado(e)}
        >
          S
        </button>
        <button
          className={habitoDay.includes("2") ? "clicado" : ""}
          dia="2"
          onClick={(e) => toggleClicado(e)}
        >
          T
        </button>
        <button
          className={habitoDay.includes("3") ? "clicado" : ""}
          dia="3"
          onClick={(e) => toggleClicado(e)}
        >
          Q
        </button>
        <button
          className={habitoDay.includes("4") ? "clicado" : ""}
          dia="4"
          onClick={(e) => toggleClicado(e)}
        >
          Q
        </button>
        <button
          className={habitoDay.includes("5") ? "clicado" : ""}
          dia="5"
          onClick={(e) => toggleClicado(e)}
        >
          S
        </button>
        <button
          className={habitoDay.includes("6") ? "clicado" : ""}
          dia="6"
          onClick={(e) => toggleClicado(e)}
        >
          S
        </button>
      </WeekDays>
      <SalvarCancelar>
        <span
          onClick={() => {
            callback(false);
            callbackAtivar(true);
          }}
        >
          Cancelar
        </span>
        <button onClick={mandandoPraApi}>
          {animationButton ? "Salvar" : component}
        </button>
      </SalvarCancelar>
    </Container>
  );
  function mandandoPraApi() {
    setAnimationButton(false);
    const post =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const habito = {
      name: habitoText,
      days: habitoDay,
    };
    const promise = axios.post(post, habito, config);
    promise.then((Response) => {
      reGet();
    });
    promise.catch((err) => {
      alert("ocorreu algum problema...");
      setAnimationButton(true);
    });
  }
  function reGet() {
    setAnimationButton(true);
    const get =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits";
    const promise = axios.get(get, config);
    promise.then((response) => {
      callbackHabito(response.data);
      callback(false);
      callbackAtivar(true);
    });
    promise.catch((err) => console.log("erro fi" + err));
  }
  function toggleClicado(e) {
    for (let i = 0; i < habitoDay.length; i++) {
      if (habitoDay[i] === e.target.attributes.dia.value) {
        habitoDay.splice(i, 1);
        return setClick(!click);
      }
    }
    setHabitoDay([...habitoDay, e.target.attributes.dia.value]);
  }
}
const SalvarCancelar = styledComponents.div`
width:303px;
display:flex;
justify-content:flex-end;
align-items:center;
span{
    color: #52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    margin-right:23px;
    cursor:pointer;
}
button{
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    border:none;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
}
`;
const WeekDays = styledComponents.div`
width:303px;
display:flex;
margin-top:8px;
margin-bottom:29px;
justify-content:flex-start;
.clicado{
    background: #CFCFCF;
}
button{
    width: 30px;
    height: 30px;
    margin-right:3px;
    background: #FFFFFF;
    color:#DBDBDB;
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;
      }
`;
const Container = styledComponents.div`
    background-color: white;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:25px;
        .input{
          margin-top:18px;
        }
 `;
