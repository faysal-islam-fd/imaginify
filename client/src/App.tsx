import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import GenerateImage from "./pages/GenerateImage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<> <Navbar/><Home /><Footer /></>} />
        <Route path="/generate" element={<><Navbar/><GenerateImage /></>} />
      </Routes>
    </div>
  )
}

export default App