import React,{ useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import Pagecompo from './Page.component';

function App() {
  const [selectOption,setSelectOption]=useState();
  const langs = ['Option 1', 'Option 2', 'Option 3'];
  const handlelang=(event: { target: { value: React.SetStateAction<undefined>; }; })=>{
    setSelectOption(event.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
       
      </header>
  <Pagecompo/>
    </div>
  );
}

export default App;
