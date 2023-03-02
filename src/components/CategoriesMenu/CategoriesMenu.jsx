import { useState } from 'react';
import svgSprite from '../../images/sprite.svg';
import { MenuContainer, ButtonStyled, ButtonArrowSvg, ButtonIcon, MenuBackdrop, MenuBox, LinkStyled, ListItem } from "./CategoriesMenu.styled";

export const CategoriesMenu = ({ categories, location }) => {
    const [menuIsOpen, setMenuIsOpen] = useState(false);

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
        <MenuContainer>
            <ButtonStyled type="button" onClick={handleButtonClick}>
                Categories
                <ButtonArrowSvg>
                    {menuIsOpen
                        ? <ButtonIcon href={svgSprite + '#errow-up'}></ButtonIcon>
                        : <ButtonIcon href={svgSprite + '#errow-down'}></ButtonIcon>}
                </ButtonArrowSvg>
            </ButtonStyled>
            {menuIsOpen && (
                <>
                    <MenuBox>
                        <ul>
                            {categories.map(category => (
                                <ListItem key={category} style={{ height: 'auto' }}>
                                    <LinkStyled to={`categories/${category}`} state={{ from: location }}>{category}</LinkStyled>
                                </ListItem>
                            ))}
                        </ul>
                    </MenuBox>
                    <MenuBackdrop onClick={handleBackdropClick}></MenuBackdrop>
                </>
            )}
        </MenuContainer>
    )
}