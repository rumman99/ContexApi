import { createContext, useState } from 'react'
import './App.css'
import Home from './Component/Home/Home'
import Page1 from './Component/Page1/Page1';

export const passContext= createContext();

function App() {
const [category, setCategory]= useState('Laptop');

  return (
    <passContext.Provider value={[category, setCategory]}>
     <Home></Home>
     <Page1></Page1>
    </passContext.Provider>
  )
}

export default App
