import { ButtonStyled, ButtonLink, ButtonArrowSvg, ButtonIcon} from "./GoBackBtn.styled";
import svgSprite from '../../images/sprite.svg';

export const GoBackBtn = ({location}) => {

    return (
        <ButtonStyled>
            <ButtonLink to={location}>
                <ButtonArrowSvg>
                    <ButtonIcon href={svgSprite + '#arrow-left'}></ButtonIcon>
                </ButtonArrowSvg>
                Go back
            </ButtonLink>
        </ButtonStyled>
    )
}