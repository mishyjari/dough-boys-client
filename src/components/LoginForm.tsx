import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login', email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Email</label>
        <input
          type='email'
          required={true}
          className='form-control'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Password</label>
        <input
          type='password'
          required={true}
          className='form-control'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button className='btn btn-primary'>Login</button>
    </form>
  );
};

export default LoginForm;
