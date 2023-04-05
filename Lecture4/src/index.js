import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter } from "react-router-dom"
import App from './App';
// import Counter from './Counter';
// import Clock from './Clock';
// import Hooks from './Hooks';
// import reportWebVitals from './reportWebVitals';
// import Online from './Online';
// import Bootstrap from './Bootstrap';
// import Aboutus from './Aboutus';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <App/>
  // <Counter/>
  // <Clock/>
  // <Hooks/>
  // <Online/>
  <BrowserRouter>
      {/* <Bootstrap/> */}
      {/* <Aboutus/> */}
      {/* <App/> */}
      {/* <Counter/> */}
{/* <Hooks/> */}
<App/>
    </BrowserRouter>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
 