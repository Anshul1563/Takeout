// import Navbar from './components/Navbar';
// import MainContent from './components/MainContent'
import React from "react";


import Header from './components/Header'
import Main from './components/MemeMain'

export default function App() {
    
    const [sub,setSub] = React.useState("")

    function handleSub(val)
    {
      setSub(val)
    }
    return (
      <div>
        <Header sub = {sub}  />
        <Main sub = {handleSub}/>
      </div>
    )
  }