export default function JwtTest() {
  const fetchBoard = () => {
    fetch('http://localhost:3000/board', {
      headers: {
        authorization: `Bearer ${localStorage.getItem('auth-token')}`,
      },
    });
  };

  const onLogin = () => {
    fetch('http://localhost:3000/users/login', {
      method: 'POST',
      body: JSON.stringify({
        email: 'sample@naver.com',
        password: 'admin1234',
      }),
      headers: {
        'content-type': 'application/json',
      },
    })
      .then((resp) => {
        return resp.json();
      })
      .then((data) => {
        localStorage.setItem('auth-token', data.token);
      });
  };

  return (
    <div>
      <button onClick={onLogin}>로그인</button>
      App
      <button onClick={fetchBoard}>보드 fetch</button>
    </div>
  );
}
