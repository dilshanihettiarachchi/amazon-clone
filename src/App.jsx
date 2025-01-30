import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {

  return (
    <div className="app">
      <Header />
      <Navbar />
      <Routes>
        <Route path="/" element={ <Home /> } />
      </Routes>
    </div>
  )
}

export default App
