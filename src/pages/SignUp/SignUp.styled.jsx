import styled from "styled-components";
import { Form, Field } from 'formik';
import { Link } from "react-router-dom";

export const FormContainer = styled.div`
    width: 370px;
    height: auto;
    margin-left: auto;
    margin-right: auto;
    padding: 40px 20px;
    border-radius: 20px;
    backdrop-filter: blur(3px);

    display: flex;
    flex-direction: column;
    align-items: center;

    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`

export const FormHeader = styled.h2`
    font-family: 'Raleway', sans-serif;
    font-size: 20px;
    line-height: 1.25;
`

export const FormText = styled.p`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.25;
    margin-top: 5px;
    color: black;
`

export const SignInFormStyled = styled(Form)`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const InputContainer = styled.div`
    position: relative;
    display: block;
`

export const InputStyled = styled(Field)`
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.25;  
    box-sizing: border-box;
    width: 300px;
    color: black;
    border: 1px solid black;
    background: none;
    border-radius: 8px;
    margin-top: 35px;
    padding: 10px 6px;
    outline: none;
    transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    &:focus {
      border-color: #FFFFFF;
    }
`

export const LabelStyled = styled.label`
    position: absolute;
    left: 16px;
    top: 73%;
    transform: translateY(-50%);
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.25;
    color: black;
    transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1),
      color 250ms cubic-bezier(0.4, 0, 0.2, 1); 
    ${InputStyled}:focus + & {
      transform: translateY(-42px);
      color: #FFFFFF;
    }   
    ${InputStyled}:not(:placeholder-shown) + & {
      transform: translateY(-42px);
    }
`

export const ErrorMessage = styled.div`
    font-family: 'Raleway', sans-serif;
    font-size: 12px;
    line-height: 1.25;
    color: red; 
    position: absolute;
    margin-top: 3px;
`

export const SignInBtn = styled.button`
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px 18px;
    margin-top: 50px;
    width: 300px;
    height: 44px;
    font-family: 'Raleway', sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 24px;
    color: #FFFFFF;
    letter-spacing: 1px;
    background-color: #EE3E38;
    cursor: pointer;
    border: none;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus {
        background-color: #d73a34;
    };
`

export const RegistrationLink = styled(Link)`
    padding: 0;
    margin-left: 5px;
    border: none;
    color: rgb(85, 26, 139);
    text-decoration: underline;
    cursor: pointer;
    transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);
    :hover, :focus {
        color: rgb(67 28 102);
    }
`

export const RegistrationContainer = styled.div`
    display: flex;
    font-family: 'Raleway', sans-serif;
    font-size: 16px;
    line-height: 1.25;
    margin-top: 15px;
    color: black;
`