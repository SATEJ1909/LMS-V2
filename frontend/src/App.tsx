import Home from "./pages/Home"
import { Route , Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Login from "./components/Login"

function App() {
  
  return (
    <>
    <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  )
}

export default App
