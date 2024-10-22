import { useState } from 'react';
export default function Practice2() {
  const [stopword, setStopWord] = useState('');
  const [stopwords, setStopWords] = useState([]);
  const [userText, setUserText] = useState('');
  const [userTexts, setUserTexts] = useState([]);

  const removeStopWord = (sentence) => {
    for (let word of stopwords) {
      if (sentence.includes(word)) {
        sentence = sentence.replaceAll(word, '**');
      }
    }
    return sentence;
  };

  return (
    <>
      <h1>2번</h1>
      <div>
        금지어 입력
        <input type="text" value={stopword} onChange={(e) => setStopWord(e.target.value)} />
        <button onClick={() => setStopWords([...stopwords, stopword])}>클릭</button>
        <ul>
          {stopwords.map((ele, idx) => (
            <li key={idx}>{ele}</li>
          ))}
        </ul>
      </div>
      <div>
        사용자 입력
        <input type="text" value={userText} onChange={(e) => setUserText(e.target.value)} />
        <button
          onClick={() => {
            setUserTexts([...userTexts, removeStopWord(userText)]);
          }}
        >
          클릭
        </button>
        <ul>
          {userTexts.map((ele, idx) => (
            <li key={idx}>{ele}</li>
          ))}
        </ul>
      </div>
    </>
  );
}
