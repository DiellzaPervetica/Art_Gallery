import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { register } from '../actions/userActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function RegisterScreen(props) {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { search } = useLocation();
  const redirectInUrl = new URLSearchParams(search).get('redirect');
  const redirect = redirectInUrl ? redirectInUrl : '/';

  const userRegister = useSelector((state) => state.userRegister);
  const { userInfo, loading, error } = userRegister;

  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Password and confirm password are not match');
    } else {
      dispatch(register(name, email, password));
    }
  };
  useEffect(() => {
    if (userInfo) {
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo]);
  return (
    <div>
      <form className="form" onSubmit={submitHandler}>
        <div>
          <h1>Krijo llogarinë</h1>
        </div>
        {loading && <LoadingBox></LoadingBox>}
        {error && <MessageBox variant="danger">{error}</MessageBox>}
        <div>
          <label htmlFor="name">Emri</label>
          <input
            type="text"
            id="name"
            placeholder="Shkruaj emrin"
            required
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Shkruaj email"
            required
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="password">Fjalëkalimi</label>
          <input
            type="password"
            id="password"
            placeholder="Shkruaj fjalekalimin"
            required
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label htmlFor="confirmPassword">Konfirmo Fjalëkalimin</label>
          <input
            type="password"
            id="confirmPassword"
            placeholder="Shkruaj konfirmimin e fjalekalimit"
            required
            onChange={(e) => setConfirmPassword(e.target.value)}
          ></input>
        </div>
        <div>
          <label />
          <button className="primary" type="submit">
            Regjistrohu
          </button>
        </div>
        <div>
          <label />
          <div>
            Veqëse ke llogari?{' '}
            <Link to={`/signin?redirect=${redirect}`}>Hyr</Link>
          </div>
        </div>
      </form>
    </div>
  );
}
