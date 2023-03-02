import styled from "styled-components";
import { Link } from "react-router-dom";

export const SectionOverlay = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    width: 100%;
    height: 400px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-image: linear-gradient(
        to left,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
    ),
        url("http://lamodachannel.eu/wp-content/uploads/2021/06/Shopping-Online-Offers.jpg");
`

export const Title = styled.h1`
    color: #FFFFFF;
    align-self: center;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 32px;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const SubTitle = styled.h2`
    color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 40px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 24px;
    text-align: center;
`

export const LinkStyled = styled(Link)`
    display: flex;
    align-items: center;
    padding: 10px 25px;
    border: none;
    border-radius: 10px;
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #EE3E38;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: #d73a34;
    }
`