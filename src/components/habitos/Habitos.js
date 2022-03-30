import styledComponents from "styled-components";
import Escritaimg from "../../assets/imgs/TrackIt.png"
export default function Habitos(){
    return(
        <Container>
            <Topo>
            <span>TrackIt</span>
            <img className="imgUser" src={Escritaimg} alt="xx"/>
            </Topo>
            <CriarHabitos>
            <span>Meus hábitos</span>
            <button >+</button> 
            </CriarHabitos>

            <Texto>
                <span>Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!</span>
            </Texto>
        </Container>
    )
}

const Container=styledComponents.div`
margin-left:18px;
margin-right:18px;
`
const Texto= styledComponents.div`
span{
    color: #666666;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
}
`
const CriarHabitos= styledComponents.div`
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
    `
const Topo= styledComponents.div`
background-color:#126BA5;
width: 100%;
height: 70px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
display:flex;
justify-content:space-between;
align-items:center;
position:fixed;
top:0;
left:0;
right:0;
.imgUser{
  width:50px;
  height:50px;
  border-radius:50%;
  margin-right:18px;
}
span{
    color:white;
    font-family: 'Playball';
    font-style: normal;
    font-weight: 400;
    font-size: 39px;
    margin-left:18px;

}
`