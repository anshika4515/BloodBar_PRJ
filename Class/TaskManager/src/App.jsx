import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MyButton from './MyButton';

// let message = "Hello React!";

function Hello(){
  return "Hello React!";
}

function App() {
    return(
      <div>
      <Hello/>
      <Hello/>
      <MyButton title={"SignUp"}class={"large"}/>
      </div>
    );
}

export default App
