import React from "react";
import { Link } from "react-router-dom";
import { render } from "react-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styledComponents from "styled-components";

export default function Footer({done}) {
  const percentage = done;
  return (
    <>
      <AllFooter>
        <Link to="/habitos">
        <span>Hábitos</span>
        </Link>
        <CirculoFooter>
          <CircularProgressbar
            value={percentage}
            text={'hoje'}
            background
            backgroundPadding={6}
            styles={buildStyles({
              backgroundColor: "#3e98c7",
              textColor: "#fff",
              pathColor: "#fff",
              trailColor: "transparent",
            })}
          />
        </CirculoFooter>
        <Link to="./historico">
        <span>Histórico</span>
        </Link>
      </AllFooter>
    </>
  );
}
const CirculoFooter = styledComponents.div`
width:91px;
height:91px;
margin-bottom: 40px;
`;
const AllFooter = styledComponents.div`
display:flex;
justify-content:space-evenly;
align-items:center;
width: 100%;
height: 70px;
background-color:#E5E5E5;
position:fixed;
bottom:0;
left:0;
right:0;
span{
  
font-family: 'Lexend Deca';
font-style: normal;
font-weight: 400;
font-size: 18px;
color: #52B6FF;
}
a{
  text-decoration:none;
}
span:hover{
  transition: 0.3s;
  font-size:21px;
}
`;
