import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from "./components/Login"

function App() {

  return (
    <>
      <BrowserRouter >
          <Routes >
            <Route path="/" element={<Login />} />
          </Routes>
      </BrowserRouter>
      Disney Clone
    </>
  )
}

export default App
