import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Login from "./pages/Login"
import Home from "./pages/Home"
import Detail from "./pages/Detail"

function App() {

  return (
    <>
      <div className="relative">
        <BrowserRouter >
          <Header />
          <Routes >
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
