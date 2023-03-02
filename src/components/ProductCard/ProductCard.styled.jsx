import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 197px;
    height: 310px;
    padding: 10px;
    border-radius: 8px;
    background-color: #FFFFFF;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const ImageBox = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 170px;
    height: 178px;
`

export const RatingContainer = styled.div`
    position: absolute;
    right: 5px;
    top: 5px;
    padding:5px 10px;
    border-radius: 4px;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 18px;

    background: ${({color}) => color};
    color: black;
`

export const Image = styled.img`
    width: 130px;
    max-height: 178px;
`

export const Title = styled.h3`
    text-align: center;

    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${Card}:hover &, ${Card}:focus & {
        color: grey;
    };
`

export const BoldText = styled.b`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
    color: black;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    ${Card}:hover &, ${Card}:focus & {
        color: grey;
    };
`