// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

// StrictMode를 실행하면 콘솔이 두번 찍힘 (렌더링 두번 해서)
createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <App />,
  // </StrictMode>,
);
