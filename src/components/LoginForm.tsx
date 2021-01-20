import React, { useState } from 'react';
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await axios.post(
        '/api/users/signin',
        {
            email,
            password
        }
    )
    console.log('POST request sent');
    console.log('Status ' + res.status);
    console.log('Response Object:');
    console.log(res);

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
