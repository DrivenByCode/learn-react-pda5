// import './App.css'
// import HelloWorld, { HelloWorld2, sampleVar } from './components/HelloWorld'
// import CaptionImage from './components/CaptionImage'
// import MyButton from "./components/MyButton"

// import { useState } from 'react';

// import UserDetail from './components/UserDetail';

// import Practice1 from './components/Practice1';
// import Practice2 from './components/Practice2';

// import BlinkComponent from "./components/BlinkComponent"
// import CounterComponent from "./components/CounterComponent"

// import BlinkComponent from "./components/BlinkComponent";
// import CountComponent from "./components/CountComponent"
// import {useState} from 'react';
// import OnChangeInput from "./components/OnChangeInput";

// import AdditionalPractice1 from './components/AdditionalPractice1';
// import AdditionalPractice2 from './components/AdditionalPractice2';
// import AdditionalPractice3 from './components/AdditionalPractice3';
// import AdditionalPractice4 from './components/AdditionalPractice4';

// import PrimeCalculator from './components/PrimeCalculator';

// import MyPage from './components2/MyPage';
// import ThemeButton from './components2/ThemeButton';
// import { ThemeProvider } from './contexts/themeContext';
// import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
// import ToDoList from './practice/to-do-list/ToDoList_save';
import { useState } from 'react';
import useTodo from './practice/to-do-list/hooks/useTodo';
import TodoInput from './practice/to-do-list/components/TodoInput';
import Colorbar from './practice/to-do-list/components/ColorBar';
import TodoList from './practice/to-do-list/components/TodoList';
import SearchInput from './practice/to-do-list/components/SearchInput';
import styles from './practice/to-do-list/Styles';

const colors = ['grey', 'red', 'yellow', 'pink'];

function App() {
  // const [visible, setVisible] = useState(false);
  // const [theme, setTheme] = useState();

  const { todoList, addTodo, removeTodo, editTodo } = useTodo();
  const [text, setText] = useState('');
  const [color, setColor] = useState(colors[0]);
  const [query, setQuery] = useState('');

  const handleAddTodo = () => {
    if (text.trim()) {
      addTodo(text, color);
      setText('');
    }
  };

  const filteredTodos = todoList.filter((todo) => todo.text.toLowerCase().includes(query.toLowerCase()));
  return (
    <>
      {/* <Button>버튼</Button>
      <ThemeProvider>
        <ThemeButton
          onChangeTheme={() => {
            setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
          }}
        />
        <MyPage theme={theme} />
      </ThemeProvider> */}
      {/* <OnChangeInput/> */}

      {/* <Practice1 />
      <Practice2 />

      <AdditionalPractice1 />
      <AdditionalPractice2 />
      <AdditionalPractice3 /> */}
      {/* <AdditionalPractice4 /> */}
      {/* <PrimeCalculator /> */}
      {/* <UserDetail /> */}

      {/* <CaptionImage 
        imgUrl="https://kkoma.net/web/product/big/201905/4aa48d0ebab9f50f9e3b47fb7b8af386.jpg" 
        caption="니가그린 구름 그림"
      /> */}
      {/* <CaptionImage imgUrl="https://post-phinf.pstatic.net/MjAyMjA3MTBfMjIx/MDAxNjU3NDQ3MTE5MDkx.qFrFwlIjVSv6sVp7NBtvO8Du0jHmm2THqqaFnUZu5Pog.w6iV0BZZYaSjSzaQz4BGb_GJxLJk8_HzxVMJNeF_vqYg.JPEG/1.jpg?type=w1200" caption="이건 트럭입니다"/> */}

      {/* <HelloWorld/> */}
      {/* <HelloWorld2/> */}
      {/* {sampleVar.greeting} */}
      {/* <MyButton title="네이버로 이동" color="green" clickUrl="https://www.naver.com"/ > */}
      {/* <BlinkComponent text="깜박거리고 사라집니다."/> */}
      {/* <CounterComponent/>    */}

      {/* <button onClick={()=> setVisible(!visible)}>
        보이기
      </button>
      {visible ? <CountComponent/> : null} */}
      {/* <ToDoList /> */}
      <div style={styles.container}>
        <h1 style={styles.title}>Todo App</h1>
        <TodoInput text={text} setText={setText} onAdd={handleAddTodo} />
        <Colorbar colors={colors} selectedColor={color} onSelectColor={setColor} />
        <SearchInput query={query} setQuery={setQuery} />
        <TodoList todos={filteredTodos} onRemove={removeTodo} onEdit={editTodo} />
      </div>
    </>
  );
}

export default App;
