import styled from "styled-components";

export const Container = styled.div`
    display: flex;
`

export const ImageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 0;
`

export const Image = styled.img`
    width: 250px;
    height: auto;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
`

export const DataContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
`

export const Title = styled.h2`
    align-self: center;
    margin-top: 20px;
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 28px;
    line-height: 28px;
    text-align: center;
`

export const Text = styled.p`
    font-family: 'Raleway', sans-serif;
    font-weight: 500;
    font-size: 22px;
    line-height: 22px;

    margin-top: 25px;
`