import "./nav.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
  // const navigate = useNavigate();
  return (
    <nav className="nav-container">
      <div className="brand">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="geoflix-logo" className="logo"></img>
          </Link>
        </div>
        <Link to="/" className="brand-name">
          GeoFlix
        </Link>
      </div>
      <form className="searchbar-container">
        <input
          type="search"
          placeholder="search videos..."
          className="nav-search-field"
        />
        <button className="btn-no-decoration text-white" type="submit">
          <FontAwesomeIcon
            icon="magnifying-glass"
            className="search-icon"
          ></FontAwesomeIcon>
        </button>
      </form>
      <div className="flex-row-center nav-right-icons">
        <button className="btn-no-decoration curser-pointer text-white">
          <FontAwesomeIcon
            icon="moon"
            className="search-icon"
          ></FontAwesomeIcon>
        </button>
        <div className="profile">
          <FontAwesomeIcon
            icon="user"
            className="search-icon"
          ></FontAwesomeIcon>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
