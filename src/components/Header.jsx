import { NavLink } from "react-router-dom";
let token = true;

function Header() {
  return (
    <div className="flex  justify-between items-center m-6 mx-10 border-4">
      <NavLink to="/">
        <img
          className=" rounded-full w-14 h-14"
          src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/tlbrp3cnktaebdltt310"
          alt="Quick Bite"
        />
      </NavLink>

      <ul className="flex gap-8 mx-3">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
        {token ? (
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
        ) : (
          <li>
            <NavLink to="#">Logout</NavLink>
          </li>
        )}
      </ul>
    </div>
  );
}

export default Header;
