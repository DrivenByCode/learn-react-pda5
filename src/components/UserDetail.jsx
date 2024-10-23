import { useState, useCallback, useEffect, useMemo } from 'react';

export default function UserDetail() {
  const baseUrl = 'https://jsonplaceholder.typicode.com/users';

  const [userId, setUserId] = useState('');
  const [toggle, setToggle] = useState(false);

  // const fetchUser = (userId) => {
  //   return fetch(`${baseUrl}/${userId}`).then((resp) => {
  //     return resp.json();
  //   });
  // };

  const fetchUser = useCallback(() => {
    return fetch(`${baseUrl}/${userId}`).then((resp) => {
      console.log('요청');
      console.log(userId);
      return resp.json();
    });
  }, [userId]);

  // 위와 같다.
  // const fetchUser2 = useMemo(() => {
  //   return () => {
  //     return fetch(`${baseUrl}/${userId}`).then((resp) => {
  //       return resp.json();
  //     });
  //   };
  // }, [userId]);

  useEffect(() => {
    fetchUser().then((data) => {
      console.log(data);
    });
  }, [fetchUser]);

  return (
    <div>
      <button
        onClick={() => {
          setToggle((prev) => !prev);
        }}
      >
        버튼
      </button>
      <input
        type="text"
        value={userId}
        onChange={(e) => {
          setUserId(e.target.value);
        }}
      />
    </div>
  );
}