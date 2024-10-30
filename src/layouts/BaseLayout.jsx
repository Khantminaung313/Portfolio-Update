import { Outlet } from "react-router-dom"
import Footer from "../Footer"
import Header from "../Header"

const BaseLayout = () => {
  return (
    <>
        <div>
            <Header />
        </div>
        <div>
            <Outlet />
        </div>
        <div>
          <Footer />
        </div>
    </>
  )
}

export default BaseLayout