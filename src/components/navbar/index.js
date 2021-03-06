import React from 'react';
import { useMediaQuery } from 'react-responsive';
import styled from 'styled-components';
import { Logo } from '../logo';
import { NavLinks } from './navLinks';
import { DeviceSize } from '../responsive';
import { MobileNavLinks } from './mobileNavLinks';

const NavbarContainer = styled.div`
  width: 100%;
  height: 60px;
  box-shadow: 0 1px 3px rgba(15, 15, 15, 0.13);
  display: flex;
  align-items: center;
  padding: 0 50px;
  z-index: 2;
  background: white;
  @media (max-width: 480px) {
    padding: 0 35px;
  }
`;

const LeftSection = styled.div`
  display: flex;
`;

const MiddleSection = styled.div`
  display: flex;
  flex: 2;
  height: 100%;
  justify-content: flex-end;
`;

const RightSection = styled.div`
  display: flex;
`;

export function Navbar(props) {
  const isMobile = useMediaQuery({ maxWidth: DeviceSize.mobile });

  return (
    <NavbarContainer>
      <LeftSection>
        <Logo />
      </LeftSection>
      <MiddleSection>{!isMobile && <NavLinks />}</MiddleSection>
      <RightSection>{isMobile && <MobileNavLinks />}</RightSection>
    </NavbarContainer>
  );
}
