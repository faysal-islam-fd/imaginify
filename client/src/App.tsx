import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import GenerateImage from "./pages/GenerateImage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import BuyCredit from "./pages/BuyCredit"

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<GenerateImage /> } />
        <Route path="/buy-credit" element={<BuyCredit />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App