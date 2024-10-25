import { BrowserRouter, Route, Routes } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout"
import LandingPage from "./pages/LandingPage"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<LandingPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App