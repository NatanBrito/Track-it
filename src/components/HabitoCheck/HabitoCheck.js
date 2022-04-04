import styledComponents from "styled-components";
import Check from "../../assets/imgs/Vector.svg";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";
import { useState} from "react";
export default function HabitoCheck({
  id,
  done,
  nome,
  maiorsequencia,
  sequencia,
  callback,
}) {
  const component = <ThreeDots height={45} color={"white"} width={50} />;
  const ToToken = localStorage.getItem("token");
  const [clicado, setClicado] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${ToToken}`,
    },
  };
  function reload() {
    const Get =
      "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
    const promise = axios.get(Get, config);
    promise.then((response) => {
      callback(response.data);
      setClicado(false);
    });
  }
  function colocaCheck() {
    setClicado(true);
    const postCheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const promise = axios.post(postCheck, {}, config);
    promise.then((response) => {
      reload();
    });
    promise.catch((err) => {
      alert("algo deu errado...");
    });
  }
  function tiracheck() {
    setClicado(true);

    const postUncheck = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
    const promise = axios.post(postUncheck, {}, config);
    promise.then((response) => {
      reload();
    });
    promise.catch((err) => {
      alert("algo deu errado...");
    });
  }

  return (
    <Habito>
      <BoxEsquerda>
        <span>{nome}</span>
        <P>
          <p
            className={
              sequencia !== 0 && sequencia >= maiorsequencia ? "textGreen" : ""
            }
          >
            Sequência atual: {sequencia} dias
          </p>
          <p
            className={
              sequencia !== 0 && sequencia >= maiorsequencia ? "textGreen" : ""
            }
          >
            Seu recorde: {maiorsequencia} dias
          </p>
        </P>
      </BoxEsquerda>
      <Concon>
        <Checkbox
          className={done ? "green" : ""}
          onClick={done ? tiracheck : colocaCheck}
        >
          {clicado ? component : <img src={Check} alt="cachorrada" />}
        </Checkbox>
      </Concon>
    </Habito>
  );
}

const Concon = styledComponents.div`
.green{
    background-color:green;
    color:green;
}
`;
const Checkbox = styledComponents.div`
margin-top:10px;
margin-left:15px;
width: 69px;
height: 69px;
background-color:#EBEBEB;
border: 1 solid #E7E7E7;
border-radius:5px;
display:flex;
cursor:pointer;
justify-content:center;
align-items:center;
`;

const P = styledComponents.div`
margin-top:10px;
`;
const BoxEsquerda = styledComponents.div`
width:240px;
height:64px;
padding:15px;
span{
margin-top:10px;
}
p{
margin-top:2px;

}

`;
const Habito = styledComponents.div`
display:flex;
width: 340px;
height: 94px;
margin-top:10px;
border-radius: 5px;
background-color:#FFFFFF;
span{font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
color:#666666;
}
.textGreen{
color:green;
}
p{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
color: #666666;
}
`;
