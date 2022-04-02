import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styledComponents from "styled-components";
import HabitoCheck from "../HabitoCheck/HabitoCheck";
import { useEffect,useState, useContext } from "react";
import { TokenContext } from "../../context/Token";
import { ImageContext } from "../../context/imgHeader";
import axios from "axios";
import dayjs from "dayjs";
import { FooterNumContext } from "../../context/FooterNum";
export default function Hoje(){
    require("dayjs/locale/pt-br");
    const {footerNum,setFooterNum}=useContext(FooterNumContext);
    const [habitosDiario,setHabitosDiario]=useState([]);
    const {token}= useContext(TokenContext);
    const {image}=useContext(ImageContext);
    const [feito,setFeito]=useState(0);
    let habitoCompleto=0;
    const config = {
        headers: {
         Authorization: `Bearer ${token}`
        }
      }
      for(let i=0;i<habitosDiario.length;i++){
        if(habitosDiario[i].done ===true){
           habitoCompleto++
        }
    }
     
     const porcentagem= habitoCompleto/habitosDiario.length;
      console.log(porcentagem)
    useEffect(()=>{
        const Get="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today";
        const promise= axios.get(Get,config)
        promise.then(Response =>{console.log(Response); setHabitosDiario(Response.data)})
        promise.catch(err=>{console.log("erro "+ err)})
    },[])
    function HabitoTexto() {
        if (habitoCompleto >0) {
            setFooterNum(porcentagem*100)
            return <p className="green">{`${(porcentagem * 100).toFixed(0)}% dos hábitos concluídos`}</p>
        }
        return <p className="">Nenhum hábito concluído ainda</p>
      }

    return(
        <Container>
            <Header img={image}  />
             <DiaConcluido>
                <span className="title">{dayjs().locale('pt-br').format('dddd, DD/MM')}</span>
                <span className="subtitle">{<HabitoTexto/>}</span> 
            </DiaConcluido>
            <ContainerHabito>
        {habitosDiario.map(habito=>{
           
            const {id,currentSequence,done,highestSequence,name}=habito;
             return(
        <HabitoCheck  callback={(value)=>{setHabitosDiario(value)}}
          key={id} id={id} nome={habito.name} done={done}
         maiorsequencia={highestSequence} sequencia={currentSequence} />
             )
        })}
        </ContainerHabito>
        <Footer done={footerNum} />
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
.green{
    color:green;
}
`;
