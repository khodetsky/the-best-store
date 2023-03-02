import styled from "styled-components";
import { Link } from "react-router-dom";

export const Background = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    margin-left: auto;
    margin-right: auto;
    width: 1280px;
    padding-top: 100px;
`

export const Main = styled.main`
    flex: 1 1 auto;
`

export const SectionHero = styled.div`
    padding-top: 60px;
    padding-bottom: 60px;
    width: 1280px;
    height: 600px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-size: cover;
    background-image: linear-gradient(
        to left,
        rgba(47, 48, 58, 0.4),
        rgba(47, 48, 58, 0.4)
    ),
        url("http://lamodachannel.eu/wp-content/uploads/2021/06/Shopping-Online-Offers.jpg");
`

export const Title = styled.h1`
    color: #FFFFFF;
    align-self: center;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 40px;
    text-align: center;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const SubTitle = styled.p`
    color: #FFFFFF;
    margin-top: 20px;
    margin-bottom: 60px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 34px;
    line-height: 24px;
    text-align: center;
`

export const LinkStyled = styled(Link)`
    display: flex;
    align-items: center;
    padding: 15px 30px;
    border: none;
    border-radius: 12px;
    font-weight: 500;
    font-size: 32px;
    line-height: 28px;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #EE3E38;
    text-decoration: none;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: #d73a34;
    }
`

export const CategoriesSection = styled.div`
    padding-top: 50px;
    padding-left: 215px;
    padding-right: 215px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const CategoriesTitle = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 32px;
    line-height: 24px;
    color: black;
    margin-bottom: 30px;
    text-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const CategoriesList = styled.ul`
    display: flex;
    gap: 30px;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 190px;
    height: 270px;
    padding: 20px 5px;
    border-radius: 8px;
    background-color: #FFFFFF;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
`

export const ImageBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 178px;
`

export const Image = styled.img`
    width: 170px;
    max-height: 178px;
`

export const CategoryTitle = styled.h3`
    text-align: center;

    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    color: black;
`