// import { Background, Main } from "../Pages.styled";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import {
    SectionHero, Title, SubTitle, LinkStyled, Background, Main, CategoriesSection,
    CategoryTitle, Image, ImageBox, Card, CategoriesList, CategoriesTitle
} from "./MainPge.styled";
import { Link } from "react-router-dom";

export const MainPage = () => {

    return (
        <Background>
            <Main>
                <SectionHero>
                    <Title>The best products at the best prices</Title>
                    <SubTitle>Hurry up to buy now!</SubTitle>
                    <LinkStyled to={'/products'}>Start shopping</LinkStyled>
                </SectionHero>
                <CategoriesSection>
                    <CategoriesTitle>Categories of products</CategoriesTitle>
                    <CategoriesList>
                        <li>
                            <Link to={"/products/categories/electronics"} style={{textDecoration: "none"}} state={{ from: '/' }}>
                                <Card>
                                    <ImageBox>
                                        <Image src="https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg" alt="Electronics"/>
                                    </ImageBox>
                                    <CategoryTitle>Electronics</CategoryTitle>
                                </Card>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products/categories/jewelery"} style={{textDecoration: "none"}} state={{ from: '/' }}>
                                <Card>
                                    <ImageBox>
                                        <Image src="https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg" alt="Jewelery" />
                                    </ImageBox>
                                    <CategoryTitle>Jewelery</CategoryTitle>
                                </Card>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products/categories/men's clothing"} style={{textDecoration: "none"}} state={{ from: '/' }}>
                                <Card>
                                    <ImageBox>
                                        <Image src="https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg" alt="men's clothing"/>
                                    </ImageBox>
                                    <CategoryTitle>Men's clothing</CategoryTitle>
                                </Card>
                            </Link>
                        </li>
                        <li>
                            <Link to={"/products/categories/women's clothing"} style={{textDecoration: "none"}} state={{ from: '/' }}>
                                <Card>
                                    <ImageBox>
                                        <Image src="https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg" alt="women's clothing" />
                                    </ImageBox>
                                    <CategoryTitle>Women's clothing</CategoryTitle>
                                </Card>
                            </Link>
                        </li>
                    </CategoriesList>
                </CategoriesSection>
            </Main>
            <PageFooter/>
        </Background>
    )
}