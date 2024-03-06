// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import React from "react";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
type Props = {
  name: string;
  age: number;
};

export const User: React.FC<Props> = ({ name, age }) => {
  return (
    <div>
      <p>`Name of user: ${name}`</p>
      <p>`Age of user: ${age}`</p>
    </div>
  );
};
