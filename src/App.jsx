// import './App.css'
// import HelloWorld, { HelloWorld2, sampleVar } from './components/HelloWorld'
// import CaptionImage from './components/CaptionImage'
// import MyButton from "./components/MyButton"

// import BlinkComponent from "./components/BlinkComponent"
// import CounterComponent from "./components/CounterComponent"

// import BlinkComponent from "./components/BlinkComponent";
import CountComponent from "./components/CountComponent"
import {useState} from 'react';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
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
      <button onClick={()=> setVisible(!visible)}>
        보이기
      </button>
      {visible ? <CountComponent/> : null}
    </div>
  )
}

export default App
