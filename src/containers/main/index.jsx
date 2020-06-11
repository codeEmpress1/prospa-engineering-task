import React from 'react'
import styled from 'styled-components'
import {device} from '../../device'
import AccountCard, { AddAccountCard } from '../../components/Card'
import { Card } from 'react-bootstrap'

const StyledSection = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    column-gap: 3rem;
    row-gap: 4rem; 
    padding-bottom: 3rem;

    & ${Card}:first-child {
        border-radius: 14px;
    }
`

const StyledMain = styled.div`
width: 72%;
position: absolute;
right: 5.5%;
top: 4.2em;
padding-top:3rem;

@media ${device.laptop} (
    width: 95%;
    margin: 0 auto;
)
`
const StyledHeader = styled.h2`
    font-weight: ${props => props.weight ? props.weight : 400};
    font-size: ${props => props.size ? props.size : '2.8em'};
    color: ${props => props.color ? props.color : "#270450"};
    font-family: ${props => props.family ? props.family : "Gilroy-Semibold"};
`
const StyledLine = styled.hr`
height:1px;
border:0.5px solid #dcdcee;
margin:1.5rem 0 2rem 0;
`
const accountData = [
    {"title": "Current account", "date": "00-00-00 18361554", "image":"/current-account-icon.svg", "alt":"logo", "money":"2650234.96", "color": "#fa4a8433", "radius": "14px"},
    {"title": "Savings account", "date": "00-00-00 18361554", "image":"/tax-account-icon.svg", "alt":"logo", "money":"1050234.33", "color": "#7e51ff33", "radius": "16px"},
    {"title": "Tax account", "date": "00-00-00 18361554", "image":"/savings-account-icon.svg", "alt":"logo", "money":"589879.00", "color": "#bb53f233", "radius": "14px"}
]
const Main = () => {
    return (
        <StyledMain>
        <StyledHeader className="">
            All accounts
        </StyledHeader>
        
        <StyledLine/>

        <StyledSection>
            {
                accountData.map((value, index)=> (
                    <AccountCard
                    className="flexcard"
                    key={index}
                    title={value.title}
                    date={value.date}
                    image={value.image}
                    alt={value.alt}
                    money={value.money}
                    color={value.color}
                    radius={value.radius}
                    />
                ))
            }
            <AddAccountCard className="flexcard"/>
        </StyledSection>
        
        <div style={{background:'#fafbfd', paddingTop:'1rem'}}>
            <StyledHeader>
                All transactions
            </StyledHeader>
        </div>
        
        </StyledMain>
    )
}

export default Main;
