import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MovieCard from '../components/MovieCard';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Container = styled.div`
  padding: 2rem;
`;

const Section = styled.section`
  margin-bottom: 2rem;
`;

const MoviesGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-right: 0.5rem;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
`;

const schema = yup.object().shape({
  query: yup.string().required('Please enter a search query'),
});

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    const fetchPopularMovies = async () => {
      const response = await axios.get('https://api.themoviedb.org/3/movie/popular', {
        params: {
          api_key: '936d7807b77bbb4238f8847775a026ad',
          language: 'en-US',
          page: 1
        }
      });
      setPopularMovies(response.data.results);
    };

    fetchPopularMovies();

    const user = JSON.parse(localStorage.getItem('currentUser'));
    setCurrentUser(user);
  }, []);

  const onSubmit = async (data) => {
    const response = await axios.get('https://api.themoviedb.org/3/search/movie', {
      params: {
        api_key: '936d7807b77bbb4238f8847775a026ad',
        language: 'en-US',
        query: data.query,
        page: 1
      }
    });
    setSearchedMovies(response.data.results);
  };

  return (
    <Container>
      {currentUser ? <h1>Welcome, {currentUser.name}</h1> : <h1>Popular Movies</h1>}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Search for a movie..." {...register('query')} />
        <Button type="submit">Search</Button>
      </Form>
      {errors.query && <p>{errors.query.message}</p>}
      <Section>
        <MoviesGrid>
          {searchedMovies.length > 0
            ? searchedMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))
            : popularMovies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
        </MoviesGrid>
      </Section>
    </Container>
  );
};

export default Home;
