import { useState } from 'react';
import svgSprite from '../../images/sprite.svg';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { signOut } from "firebase/auth";
import { auth } from '../../components/firebase';
import { useNavigate, useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUserIsLoggedIn, setUserEmail } from "../../redux/userSlice";
import { UserIconContainer, UserIcon, UserInfoBox, NavLinkStyled, MenuExitButton, MenuBackdrop } from "./UserInfo.styled";

export const UserInfo = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const [menuIsOpen, setMenuIsOpen] = useState(false);

    const initNotifixParams = {
        position: 'center-top',
        distance: '40px',
        timeout: 3000,
        fontSize: '15px',
        width: '320px',
        pauseOnHover: true,
    };

    function onExitBtnClick() {
        signOut(auth)
            .then(() => {
                dispatch(setUserIsLoggedIn(false));
                dispatch(setUserEmail(null));
                Notify.info('You are logged out of your account.', initNotifixParams);
                if (location.pathname === "/personal-office") {
                    navigate("/", { replace: true });
                }
            })
            .catch((error) => {
              console.log(error)
            });
    }
    

    function handleButtonClick() {
        if (!menuIsOpen) {
            setMenuIsOpen(true);
        } else {
            setMenuIsOpen(false);
        }
    };

    function handleBackdropClick() {
        if (menuIsOpen) {
            setMenuIsOpen(false);
        }
    }

    return (
        <>
            <UserIconContainer onClick={handleButtonClick}>
                <UserIcon href={svgSprite + '#user'}></UserIcon>
            </UserIconContainer>
            {menuIsOpen && (
                <>
                    <UserInfoBox>
                        <NavLinkStyled to="/personal-office" onClick={handleButtonClick}>Personal Office</NavLinkStyled>
                        <MenuExitButton type="button" onClick={() => { onExitBtnClick(); handleButtonClick() }}>Sign Out</MenuExitButton >
                    </UserInfoBox>
                    <MenuBackdrop onClick={handleBackdropClick}></MenuBackdrop>
                </>
            )}
        </>
    )
}