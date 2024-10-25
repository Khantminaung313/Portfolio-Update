import { BrowserRouter, Route, Routes } from "react-router-dom"
import BaseLayout from "./layouts/BaseLayout"
import Landing from "./pages/landing"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BaseLayout/>}>
          <Route index element={<Landing />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App