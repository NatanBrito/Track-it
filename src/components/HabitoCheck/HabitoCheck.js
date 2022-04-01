import styledComponents from "styled-components";
import Check from "../../assets/imgs/Vector.svg";
import axios from "axios";
import { useState,useContext } from "react";
import { TokenContext } from "../../context/Token";
export default function HabitoCheck({id,done,nome,maiorsequencia,sequencia}){
    const [clicado,setClicado]=useState(false)
    const {token}= useContext(TokenContext)
    const config = {
        headers: {
         Authorization: `Bearer ${token}`
        }
      }
   console.log(done)
   function  colocaCheck(){
    console.log("verdaderia")  
    const postCheck=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`;
    const promise=axios.post(postCheck,{},config);
    promise.then(response =>{console.log("sucesso")})
    promise.catch(err=>{console.log(err.response.data)})  
       }   
    function tiracheck(){
        console.log("falsa")
        const postUncheck=`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`;
        const promise=axios.post(postUncheck,{},config);
        promise.then(response =>{console.log("Removido")})
        promise.catch(err=>{console.log(err.response.data)}) 
    }
    
    return(
            
        <Habito>
            <BoxEsquerda>
                <span>{nome}</span>
                <P>
                <p>Sequência atual: {sequencia}dias</p>
                <p>Seu recorde: {maiorsequencia} dias</p>
                </P>
            </BoxEsquerda>
            <Concon>
            <Checkbox className={done ? "green" : ""} onClick={done?tiracheck:colocaCheck}>
              <img src={Check} alt="cachorrada"/>
            </Checkbox>
            </Concon>
         </Habito>
    )
}


const Concon=styledComponents.div`
.green{
    background-color:green;
}
`
const Checkbox=styledComponents.div`
margin-top:10px;
margin-left:15px;
width: 69px;
height: 69px;
background-color:#EBEBEB;
border: 1 solid #E7E7E7;
border-radius:5px;
display:flex;
justify-content:center;
align-items:center;
`

const P=styledComponents.div`
margin-top:10px;
`
const BoxEsquerda= styledComponents.div`
width:240px;
height:64px;
padding:15px;
span{
margin-top:10px;
}
p{
margin-top:2px;

}

`
const Habito=styledComponents.div`
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
p{
    
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 13px;
color: #666666;
}
`
