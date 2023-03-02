import styled from "styled-components";
import { Link } from "react-router-dom";

export const MenuContainer = styled.div`
    position: relative;
    width: 250px;
`

export const ButtonStyled = styled.button`
    border: 1px solid #FFFFFF;
    border-radius: 15px;
    padding: 9px 18px;
    display: flex;
    align-items: center;
    justify-content: center;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;

    background: none;
    color: #FFFFFF;
    cursor: pointer;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        color: black;
        border-color: black;
    };
`

export const ButtonArrowSvg = styled.svg`
    margin-left: 15px;
    width: 15px;
    height: 15px;
`

export const ButtonIcon = styled('use')`
    stroke: none;
    fill: #FFFFFF;
    width: 15px;
    height: 15px;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${ButtonStyled}:hover &, ${ButtonStyled}:focus & {
        fill: black;
    };
`

export const ListItem = styled.li`
    padding: 5px 10px;
`

export const MenuBox = styled.div`
    position: absolute;
    bottom: -350%;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    border-radius: 8px;
    padding: 5px 10px;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const LinkStyled = styled(Link)`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 20px;
    line-height: 22px;
    text-decoration: none;
    color: #000000;

    :hover, :focus {
        color: grey;
    };
`

export const MenuBackdrop = styled.div`
    width: 100vw;
    height: 100vh;
    transition-property: opacity,visibility;
    position: fixed;
    z-index: 2;
    top: 0;
    left: 0;
`