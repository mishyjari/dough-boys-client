import React, { useState } from 'react';

const RegisterForm = () => {
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [contactPerson, setContactPerson] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [addressLineOne, setAddressLineOne] = useState('');
  const [addressLineTwo, setaddressLineTwo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(
      'Register submit',
      email,
      companyName,
      contactPerson,
      contactPhone,
      addressLineOne,
      addressLineTwo,
      city,
      state,
      zip,
      password,
      confirmPassword
    );
  };

  const states = [
    'AL',
    'AK',
    'AZ',
    'AR',
    'CA',
    'CO',
    'CT',
    'DE',
    'FL',
    'GA',
    'HI',
    'ID',
    'IL',
    'IN',
    'IA',
    'KS',
    'KY',
    'LA',
    'ME',
    'MD',
    'MA',
    'MI',
    'MN',
    'MS',
    'MO',
    'MT',
    'NV',
    'NH',
    'NJ',
    'NM',
    'NY',
    'NC',
    'ND',
    'OH',
    'OK',
    'OR',
    'PA',
    'RI',
    'SC',
    'SD',
    'TN',
    'TX',
    'UT',
    'VT',
    'VA',
    'WA',
    'WV',
    'WI',
    'WY',
  ];

  return (
    <form onSubmit={handleSubmit}>
      <div className='form-group'>
        <label>Email</label>
        <input
          type='email'
          placeholder='example@mail.com'
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
          placeholder='Password'
          required={true}
          className='form-control'
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <label>Confirm Password</label>
        <input
          type='password'
          placeholder='Confirm Password'
          required={true}
          className='form-control'
          value={confirmPassword}
          onChange={e => setConfirmPassword(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Company Name</label>
        <input
          required={true}
          placeholder='Your Company Name'
          className='form-control'
          value={companyName}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Contact Person</label>
        <input
          required={true}
          placeholder='Name of Contact Person'
          className='form-control'
          value={contactPerson}
          onChange={e => setContactPerson(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Contact Phone Number</label>
        <input
          placeholder='Contact Phone'
          type='phone'
          required={true}
          className='form-control'
          value={contactPhone}
          onChange={e => setContactPhone(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Address Line One</label>
        <input
          placeholder='123 Main St'
          required={true}
          className='form-control'
          value={addressLineOne}
          onChange={e => setContactPhone(e.target.value)}
        />
      </div>
      <div className='form-group'>
        <label>Address Line Two</label>
        <input
          placeholder='Unit number, floor, etc'
          required={true}
          className='form-control'
          value={addressLineTwo}
          onChange={e => setContactPhone(e.target.value)}
        />
      </div>
      <div className='form-row'>
        <div className='form-group col-md-8'>
          <label>City</label>
          <input
            placeholder='City'
            required={true}
            className='form-control'
            value={city}
            onChange={e => setCity(e.target.value)}
          />
        </div>
        <div className='form-group col-md-2'>
          <label>State</label>
          <select
            id='state'
            className='form-control'
            onChange={e => setState(e.target.value)}
          >
            <option selected>{state}</option>
            {states.map(state => (
              <option>{state}</option>
            ))}
          </select>
        </div>
        <div className='form-group col-md-2'>
          <label>Zip Code</label>
          <input
            placeholder='Zip Code'
            required={true}
            className='form-control'
            value={zip}
            maxLength={5}
            onChange={e => setZip(e.target.value)}
          />
        </div>
      </div>

      <button className='btn btn-primary'>Register</button>
    </form>
  );
};

export default RegisterForm;
