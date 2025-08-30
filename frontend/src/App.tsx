import Home from "./pages/Home"
import { Route , Routes } from "react-router-dom"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <>
    <Navbar isLoggedIn={true} />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  )
}

export default App
