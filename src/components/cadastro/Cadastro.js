import styledComponents from "styled-components";
import Logo from "../../assets/imgs/Group.png";
import { Link, Navigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Cadastro(){
 const navigate=useNavigate();
  const [infoInputs,setInfoInputs]=useState({email:'',password:'',name:'',image:''})
  function sendPost(e){
    e.preventDefault();
 const post="https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const objPost={
      email: infoInputs.email,
      name: infoInputs.name,
      image: infoInputs.image,
      password: infoInputs.password
    }
  const promise= axios.post(post,objPost)
  promise.then(response=>{alert("cadastrado com sucesso");navigate("/")})
  promise.catch(err =>{console.log(err.response)})
  }
    return(
        <Container>
      <LogoTipo>
        <img src={Logo} alt="aaa" />
      </LogoTipo>
          <form onSubmit={sendPost}>
        <AlinhamentoInputButton>
          <input className="input" type="email"
            value={infoInputs.email} onChange={(e)=>{setInfoInputs({...infoInputs,email:e.target.value});}}
            placeholder="  email" required></input>
          <input className="input" type="password"
          value={infoInputs.password} onChange={(e)=>{setInfoInputs({...infoInputs,password:e.target.value})}}
          placeholder="  senha" required></input>
          <input className="input" type="text"
           value={infoInputs.name} onChange={(e)=>{setInfoInputs({...infoInputs,name:e.target.value});}}
          placeholder="  nome" required></input>
          <input className="input" type="url"
          value={infoInputs.image} onChange={(e)=>{setInfoInputs({...infoInputs,image:e.target.value});}}
          placeholder="  foto" required></input>
          <button type="submit">Cadastrar</button>
          <span className="cadastro">Já tem uma conta? Faça login!</span>
        </AlinhamentoInputButton>
      </form>
    </Container>
    )
}
const Container = styledComponents.div`

display:flex;
flex-direction:column;
button{
    width:303px;
    height: 45px;
    margin-top:5px;
    margin-bottom:20px;
    border-radius: 5px;
    border:none;
    background-color:#52B6FF;
    color: white;
    cursor:pointer;
    font-family: 'Lexend Deca';
    font-style: normal;
}
button:hover{
    background-color:#0b7ccc;
    transition: 0.5s;

}
`;
const AlinhamentoInputButton = styledComponents.div`
display:flex;
align-items:center;
flex-direction:column;
.cadastro{
    color:#52B6FF;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    text-decoration-line: underline;
    margin-bottom:60px;
}
`;
const LogoTipo = styledComponents.div`
display:flex;
justify-content:center;
margin-top: 45px;
img{
width:180px;
}
`;