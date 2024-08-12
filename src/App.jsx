import './App.scss'
import { Greetings } from "./components/Greetings"
import { Main } from "./components/Main"
import { Header } from "./components/Header"
import { Footer } from "./components/Footer"
import { Navbar } from "./components/Navbar/Navbar"
 
function App() {
  
  return (
  <>
 
  {/* <Greetings/> */}

  <Header/>
  <Navbar/>
  <Main/>
  <Footer/>
  </>
  )
}

export default App
