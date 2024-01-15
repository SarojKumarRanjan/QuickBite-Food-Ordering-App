
let token = false;


function Header() {
  return (
    <div className="flex  justify-between items-center m-6 mx-10 border-4">
        <a href="/">
      <img
        className=" rounded-full w-14 h-14"
        src="https://media-cdn.grubhub.com/image/upload/d_search:browse-images:default.jpg/w_300,q_100,fl_lossy,dpr_2.0,c_fit,f_auto,h_300/tlbrp3cnktaebdltt310"
        alt="Quick Bite"
      />
      </a>

      <ul className="flex gap-8 mx-3">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
        <li>Cart</li>
        {
            token? <li>Login</li> : <li>Logout</li>
        }
        
      </ul>
    </div>
  );
}

export default Header;
