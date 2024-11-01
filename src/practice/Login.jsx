import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import axios from 'axios';
export default function Login({ handleClose }) {
  const baseUrl = 'http://localhost:3000/users/';
  const LOGIN_KEY = 'login_';
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');
  const [token, setToken] = useState(() => {
    localStorage.getItem(LOGIN_KEY) ? localStorage.getItem(LOGIN_KEY) : undefined;
  });

  const getLoginInfo = async (email, password) => {
    return await axios
      .post(`${baseUrl}login`, {
        email,
        password,
      })
      .then((r) => {
        r.data, localStorage.setItem(LOGIN_KEY, r.data.token), setToken(r.data.token);
        console.log(r.data);
      })
      .catch((e) => {
        if (e.response.data.message.includes('password')) {
          console.log('######', e.response.data.message);
        } else if (e.response.data.message.includes('email')) {
          console.log('######', e.response.data.message);
        }
      });
  };

  const getLogoutInfo = async () => {
    return await axios.get(`${baseUrl}logout`).then((r) => r.data, localStorage.clear(), setToken(undefined));
  };

  useEffect(() => {
    console.log('>>>>>' + token);
  }, [token]);
  return (
    <>
      <div>
        {token === undefined ? (
          <form>
            <input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="id"
              autoComplete="username"
              style={{ width: '100%' }}
            />
            <br />
            <input
              type="password"
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              placeholder="pw"
              autoComplete="current-password"
              style={{ width: '100%' }}
            />
            <br />
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '1rem' }}>
              <Button variant="contained" color="primary" onClick={(() => getLoginInfo(id, pw), handleClose)}>
                로그인
              </Button>
            </div>
            <br />
          </form>
        ) : (
          <Button variant="contained" color="primary" onClick={() => getLogoutInfo()} style={{}}>
            로그아웃
          </Button>
        )}
      </div>
    </>
  );
}
