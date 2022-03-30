import styledComponents from "styled-components";
import { useState } from "react";
export default function Habito(){
const [habitoText,setHabitoText]=useState("")
const [habitoDay,setHabitoDay]=useState([])
const [click,setClick]=useState(false)
return(
    <Container>
     <input className="input" type="text"
     value={habitoText} onChange={e=>{setHabitoText(e.target.value); console.log(habitoText)}}
     placeholder="nome do hábito"></input>
     <WeekDays>
     <button className={habitoDay.includes("0") ?"clicado" :""} dia="0" onClick={(e)=> toggleClicado(e)}>D</button>
     <button className={habitoDay.includes("1")  ?"clicado" :""} dia="1" onClick={(e)=> toggleClicado(e)}>S</button>
     <button className={habitoDay.includes("2")  ?"clicado" :""} dia="2" onClick={(e)=> toggleClicado(e)}>T</button>
     <button className={habitoDay.includes("3")  ?"clicado" :""} dia="3" onClick={(e)=> toggleClicado(e)}>Q</button>
     <button className={habitoDay.includes("4")  ?"clicado" :""} dia="4" onClick={(e)=> toggleClicado(e)}>Q</button>
     <button className={habitoDay.includes("5")  ?"clicado" :""} dia="5" onClick={(e)=> toggleClicado(e)}>S</button>
     <button className={habitoDay.includes("6")  ?"clicado" :""} dia="6" onClick={(e)=> toggleClicado(e)}>S</button>
     </WeekDays>
     <SalvarCancelar>
     <span>Cancelar</span>
     <button>Salvar</button>
     </SalvarCancelar>
    </Container>
)
function toggleClicado(e){
 for(let i=0;i<habitoDay.length;i++){
     if(habitoDay[i] === e.target.attributes.dia.value){
         habitoDay.splice(i,1)
         return setClick(!click)
        }
    }
    console.log(habitoDay)
  setHabitoDay([...habitoDay,e.target.attributes.dia.value]) 
}

}


const SalvarCancelar=styledComponents.div`
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
}
button{
    width: 84px;
    height: 35px;
    background: #52B6FF;
    border-radius: 5px;
    border:none;
    color:white;
}
`
const WeekDays=styledComponents.div`
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
    border: 1px solid #D5D5D5;
    box-sizing: border-box;
    border-radius: 5px;

      }

`
 const Container=styledComponents.div`
    background-color: #126BA5;
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
 `
