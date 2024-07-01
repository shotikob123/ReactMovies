import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';

const Details = styled.div`
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  padding: 2rem;
  margin: 2rem auto;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Poster = styled.img`
  border-radius: 8px;
  width: 300px;
  margin-bottom: 1rem;
`;

const Title = styled.h1`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const Overview = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  line-height: 1.5;
  text-align: justify;
`;

const Info = styled.div`
  margin-top: 1rem;
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 33%;
`;

const Label = styled.span`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, {
        params: {
          api_key: '936d7807b77bbb4238f8847775a026ad',
          language: 'en-US'
        }
      });
      setMovie(response.data);
    };

    fetchMovie();
  }, [id]);

  return (
    <Details>
      {movie ? (
        <>
          <Poster
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <Title>{movie.title}</Title>
          <Overview>{movie.overview}</Overview>
          <Info>
            <InfoItem>
              <Label>Release Date</Label>
              <span>{movie.release_date}</span>
            </InfoItem>
            <InfoItem>
              <Label>Rating</Label>
              <span>{movie.vote_average}</span>
            </InfoItem>
            <InfoItem>
              <Label>Genres</Label>
              <span>{movie.genres.map(genre => genre.name).join(', ')}</span>
            </InfoItem>
          </Info>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </Details>
  );
};

export default MovieDetailsPage;
