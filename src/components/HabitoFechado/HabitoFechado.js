import styledComponents from "styled-components";
import trash from "../../assets/imgs/Vector (2).png"

export default function HabitoFechado() {
    
    return(
        <>
            <DiaConcluido>
            <span className="title">Segunda, 17/05</span>
            <span className="subtitle">Nenhum hábito concluído ainda</span>
            </DiaConcluido>
            <HabitosFechados>
                <HabitoFechados>
                    <HabitoEDias>
                        <span className="nomeHabito">Ler 1 capítulo de livro</span>
                        <WeekDays>
                            <button className={false?"clicado" :""} dia="0" >D</button>
                            <button className={false ?"clicado" :""} dia="1" >S</button>
                            <button className={false?"clicado" :""} dia="2" >T</button>
                            <button className={false ?"clicado" :""} dia="3" >Q</button>
                            <button className={false?"clicado" :""} dia="4" >Q</button>
                            <button className={false ?"clicado" :""} dia="5" >S</button>
                            <button className={false?"clicado" :""} dia="6" >S</button>
                        </WeekDays>
                    </HabitoEDias>
                        <img src={trash} alt="trash"/>
                </HabitoFechados>
            </HabitosFechados>
        </>


    )
}

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
border-radius: 5px;
background-color: tomato;
img{
    width:13px;
    height:15px;
    margin-top:15px;
}
`

const HabitosFechados=styledComponents.div`

`