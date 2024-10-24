import styles from './Styles';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
export default function BulletinBoard() {
  const [user, setUser] = useState([]);
  const [title, setTitle] = useState('');
  const [sentence, setSentence] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  useEffect(() => {
    (async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((res) => {
          return res;
        });
      setUser([...data]);
    })();
  }, []);

  return (
    <div>
      <h1 style={styles.title}>게시판 구현</h1>
      <div>
        <div style={styles.editArea}>
          <div style={styles.edit}>
            {/* 편집 */}
            <h2>게시글 {isEdited ? '수정' : '작성'}</h2>
            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="제목" />
            <textarea
              placeholder="내용"
              style={styles.editTextArea}
              onChange={(e) => setSentence(e.target.value)}
              value={sentence}
            />
          </div>
          <Button variant="outlined">{isEdited ? '수정' : '작성'}</Button>
        </div>

        <div style={styles.posts}>
          {/* 게시물 목록 */}
          {user.map((ele, idx) => (
            <div key={idx} style={styles.post}>
              <h1 style={styles.postTitle}>{ele.title}</h1>
              <span>{ele.body}</span>
              <div style={styles.buttonGroup}>
                <Button variant="outlined" onClick={() => setIsEdited(!isEdited)}>
                  수정
                </Button>
                <Button variant="outlined">삭제</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
