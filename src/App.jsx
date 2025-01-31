import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/checkout" element={ <Checkout /> } />
        <Route path="/login" element={ <Login /> } />
        <Route path="/register" element={ <Register /> } />
      </Routes>
    </div>
  )
}

export default App
