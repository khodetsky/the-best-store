import { Background, Main } from "../Pages.styled";
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from "react-router-dom";
import {
    SignInFormStyled, InputContainer, InputStyled, LabelStyled, FormContainer,
    ErrorMessage, SignInBtn, FormHeader, FormText, RegistrationLink, RegistrationContainer
} from './SignUp.styled';
import { auth } from '../../components/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export const SignUp = () => {
  const navigate = useNavigate();

        const initialValues = {
        name: '',
        email: '',
        password: '',
    };

    const initNotifixParams = {
        position: 'center-top',
        distance: '40px',
        timeout: 3000,
        fontSize: '15px',
        width: '320px',
        pauseOnHover: true,
    };

    const registrationUser = ({email, password}, { resetForm }) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(credentials => {
              Notify.success(`You have successfully registered!`, initNotifixParams);
              navigate("/", { replace: true });
              resetForm();
            })
            .catch(e => {
                if (e.message === 'Firebase: Error (auth/email-already-exists).') {
                  Notify.failure('Use a different email address! This mail is already in use.', initNotifixParams);
                }
        });
      
    };


    function validateEmail(value) {
       let error;
       if (!value) {
         error = 'Обов\'язкове поле*';
       } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
         error = 'Невірна адреса електронної пошти*';
       }
       return error;
    };
    
    function validatePassword(value) {
       let error;
       if (!value) {
         error = 'Обов\'язкове поле*';
       } else if (!/(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/.test(value)) {
         error = 'Має містити принаймні одну цифру, одну велику та малу літеру та принаймні 8 або більше символів*';
       }
       return error;
    };

    return (
        <Background>
            <Main>
                <FormContainer>
                  <Formik initialValues={initialValues} onSubmit={registrationUser}>
                      {({ errors, touched }) => (
                          <>
                              <FormHeader>New user registration</FormHeader>
                              <FormText>Enter your email and guess the password</FormText>
                              <SignInFormStyled>
                                  <InputContainer>
                                      <InputStyled
                                        id="email"
                                        type="email"
                                        name="email"
                                        autoComplete="off"
                                        placeholder=" "
                                        validate={validateEmail}
                                      />
                                      <LabelStyled htmlFor="email">Email</LabelStyled>
                                      {errors.email && touched.email && <ErrorMessage>{errors.email}</ErrorMessage>}
                                  </InputContainer>

                                  <InputContainer>
                                      <InputStyled
                                        id="password"
                                        type="password"
                                        name="password"
                                        autoComplete="off"
                                        placeholder=" "
                                        validate={validatePassword}
                                      />
                                      <LabelStyled htmlFor="password">Password</LabelStyled>
                                      {errors.password && touched.password && <ErrorMessage>{errors.password}</ErrorMessage>}
                                  </InputContainer>
                      
                                  <SignInBtn type="submit">Sign up</SignInBtn>
                                  <RegistrationContainer>
                                      <p>Already registered?</p>
                                      <RegistrationLink to={'/signIn'} >Sign in</RegistrationLink>
                                  </RegistrationContainer>
                              </SignInFormStyled>
                          </>
                      )}
                  </Formik>
                </FormContainer>
            </Main>
            <PageFooter/>
        </Background>
    )
}