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
import ToDo from './practice/to-do-list/ToDo'; // practice ToDo.jsx
// import ToDoList from './practice/to-do-list/ToDoList_save';
// import BulletinBoard from './practice/bulletin-board/BulletinBoard'; // practice bulletin - board
// import withUser from './components2/withUser';
// import UserDisplay from './components2/UserDisplay';

// const UserDisplayWithUser = withUser(UserDisplay);

// import Cors from './practice/handle-cors-error/cors';

// import JwtTest from './practice/JwtTest';

function App() {
  // const [visible, setVisible] = useState(false);
  // const [theme, setTheme] = useState();

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

      {/* <BulletinBoard /> */}

      {/* <UserDisplayWithUser userId={1} /> */}
      {/* <Cors /> */}
      {/* <JwtTest /> */}

      {/* <Login /> */}

      <ToDo />
    </>
  );
}

export default App;
