import React from 'react'
import { render } from 'react-dom';
import { CircularProgressbar, buildStyles  } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import styledComponents from 'styled-components';

export default function Footer(){
    const percentage = 50;
    return(
        <>
        <h1>historico</h1>
        <CirculoFooter>
         <CircularProgressbar
        value={percentage}
        text={`Hoje`}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: "#3e98c7",
          textColor: "#fff",
          pathColor: "#fff",
          trailColor: "transparent"
        })}
      />
        </CirculoFooter>

        </>

    )
}
const CirculoFooter= styledComponents.div`
width:91px;
height:91px;
`