import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Arial', sans-serif;
    transition: all 0.50s linear;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  header, footer {
    background: ${({ theme }) => theme.headerFooter};
    color: ${({ theme }) => theme.headerFooterText};
    padding: 1rem;
    text-align: center;
  }
  nav ul {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    margin: 0;
  }
  nav ul li {
    margin: 0 1rem;
  }
  .card {
    background: ${({ theme }) => theme.cardBackground};
    border-radius: 8px;
    padding: 1rem;
    margin: 1rem;
    box-shadow: 0 4px 8px rgba(0,0,0,0.1);
    transition: transform 0.2s;
    cursor: pointer;
  }
  .card:hover {
    transform: scale(1.05);
  }
  .card h3 {
    margin-top: 0;
  }
  .container {
    padding: 2rem;
  }
  .section {
    margin-bottom: 2rem;
  }
  .team-card, .player-card {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  .team-card img, .player-card img {
    width: 100%;
    border-radius: 8px;
  }
`;

export const lightTheme = {
  body: '#FFF',
  text: '#333',
  headerFooter: '#f8f9fa',
  headerFooterText: '#333',
  cardBackground: '#FFF',
};

export const darkTheme = {
  body: '#333',
  text: '#FFF',
  headerFooter: '#444',
  headerFooterText: '#FFF',
  cardBackground: '#555',
};
