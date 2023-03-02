import { Background, Main } from "../Pages.styled";
import { Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
    SignInFormStyled, InputContainer, InputStyled, LabelStyled, FormContainer, GoogleSignIn,
    ErrorMessage, SignInBtn, FormHeader, FormText, RegistrationLink, RegistrationContainer
} from './SignIn.styled';
import { PageFooter } from "../../components/PageFooter/PageFooter";
import { auth, provider } from '../../components/firebase';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { useNavigate } from "react-router-dom";

export const SignIn = () => {
  const navigate = useNavigate();

    const initialValues = {
        email: '',
        password: '',
    };

    const initNotifixParams = {
        position: 'right-top',
        distance: '70px',
        timeout: 2000,
        fontSize: '15px',
        width: '350px',
        pauseOnHover: true,
    };

  const enterUser = ({ email, password }, { resetForm }) => {
    signInWithEmailAndPassword(auth, email, password)
      .then(credentials => {
        Notify.success('Your details have been confirmed. Welcome back!', initNotifixParams);
        navigate("/", { replace: true });
        resetForm();
      })
      .catch(e => {
        if (e.message === 'Firebase: Error (auth/user-not-found).') {
          Notify.failure('Login or password entered incorrectly. Check the entered data!', initNotifixParams);
        }
      });
  }

  function signInWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        Notify.success('Your details have been confirmed. Welcome back!', initNotifixParams);
        navigate("/", { replace: true });
      }).catch((error) => {
        Notify.failure('An error occurred while logging in. Try logging in later.', initNotifixParams);
      });
  }

    function validateEmail(value) {
       let error;
       if (!value) {
         error = 'Required field*';
       }
       return error;
    };
    
    function validatePassword(value) {
       let error;
       if (!value) {
         error = 'Required field*';
       }
       return error;
    };

    return (
        <Background>
            <Main>
                <FormContainer>
                  <Formik initialValues={initialValues} onSubmit={enterUser}>
                      {({ errors, touched }) => (
                          <>
                              <FormHeader>Sign in to your account</FormHeader>
                              <FormText>Welcome back! Enter your details</FormText>
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
                      
                                  <SignInBtn type="submit">Sign in</SignInBtn>
                                  <RegistrationContainer>
                                      <p>First time on the site?</p>
                                      <div style={{display: 'flex', flexDirection: 'row', marginTop: 10}}>
                                        <GoogleSignIn type="button" onClick={signInWithGoogle}>Sign in with Google</GoogleSignIn>
                                        <p style={{marginRight: 10, marginLeft: 10}}>or</p>
                                        <RegistrationLink to={'/signUp'} >Sign up</RegistrationLink>
                                      </div>
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