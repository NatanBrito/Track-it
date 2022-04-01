import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styledComponents from "styled-components";
import HabitoCheck from "../HabitoCheck/HabitoCheck";
import { useEffect,useState, useContext } from "react";
import { TokenContext } from "../../context/Token";
import { ImageContext } from "../../context/imgHeader";
import axios from "axios";
export default function Hoje(){
    const [habitosDiario,setHabitosDiario]=useState([])
    const {token}= useContext(TokenContext)
    const {image}=useContext(ImageContext)
    const config = {
        headers: {
         Authorization: `Bearer ${token}`
        }
      }
    useEffect(()=>{
        const Get="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise= axios.get(Get,config)
        promise.then(Response =>{console.log(Response); setHabitosDiario(Response.data)})
        promise.catch(err=>{console.log("erro "+ err)})
    },[])
    return(
        <Container>
             <DiaConcluido>
                <span className="title">Segunda, 17/05</span>
                <span className="subtitle">Nenhum hábito concluído ainda</span>
            </DiaConcluido>
            <ContainerHabito>
        {habitosDiario.map(habito=>{
            const {id,currentSequence,done,highestSequence,name}=habito;
             return(
        <HabitoCheck  key={id} id={id} nome={habito.name} done={done}
         maiorsequencia={highestSequence} sequencia={currentSequence} />
             )
        })}
        </ContainerHabito>
        <Header img={image}  />
        <Footer done="75" />
        </Container>
         )
    
}
const ContainerHabito=styledComponents.div`
background-color:#E5E5E5;

`
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
const Container = styledComponents.div`
margin-left:18px;
margin-right:18px;
`;
