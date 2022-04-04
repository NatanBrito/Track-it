import Header from "../Header/Header"
import Footer from "../Footer/Footer"
import styledComponents from "styled-components";
import { useContext } from "react";
import { ImageContext } from "../../context/imgHeader";
import { FooterNumContext } from "../../context/FooterNum";
export default function Historico(){
    const {image}=useContext(ImageContext)
    const {footerNum}=useContext(FooterNumContext);
return(
    <Fundo>
    <Header img={image}/>
    <Container>
    <ButtonHabitos>
        <span>Histórico</span>
      </ButtonHabitos>
      <span>Em breve você poderá ver o histórico dos seus hábitos aqui!</span>
    </Container>

    <Footer done={footerNum}/>
    </Fundo>
)
}
const Fundo =styledComponents.div`
width:100vw;
height:100vh;
background-color:#E5E5E5;
`
const Container =styledComponents.div`
margin-left:15px;
span{
    font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #666666;
}
`
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