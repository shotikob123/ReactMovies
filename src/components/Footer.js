import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.headerFooter};
  color: ${({ theme }) => theme.headerFooterText};
  padding: 1rem;
  text-align: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2024 Movie Info. All rights reserved.</p>
    </FooterContainer>
  );
};

export default Footer;
