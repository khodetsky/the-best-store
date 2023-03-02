import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const UserIconContainer = styled.svg`
    width: 30px;
    height: 30px;
`

export const UserIcon = styled('use')`
    stroke: none;
    fill: #FFFFFF;
    width: 30px;
    height: 30px;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${UserIconContainer}:hover &, ${UserIconContainer}:focus & {
        fill: black;
    };
`

export const UserInfoBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 3;
    left: 863px;
    top: 75px;
    // border-radius: 8px;
    padding: 10px 10px 5px 10px;
    position: absolute;
    background-color: #FFFFFF;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const NavLinkStyled = styled(NavLink)`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 22px;
    text-decoration: none;
    color: #000000;

    :hover, :focus {
        color: grey;
    };
    &.active {
        color: #EE3E38;
    };
`

export const MenuExitButton = styled.button`
    border: none;
    background: none;
    padding: 5px 5px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    cursor: pointer;

    :hover, :focus {
        color: grey;
    };
    &.active {
        color: #EE3E38;
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