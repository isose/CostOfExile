import './Navbar.css';
import logo from './image/logo.png';

let devUrl = '/';

function Navbar() {
  return (
    <div className="nav-bar">
      <div>
        <a href={devUrl}>
          <img alt="logo" src={logo} className="logo"></img>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
