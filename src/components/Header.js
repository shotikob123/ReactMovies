import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: ${({ theme }) => theme.headerFooter};
`;

const NavLinks = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 1rem;
  }

  a {
    color: ${({ theme }) => theme.headerFooterText};
    text-decoration: none;
    font-weight: bold;
  }
`;

const LogoutButton = styled.button`
  background: ${({ theme }) => theme.headerFooter};
  color: ${({ theme }) => theme.headerFooterText};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.cardBackground};
  }
`;

const Header = () => {
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/');
    window.location.reload(); // Refresh the page to update the welcome message
  };

  return (
    <Nav>
      <NavLinks>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/favorites">Favorites</Link></li>
        {currentUser ? (
          <li><LogoutButton onClick={handleLogout}>Logout</LogoutButton></li>
        ) : (
          <>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </>
        )}
        <li><Link to="/about">About</Link></li>
      </NavLinks>
      {currentUser && <LogoutButton onClick={handleLogout}>Logout</LogoutButton>}
    </Nav>
  );
};

export default Header;
