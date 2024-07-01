import React from 'react';
import styled from 'styled-components';

const SwitchButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background: ${({ theme }) => theme.headerFooter};
  color: ${({ theme }) => theme.headerFooterText};
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: background 0.3s;

  &:hover {
    background: ${({ theme }) => theme.cardBackground};
  }
`;

const ThemeSwitcher = ({ theme, themeToggler }) => {
  return (
    <SwitchButton onClick={themeToggler}>
      Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
    </SwitchButton>
  );
};

export default ThemeSwitcher;
