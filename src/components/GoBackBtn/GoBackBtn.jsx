import { ButtonStyled, ButtonLink, ButtonArrowSvg, ButtonIcon} from "./GoBackBtn.styled";
import svgSprite from '../../images/sprite.svg';

export const GoBackBtn = ({location}) => {
    console.log(location, "btn")
    // const oneTurnBack = location.state.from;
    // const twoTurnBack = location.state.from.state.from ?? oneTurnBack;
    // const threeTurnBack = location.state.from.state.from.state.from ?? oneTurnBack;


    function settingPath() {
        if (!location.state) {
            return '/products';
        } else if (location.state.from.state && (location.pathname === location.state.from.state.from.pathname) ) {
            return location.state.from.state.from.state.from;
        } else {
            return location.state.from;
        }
    }

    return (
        <ButtonStyled>
            <ButtonLink to={settingPath()} state={{ from: location }}>
                <ButtonArrowSvg>
                    <ButtonIcon href={svgSprite + '#arrow-left'}></ButtonIcon>
                </ButtonArrowSvg>
                Go back
            </ButtonLink>
        </ButtonStyled>
    )
}