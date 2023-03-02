import styled from "styled-components";
import image from "../images/fon.webp";

export const Background = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    padding-top: 100px;
    padding-left: 215px;
    padding-right: 215px;
    background-image: url(${image})
    
`

export const Main = styled.main`
    flex: 1 1 auto;
    
`

export const BasketContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`