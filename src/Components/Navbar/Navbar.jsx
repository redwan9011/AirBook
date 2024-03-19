

const Navbar = () => {
    return (
        <div className=" bg-base-100 fixed w-full z-50 opacity-90">
            <div className="navbar bg-base-100  max-w-6xl mx-auto  ">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 font-medium text-lg z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><a>Blog</a></li>
      <li><a>Offer</a></li>
      <li><a>Airlines</a></li>
      <li><a>About</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl"><img src="https://i.ibb.co/x6BxnCG/Capture.png" alt="" /></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 font-medium text-lg">
      <li><a>Blog</a></li>
      <li><a>Offer</a></li>
      <li><a>Airlines</a></li>
      <li><a>About</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn bg-blue-500 text-xl font-medium px-5 text-white">Sign in</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;