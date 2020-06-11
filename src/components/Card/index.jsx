import React from 'react';
import styled from 'styled-components'
import { Card } from 'react-bootstrap'
import Naira from 'react-naira'

const StyledCard = styled(Card)`
  width: 100%; 
  padding: 2rem;
  box-shadow: -12px 16px 56px rgba(39,4,80,0.12);
  box-shadow: 0px 4px 8px rgba(39,4,80,0.12);
  color: #270450;
  background: #ffffff;
  height: 13rem;
  border-radius: ${props => props.radius}
  a {
    font-family: "LucidaGrande-Bold";
  }
  title {
    font-family: "Gilroy-Semibold";
  }
  img{
    width: 35%;
    z-index:100;
    position: relative;
    padding-bottom: 3rem;
    margin-top:30px;
  
  }

`
const IconBg = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  z-index: -1;
  text-align:center;
  background-color: ${props=>props.color};
`

const StyledCard2 = styled(Card)`
border: dashed 4px rgba(39,4,80,0.12);
background: #ffffff;
// width: 100%;
min-height: 13rem;
text-align: center;
padding-top: 1.1rem;
border-radius: 16px;

div{
   margin: 1rem auto;
}

img{
  width: 35%;
  z-index:100;
  position: relative;
  padding-bottom: 3rem;
  margin-top:30px;

}

`
export const AddAccountCard = () => (
  <StyledCard2>
    <Card.Body>
      <Card.Text>
        <IconBg color="#77869933">
          <img src="/add-account-icon.svg" alt="add"/>
        </IconBg>
        <p style={{color:'#778699', fontFamily:'Gilroy-Semibold', fontWeight: '400', fontSize: '1.7em'}}>
          Add a new account
        </p>
      </Card.Text>
    </Card.Body>
  </StyledCard2>
)

const AccountCard = (props) => (
  <StyledCard radius={props.radius}>
    <Card.Body style={{display:"flex", justifyContent: "space-between"}}>
      <div>
        <p style={{fontWeight: "400", fontSize:'2.2em', color: '#270450', paddingBottom:'.5rem'}}>{props.title}</p>
        <Card.Link href="#" style={{color: '#270450', fontSize: '1.4em'}}>{props.date}</Card.Link>
        <Card.Text>
          <p style={{fontWeight: "400", fontSize:'2em', color: '#270450', fontFamily: "LucidaGrande-Bold", paddingTop:'1.5rem'}}>
        <Naira>
          {props.money}
        </Naira>
        </p>
      </Card.Text>
      </div>
      <div>
        <IconBg color={props.color}>
        <img src={props.image} alt={props.alt}/>
        </IconBg>
      </div>
    
    </Card.Body>
  </StyledCard>
)

export default AccountCard