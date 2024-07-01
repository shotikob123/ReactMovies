import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Card = styled(motion.div)`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  padding: 1rem;
  margin: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  cursor: pointer;
  text-align: center;
  width: 200px;

  img {
    border-radius: 8px;
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  h3 {
    margin-top: 1rem;
    font-size: 1rem;
  }
`;

const FavoriteButton = styled.button`
  background: ${({ theme }) => theme.headerFooter};
  color: ${({ theme }) => theme.headerFooterText};
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 0.5rem;

  &:hover {
    background: ${({ theme }) => theme.cardBackground};
  }
`;

const MovieCard = ({ movie }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setIsFavorite(favorites.some(fav => fav.id === movie.id));
  }, [movie.id]);

  const handleClick = () => {
    sessionStorage.setItem('lastViewedMovie', JSON.stringify(movie));
    navigate(`/movie/${movie.id}`, { state: movie });
  };

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    if (isFavorite) {
      const updatedFavorites = favorites.filter(fav => fav.id !== movie.id);
      localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    } else {
      favorites.push(movie);
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
    setIsFavorite(!isFavorite);
  };

  return (
    <Card 
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <h3>{movie.title}</h3>
      <FavoriteButton onClick={(e) => {
        e.stopPropagation();
        handleFavorite();
      }}>
        {isFavorite ? 'Remove from Favorites' : 'Add to Favorites'}
      </FavoriteButton>
    </Card>
  );
};

export default MovieCard;
