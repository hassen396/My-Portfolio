import "./header.css";
import HeaderImage from "../assets/images/logo1.jpg"
export default Header;
function Header() {
  return (
    <header id="home">
      <div className="header-row">
        <ul className="navbar-list">
          <li>
            <img className="logo-image" src={HeaderImage} />
          </li>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a></li>
          <li>Service</li>
          <li>Resume</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </div>
    </header>
  );
}
