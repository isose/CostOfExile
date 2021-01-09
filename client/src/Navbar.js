import './Navbar.css';
import betterlogo from './image/betterlogo.png';

let devUrl = '/';

function Navbar() {
  return (
    <div className="nav-bar">
      <div className="div-center">
        <a href={devUrl}>
          <img alt="logo" src={betterlogo} className="logo"></img>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
