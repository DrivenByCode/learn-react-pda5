import { useState, useEffect } from 'react';

export default function Cors() {
  const [comment, setComment] = useState([]);
  const baseUrl = '/board';

  useEffect(() => {
    fetch(baseUrl)
      .then((r) => r.json())
      .then((res) => {
        setComment(res);
        console.log(res);
      });
  }, []);
  return (
    <>
      <h1>UI</h1>
      <div>
        {comment.map((ele, idx) => (
          <div key={idx}>
            <div>{ele.title}</div>
            <div>{ele.content}</div>
          </div>
        ))}
      </div>
    </>
  );
}
