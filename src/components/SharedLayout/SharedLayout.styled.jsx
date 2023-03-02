import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.div`
    margin-left: auto;
    margin-right: auto;
    padding: 30px 215px 0 215px ;
    width: 1280px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: absolute;
    z-index: 6;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
`

export const HeaderLeft = styled.div`
    align-items: center;
    display: inline-flex;
`

export const Header = styled.header`
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    position: relative;
`

export const NavLinkStyled = styled(NavLink)`
    text-decoration: none;
    margin-left: 30px;
    color: #FFFFFF;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus {
        color: black;
    };
    &.active {
        color: black;
    };
`

export const NavLinkRight = styled(NavLink)`
    text-decoration: none;
    color: #FFFFFF;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus {
        color: black;
    };
    &.active {
        color: black;
    };
`

export const NavLinkIcon = styled(NavLink)`
    margin-left: 30px;
    fill: #FFFFFF;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus {
        fill: black;
    };
`

export const HeaderRightBox = styled.div`
    display: flex;
    align-items: center;
`

export const LogoContainer = styled.div`
    padding: 5px 10px;
    height: 40px;
    background: #EE3E38;
`

export const BasketIconContainer = styled.svg`
    width: 30px;
    height: 30px;
`

export const BasketIcon = styled('use')`
    stroke: none;
    fill: #FFFFFF;
    width: 30px;
    height: 30px;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${BasketIconContainer}:hover &, ${BasketIconContainer}:focus & {
        fill: black;
    };
`