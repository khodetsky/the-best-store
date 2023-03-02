import styled from "styled-components";

export const ButtonStyled = styled.div`
    display: inline-flex;
    align-items: center;
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    font-weight: 500;
    font-size: 20px;
    cursor: pointer;
    color: #FFFFFF;
    background-color: #EE3E38;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    :hover, :focus {
        background-color: #d73a34;
    }
`

export const ButtonArrowSvg = styled.svg`
    margin-left: 10px;
    width: 20px;
    height: 20px;
`

export const ButtonIcon = styled('use')`
    stroke: none;
    fill: #FFFFFF;
    width: 20px;
    height: 20px;
    transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

    // ${ButtonStyled}:hover &, ${ButtonStyled}:focus & {
    //     fill: #EE3E38;
    // };
`