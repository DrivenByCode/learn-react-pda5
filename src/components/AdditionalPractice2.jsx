import { useState, useEffect } from 'react';
import axios from 'axios';

export default function AdditionalPractice2() {
  const [userInfos, setUserInfo] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then((r) => r.data)
        .catch((e) => {
          console.log(e);
        });
      setUserInfo([...res]);
    })();
  }, []);
  return (
    <>
      <h1>추가문제 2번</h1>

      <ul>
        {userInfos.map((ele) => (
          <>
            <li key={ele.id}>username: {ele.username}</li>
            <li key={ele.id}>email: {ele.email}</li>
          </>
        ))}
      </ul>
    </>
  );
}
