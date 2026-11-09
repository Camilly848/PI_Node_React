import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Header from './Header'
import Menu from './Menu'

function App() {


  return (
    <>
      <Header/>    
      <section id="center">
       
        <div>
          <h1>Projeto PI</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        
      </section>

      <section id="spacer"></section>
    </>
  )
}

export default App
