import { Link } from "react-router-dom";

export default function Menu()
{
    return <header className="header-area header-sticky">
      <div className="container">
          <div className="row">
              <div className="col-12">
                  <nav className="main-nav">                      
                      <a href="index.html" className="logo">
                          <img src="/src/assets/assets/images/templatemo-eduwell.png" alt="EduWell Template"/>
                      </a>                     
                      <ul className="nav">
                          <li className="scroll-to-section"><Link to="/" className="active">Home</Link></li>

                          <li className="scroll-to-section"><Link to="/about">About US</Link></li>

                          <li className="scroll-to-section"><Link to="/register">Register</Link></li>

                          <li className="scroll-to-section"><Link to="/login">Login</Link></li>
                         
                         
                          <li className="scroll-to-section"><Link to="/contact">Contact Us</Link></li> 
                      </ul>        
                      <a className='menu-trigger'>
                          <span>Menu</span>
                      </a>
                  </nav>
              </div>
          </div>
      </div>
  </header>
}