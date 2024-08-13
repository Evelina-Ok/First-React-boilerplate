import './App.scss'
import { Greetings } from "./components/Greetings"
import { Main } from "./components/Main/Main"
import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
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
