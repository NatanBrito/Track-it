import styledComponents from "styled-components"

export default function Habito(){
return(
    <Container>
     <input className="input" type="text" placeholder="nome do hábito"></input>
     <WeekDays>
     <Day>D</Day>
     <Day>S</Day>
     <Day>T</Day>
     <Day>Q</Day>
     <Day>Q</Day>
     <Day>S</Day>
     <Day>S</Day>
     </WeekDays>
    </Container>
)

}
const Day=styledComponents.div`
width: 30px;
height: 30px;
background: #FFFFFF;
border: 1px solid #D5D5D5;
box-sizing: border-box;
border-radius: 5px;
`
const WeekDays=styledComponents.div`

`
 const Container=styledComponents.div`
    background-color: #52B6FF;
    width: 340px;
    height: 180px;
    border-radius: 5px;
    display:flex;
    flex-direction:column;
    align-items:center;
    margin-bottom:25px;
        .input{
    
        }
 `
