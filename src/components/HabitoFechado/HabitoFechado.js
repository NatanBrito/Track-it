import styledComponents from "styled-components";
import trash from "../../assets/imgs/Vector (2).png"

export default function HabitoFechado({habito,dias}) {
    
    return(
        <>
            <HabitosFechados>
                <HabitoFechados>
                    <HabitoEDias>
                        <span className="nomeHabito">{habito}</span>
                        <WeekDays>
                            <button className={ toggleClicado(0)?"clicado" :""} dia="0" >D</button>
                            <button className={toggleClicado(1) ?"clicado" :""} dia="1" >S</button>
                            <button className={toggleClicado(2)?"clicado" :""} dia="2" >T</button>
                            <button className={toggleClicado(3) ?"clicado" :""} dia="3" >Q</button>
                            <button className={toggleClicado(4)?"clicado" :""} dia="4" >Q</button>
                            <button className={toggleClicado(5) ?"clicado" :""} dia="5" >S</button>
                            <button className={toggleClicado(6)?"clicado" :""} dia="6" >S</button>
                        </WeekDays>
                    </HabitoEDias>
                        <img src={trash} alt="trash"/>
                </HabitoFechados>
            </HabitosFechados>
        </>


    )
    function toggleClicado(dia){
        for(let i=0;i<dias.length;i++){
            if(dias[i] === dia){
                console.log(dia)
                return  true
               }
            }
            return false
}
}
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
const  HabitoEDias = styledComponents.div`
margin-left:15px;
margin-top:10px;
span{
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 20px;
color: #666666;
width:270px;
}
`
const HabitoFechados=styledComponents.div`
width: 340px;
height: 94px;
display:flex;
margin-top:10px;
border-radius: 5px;
background-color: #ffffff;
img{
    width:13px;
    height:15px;
    margin-top:15px;
}
HabitoFechados:nth-last-child(1){
    margin-bottom:100px;
}
`

const HabitosFechados=styledComponents.div`

`