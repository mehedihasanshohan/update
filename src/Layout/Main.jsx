import { Outlet } from "react-router-dom"
import Footer from "../Pages/Shared/Footer"
import Navbar from "../Pages/Shared/Navbar/Navbar"

const Main = () => {
  return (
    <div>
      <Outlet></Outlet>
      <Footer></Footer>
      <Navbar></Navbar>
   </div>

  )
}

export default Main