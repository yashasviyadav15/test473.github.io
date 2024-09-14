import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const LoginPage = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // Handle login here
  };

  return (
    <div className="login-page">
      <h1>Login</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <input type="email" placeholder="Email" {...register('email')} />
          <p>{errors.email?.message}</p>
        </div>
        <div>
          <input type="password" placeholder="Password" {...register('password')} />
          <p>{errors.password?.message}</p>
        </div>
        <button type="submit">Login</button>
        <div className="other-buttons">
          <button onClick={() => navigate('/job-apply')}>Job Apply</button>
          <button onClick={() => navigate('/serial-number')}>Submit Serial Number</button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
