import svgSprite from "../../images/sprite.svg";
import { ButtonStyled, ButtonArrowSvg, ButtonIcon } from "./OperationBtn.styled";
import { useDispatch, useSelector } from "react-redux";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { getUserStatus } from "../../redux/selectors";
import { useNavigate } from "react-router-dom";

export const OperationBtn = ({ isAlreadyAdded, notification, target, action, children, icon }) => {
    const dispatch = useDispatch();
    const isSignIn = useSelector(getUserStatus);
    const navigate = useNavigate();

    const initNotifixParams = {
        position: 'right-top',
        distance: '70px',
        timeout: 3000,
        fontSize: '15px',
        width: '350px',
        pauseOnHover: true,
    };;

    function handleBtnClick() {
        if (!isSignIn) {
            Notify.failure('You must be authorized to add a product to the cart. Click here to sign in.', () => navigate("/signIn", { replace: true }) , initNotifixParams)
        } else {
            if (isAlreadyAdded) {
                Notify.failure('This product is already in your shopping cart.', initNotifixParams)
            } else {
                Notify.success( notification, initNotifixParams);
                dispatch(action(target));
            }
        }
        
    }

    return (
        <ButtonStyled onClick={handleBtnClick}>
            {children}
            <ButtonArrowSvg>
                <ButtonIcon href={svgSprite + `#${icon}`}></ButtonIcon>
            </ButtonArrowSvg>
        </ButtonStyled>
    )
}