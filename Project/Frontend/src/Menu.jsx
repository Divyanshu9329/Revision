import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Menu() {
  const user = useSelector((store) => store.userInfo.value);

  return (
    <header className="header-area header-sticky">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* <StudentMenu/> */}
            {user.islogin ? <StudentMenu /> : <BasicMenu />}
          </div>
        </div>
      </div>
    </header>
  );
}

function BasicMenu() {
  return (
    <nav className="main-nav">
      <a href="index.html" className="logo">
        <img
          src="/src/assets/assets/images/templatemo-eduwell.png"
          alt="EduWell Template"
        />
      </a>
      <ul className="nav">
        <li className="scroll-to-section">
          <Link to="/" className="active">
            Home
          </Link>
        </li>

        <li className="scroll-to-section">
          <Link to="/about">About US</Link>
        </li>

        <li className="scroll-to-section">
          <Link to="/register">Register</Link>
        </li>

        <li className="scroll-to-section">
          <Link to="/login">Login</Link>
        </li>

        <li className="scroll-to-section">
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
      <a className="menu-trigger">
        <span>Menu</span>
      </a>
    </nav>
  );
}

function StudentMenu() {
  return (
    <nav className="main-nav">
      <a href="index.html" className="logo">
        <img
          src="/src/assets/assets/images/templatemo-eduwell.png"
          alt="EduWell Template"
        />
      </a>
      <ul className="nav">
        <li className="scroll-to-section">
          <Link to="/student/home" className="active">
            Home
          </Link>
        </li>

        <li className="scroll-to-section">
          <Link to="/student/queries">Queries</Link>
        </li>

        <li className="scroll-to-section">
          <Link to="/student/docs">Document</Link>
        </li>

        <li className="scroll-to-section">
          <Link to="/student/msg">Messageboard</Link>
        </li>

        <li className="scroll-to-section">
          <button className="btn btn-outline-primary">Logout</button>
        </li>
      </ul>
      <a className="menu-trigger">
        <span>Menu</span>
      </a>
    </nav>
  );
}
