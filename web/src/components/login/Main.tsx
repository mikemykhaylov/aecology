import { GoogleAuthProvider, signInWithRedirect } from 'firebase/auth';
import React from 'react';
import styled from 'styled-components/macro';
import { auth } from '../../constants/firebase';
import logoImage from '../../images/logoImage.webp';
import { Heading1, Heading2, Heading3, Heading4 } from '../general/Headings';
import { DARK_GRAY, LIGHT_GRAY, PRIMARY } from '../../constants/websiteColors';
import Logo from '../icons/Logo';
import Google from '../icons/Google';

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

const LoginContainer = styled.div`
  height: 100vh;
  width: 40vw;
  padding: 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 30vh;
  }
`;

const FormContainer = styled.div`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 64px;
  }
`;

const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoginButton = styled.button`
  width: 100%;
  background-color: ${LIGHT_GRAY};
  color: ${DARK_GRAY};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition-duration: 75ms;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  &:active {
    box-shadow: inset 0px 4px 22px 4px rgba(0, 0, 0, 0.5);
  }
`;

const LoginPicture = styled.div`
  height: 100vh;
  padding: 48px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  /* background: linear-gradient(rgba(35, 35, 35, 0.8), rgba(35, 35, 35, 0.6)), url(${logoImage}); */
  background-image: url(${logoImage});
  background-size: cover;
  background-position: center center;
  width: 60vw;
  & > *:first-child {
    margin-top: 48px;
  }
  & > *:not(:last-child) {
    margin-bottom: 30vh;
  }
`;

const Main = () => {
  const provider = new GoogleAuthProvider();
  const loginHandler = async () => {
    await signInWithRedirect(auth, provider);
  };

  return (
    <MainContainer>
      <LoginContainer>
        <FormContainer>
          <LogoContainer>
            <Logo size={80} fill={PRIMARY} />
            <Heading2>Aecology</Heading2>
          </LogoContainer>
          <Heading3>Sign in to continue</Heading3>
          <LoginButton type="button" onClick={loginHandler}>
            <Google size={20} />
            <Heading4 color={DARK_GRAY}>Sign in with Google</Heading4>
          </LoginButton>
        </FormContainer>
      </LoginContainer>
      <LoginPicture>
        <Heading1 color={DARK_GRAY}>Let your sustainable journey start!</Heading1>
      </LoginPicture>
    </MainContainer>
  );
};

export default Main;
