import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

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
  name: yup.string().required('Name is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required')
});

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(data);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration Successful');
  };

  return (
    <Container>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Input type="text" placeholder="Name" {...register('name')} />
        {errors.name && <Error>{errors.name.message}</Error>}
        <Input type="email" placeholder="Email" {...register('email')} />
        {errors.email && <Error>{errors.email.message}</Error>}
        <Input type="password" placeholder="Password" {...register('password')} />
        {errors.password && <Error>{errors.password.message}</Error>}
        <Button type="submit">Register</Button>
      </Form>
    </Container>
  );
};

export default Register;
