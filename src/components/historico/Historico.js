import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import styledComponents from "styled-components";
import { useContext } from "react";
import { FooterNumContext } from "../../context/FooterNum";
import  React ,  {  useState  }  from  'react' ; 
import  'react-calendar/dist/Calendar.css' ;
import {Calendar} from   'react-calendar' ;
export default function Historico() {
  const Toimage = localStorage.getItem("image");
  const { footerNum } = useContext(FooterNumContext);
  function  MyApp ( )  { 
    const  [ value ,  onChange ]  =  useState ( new  Date () ) ;
  
    return  ( 
      <HistoricoCalendario> 
        < Calendar  onChange = { onChange }  value = { value }  /> 
      </HistoricoCalendario> 
    ) ; 
  }
  return (
    <Fundo>
      <Header img={Toimage} />
      <Container>
        <ButtonHabitos>
          <span>Histórico</span>
        </ButtonHabitos>
        <span>Em breve você poderá ver os seus hábitos e os dias que cumpriu eles aqui !!!</span>
        <MyApp />
      </Container>

      <Footer done={footerNum} />
    </Fundo>
  );
}
const HistoricoCalendario=styledComponents.div`
width:335px;
margin:20px auto 0px;

background-color:white;
border-radius: 10px;
.react-calendar{
  border-radius: 10px;
  width:335px;
  height:100%;
}
`
const Fundo = styledComponents.div`
width:100vw;
height:100vh;
background-color:#E5E5E5;
overflow:hidden;
`;
const Container = styledComponents.div`
margin-left:15px;
span{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #666666;
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
