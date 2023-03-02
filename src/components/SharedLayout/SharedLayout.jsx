import {
  HeaderContainer, HeaderLeft, Header, NavLinkStyled,
    NavLinkRight, HeaderRightBox, LogoContainer, BasketIconContainer,
    BasketIcon, NavLinkIcon
} from './SharedLayout.styled';
import logoIcon from '../../images/logo.webp';
import svgSprite from '../../images/sprite.svg';
import { Outlet, Link } from "react-router-dom";
import { Suspense } from "react";
import { UserInfo } from "../UserInfo/UserInfo";
import { getUserStatus } from "../../redux/selectors";
import { useSelector } from "react-redux";

export const SharedLayout = () => {
  const isSignIn = useSelector(getUserStatus);

    return (
        <>
        <Header>
          <HeaderContainer>
            <HeaderLeft>
                <Link to={"/"} style={{ cursor: "pointer" }}>
                    <LogoContainer >
                        <img src={logoIcon} alt='логотип' height={30} />
                    </LogoContainer>
                </Link>
              <nav>
                <NavLinkStyled to="/">Main</NavLinkStyled>
                <NavLinkStyled to="/products">Products</NavLinkStyled>
              </nav>
            </HeaderLeft>
            <HeaderRightBox>
                {isSignIn
                ?  <UserInfo/>
                :  <NavLinkRight to="/signIn">Sign In</NavLinkRight>
                }
                <NavLinkIcon to="/basket">
                    <BasketIconContainer >
                        <BasketIcon href={svgSprite + '#basket'}></BasketIcon>
                    </BasketIconContainer>
                </NavLinkIcon>
            </HeaderRightBox>  
          </HeaderContainer>
        </Header>
        <Suspense fallback={<div>Loading...</div>}>
            <Outlet />
        </Suspense>
        </>

    )
}