import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/components/header'
import Footer from './assets/components/footer'
import { Content } from './assets/components/content'

function App() {
  const [count, setCount] = useState(0)

  

  return (
    <>
      <Header />
      <Content/>
      <Footer/>
    </>
  )
}

export default App
