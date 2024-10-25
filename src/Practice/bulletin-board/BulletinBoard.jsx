import styles from './Styles';
import { useState, useEffect, useRef } from 'react';
import Button from '@mui/material/Button';

export default function BulletinBoard() {
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState('');
  const [postId, setPostId] = useState(0);
  const [sentence, setSentence] = useState('');
  const [isEdited, setIsEdited] = useState(false);
  const ref = useRef(null);
  const [addedCount, setAddedCount] = useState(0);

  useEffect(() => {
    if (addedCount > 0) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }
  }, [addedCount]);

  useEffect(() => {
    (async () => {
      const data = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((data) => data.json())
        .then((res) => {
          return res;
        });
      setPosts([...data]);
    })();
  }, []);

  const clearMsg = () => {
    setTitle('');
    setSentence('');
    alert(`게시글이 ${isEdited ? '수정' : '작성'}되었습니다.`);
  };

  const addPost = () => {
    const len = posts.length;
    setPosts([...posts, { userId: 1, id: len + 1, title, body: sentence }]);
    clearMsg();

    setAddedCount((prev) => prev + 1);
  };

  const editPost = (idx, title, body) => {
    setPosts(posts.map((post) => (post.id === idx ? { ...post, title, body } : post)));
    clearMsg();
  };

  const deletePost = (id) => {
    console.log(id);
    setPosts(posts.filter((ele) => ele.id !== id));
  };

  return (
    <>
      <div style={styles.all} ref={ref}>
        <h1 style={styles.title}>게시판</h1>
        <div>
          <div style={styles.editArea}>
            <div style={styles.edit}>
              {/* 작성 및 편집 */}
              <h2 style={styles.editTitle}>게시글 {isEdited ? '수정' : '작성'}</h2>
              <input type="text" placeholder="제목" onChange={(e) => setTitle(e.target.value)} value={title} />
              <input type="text" placeholder="내용" onChange={(e) => setSentence(e.target.value)} value={sentence} />
            </div>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => {
                setIsEdited(false), isEdited ? editPost(postId, title, sentence) : addPost();
              }}
              style={styles.editButton}
            >
              {isEdited ? '수정' : '작성'}
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              onClick={() => {
                setIsEdited(false), setTitle(''), setSentence('');
              }}
              style={styles.editButton}
            >
              취소
            </Button>
          </div>

          <div style={styles.posts}>
            {/* 게시물 목록 */}
            {posts.map((ele, idx) => (
              <div key={idx} style={styles.post}>
                <h2 style={styles.postTitle}>
                  {ele.id}. {ele.title}
                </h2>
                <span>{ele.body}</span>
                <div style={styles.buttonGroup}>
                  <Button
                    variant="outlined"
                    color="inherit"
                    onClick={() => {
                      setIsEdited(true),
                        setTitle(ele.title),
                        setSentence(ele.body),
                        setPostId(ele.id),
                        ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }}
                  >
                    수정
                  </Button>
                  <Button variant="outlined" color="inherit" onClick={() => deletePost(ele.id)}>
                    삭제
                  </Button>
                </div>
              </div>
            ))}
            <div>
              <Button
                variant="outlined"
                color="inherit"
                style={styles.bottomToTop}
                onClick={() => ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}
              >
                위로가기
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
