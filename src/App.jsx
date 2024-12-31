import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/sideBar/SideBar';
import About from './pages/about/about';
import './App.css';

function App() {
  const [count, setCount] = useState(0)

  return (
     <div className="app">
      <Sidebar />
      <main className="main-content">
        <About/>


      </main>
    </div>
  )
}

export default App