import styledComponents from "styled-components";
export default function Header({ img }) {
  return (
    <Container>
      <Topo>
        <span>TrackIt</span>
        <img className="imgUser" src={img} alt="xx" />
      </Topo>
    </Container>
  );
}
const Container = styledComponents.div`
margin-left:18px;
margin-right:18px;
`;
const Topo = styledComponents.div`
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
`;
