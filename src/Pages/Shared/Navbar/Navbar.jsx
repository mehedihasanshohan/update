import { Link } from "react-router-dom"
const Navbar = () => {

    const navOptions = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Menu">Menu</Link></li>
        <li><Link to="/Order/salad">Order</Link></li>
    </>
  return ( <>
    <div className="navbar fixed z-10 max-w-screen-xl opacity-50 bg-black text-white font-bold font-2xl">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-black rounded-box z-[1] mt-3 w-52 p-2 shadow">
        {/* <li><a>HOME</a></li>
        <li><a>CONTACT US</a></li>
        <li><a>DASHBOARD</a></li>
        <li><a>OUR MENU</a></li>
        <li>OUR SHOP</li> */}
        {navOptions}
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Bistro Boss</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {/* <li><a>HOME</a></li>
        <li><a>CONTACT US</a></li>
        <li><a>DASHBOARD</a></li>
        <li><a>OUR MENU</a></li>
        <li><a href="">OUR SHOP</a></li> */}
        {navOptions}
    </ul>
  </div>
  <div className="navbar-end">
    {/* <a className="btn">Button</a> */}
  </div>
</div>
</>
  )
}

export default Navbar