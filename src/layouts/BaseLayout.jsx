import { Outlet } from "react-router-dom"
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

    </>
  )
}

export default BaseLayout