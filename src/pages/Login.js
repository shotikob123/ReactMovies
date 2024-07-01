import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  padding: 2rem;
  max-width: 500px;
  margin: 0 auto;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  background: ${({ theme }) => theme.headerFooter};
  color: ${({ theme }) => theme.headerFooterText};
  border: none;
  border-radius: 4px;

  &:hover {
    background: ${({ theme }) => theme.cardBackground};
  }
`;

const Error = styled.p`
  color: red;
  margin-bottom: 1rem;
`;

const schema = yup.object().shape({
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().required('Password is required')
});

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.email === data.email && user.password === data.password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      navigate('/');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
    <Container>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <Error>{errors.email.message}</Error>}
        <Input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <Error>{errors.password.message}</Error>}
        <Button type="submit">Login</Button>
      </Form>
    </Container>
  );
};

export default Login;
