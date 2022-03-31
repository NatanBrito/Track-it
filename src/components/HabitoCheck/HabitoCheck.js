import styledComponents from "styled-components"


export default function HabitoCheck(){
    return(
        <Container>
             <DiaConcluido>
                <span className="title">Segunda, 17/05</span>
                <span className="subtitle">Nenhum hábito concluído ainda</span>
            </DiaConcluido>
        <Habito>
            <BoxEsquerda>
                <span>Ler 1 capítulo de livro</span>
                <P>
                <p>Sequência atual: 4 dias</p>
                <p>Seu recorde: 4 dias</p>
                </P>
            </BoxEsquerda>
            <Checkbox>
              <input className="checkBox" type="checkbox"></input> 
            </Checkbox>
         </Habito>
         <Habito>
            <BoxEsquerda>
                <span>Ler 1 capítulo de livro</span>
                <P>
                <p>Sequência atual: 4 dias</p>
                <p>Seu recorde: 4 dias</p>
                </P>
            </BoxEsquerda>
            <Checkbox>
              <input className="checkBox" type="checkbox"></input> 
            </Checkbox>
         </Habito>
        </Container>
    )
}
const Container=styledComponents.div`
background-color:#E5E5E5;

`
const Checkbox=styledComponents.div`
input{
margin-top:10px;
margin-left:15px;
width: 69px;
height: 69px;
background-color:green;
color:green;
}
input:checked{
    color:green;
    background-color:green;
}
`

const P=styledComponents.div`
margin-top:10px;
`
const BoxEsquerda= styledComponents.div`
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