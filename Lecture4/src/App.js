// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     // <div className="App">
//     //   <header className="App-header">
//     //     <img src={logo} className="App-logo" alt="logo" />
//     //     <p>
//     //       Edit <code>src/App.js</code> and save to reload.
//     //     </p>
//     //     <a
//     //       className="App-link"
//     //       href="https://reactjs.org"
//     //       target="_blank"
//     //       rel="noopener noreferrer"
//     //     >
//     //       Learn React
//     //     </a>
//     //   </header>
//     // </div>
//     <div>
//       <h1>hello world!!!</h1>
//     </div>
//   );
// }

// export default App;
import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Aboutus from './Aboutus'
import Bootstrap from './Bootstrap'
import Contactus from './Contactus'

const App = () => {
  return ( //31-35 tk component h
    // <div>Aarushi </div>//jsx 
    <div>
    <Bootstrap/>
    <Routes>
  <Route path='/aboutus' element={<Aboutus/>}/>
  <Route path='/contactus' element={<Contactus/>}/>
    </Routes>
    </div>

  )
}

export default App