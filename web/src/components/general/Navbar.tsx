import React from 'react';
import styled from 'styled-components/macro';
import { signOut } from 'firebase/auth';
import { auth } from '../../constants/firebase';
import { DARK_GRAY, GRAY, LIGHT_GRAY } from '../../constants/websiteColors';
import { Heading1, Heading4 } from './Headings';

const NavbarContainer = styled.header`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: calc(48px + 20px - 3.157 * 16px / 2);
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  & > *:not(:last-child) {
    margin-bottom: 20px;
  }
  @media (min-width: 992px) {
    flex-direction: row;
    & > *:not(:last-child) {
      margin-bottom: 0px;
    }
  }
`;

const NavbarLeftPart = styled.div`
  display: flex;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 32px;
  }
`;

const NavbarRightPart = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 16px;
  }
`;

const ProfilePic = styled.div<{ url: string }>`
  width: 40px;
  height: 40px;
  background-image: url(${(props) => props.url});
  background-size: cover;
  border-radius: 50%;
`;

const LogoutButton = styled.button`
  padding: 0 20px;
  height: 40px;
  background-color: ${DARK_GRAY};
  color: ${LIGHT_GRAY};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition-duration: 75ms;
  &:active {
    box-shadow: inset 0px 4px 22px 4px rgba(0, 0, 0, 0.5);
  }
`;

const Navbar = ({ name, photoURL }: { name: string; photoURL: string }) => {
  const logoutHandler = async () => {
    await signOut(auth);
  };
  return (
    <NavbarContainer>
      <NavbarLeftPart>
        <Heading1>Dashboard</Heading1>
        <Heading4 color={GRAY}>What will you do for nature today?</Heading4>
      </NavbarLeftPart>
      <NavbarRightPart>
        <Heading4>{name}</Heading4>
        <ProfilePic url={photoURL} />
        <LogoutButton onClick={logoutHandler}>Log Out</LogoutButton>
      </NavbarRightPart>
    </NavbarContainer>
  );
};

export default Navbar;
