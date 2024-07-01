import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';

const Container = styled.div`
  padding: 2rem;
`;

const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Favorites = () => {
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteMovies(favorites);
  }, []);

  return (
    <Container>
      <h1>Favorite Movies</h1>
      <MoviesGrid>
        {favoriteMovies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </MoviesGrid>
    </Container>
  );
};

export default Favorites;
