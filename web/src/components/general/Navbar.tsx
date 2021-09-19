import React from 'react';
import styled from 'styled-components/macro';
import { GRAY } from '../../constants/websiteColors';
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
  & > *:not(:last-child) {
    margin-bottom: 16px;
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

const ProfilePic = styled.div`
  width: 40px;
  height: 40px;
  background-image: url('https://source.unsplash.com/160x160/?portrait');
  background-size: cover;
  border-radius: 50%;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarLeftPart>
        <Heading1>Dashboard</Heading1>
        <Heading4 color={GRAY}>What will you do for nature today?</Heading4>
      </NavbarLeftPart>
      <NavbarRightPart>
        <Heading4>Michael Mykhaylov</Heading4>
        <ProfilePic />
      </NavbarRightPart>
    </NavbarContainer>
  );
};

export default Navbar;
