import { Background, Main } from "../Pages.styled";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { SectionOverlay, Title, SubTitle, LinkStyled } from "./MainPge.styled";

export const MainPage = () => {

    return (
        <Background>
            <Main>
                <SectionOverlay>
                    <Title>The best products at the best prices</Title>
                    <SubTitle>Hurry up to buy now!</SubTitle>
                    <LinkStyled to={'/products'}>Start shopping</LinkStyled>
                </SectionOverlay>
            </Main>
            <PageFooter/>
        </Background>
    )
}