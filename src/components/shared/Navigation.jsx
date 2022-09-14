// import './nav.css';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
  return (
    <nav className="nav-container">
      <div className="brand">
        <div className="logo-container">
          <Link to="/">
            <img src={logo} alt="geoflix-logo" className="logo"></img>
          </Link>
        </div>
        <Link to='/' className="brand-name">
            GeoFlix
        </Link>
      </div>
      <form onSubmit={} className='searchbar-container'>
        <input type='search' placeholder="search videos..." className="nav-search-field" value={searchBarText} onChange={(e)=> setSearchBarText(e.target.value)} />
        <button className="btn-bo-decoration text-white" type="submit">
            <FontAwesomeIcon icon='magnifying-glass' className="search-icon"></FontAwesomeIcon>
        </button>
      </form>
      <div className="flex-row-center nav-right-icons">
        <button className="btn-no-decoration curser-pointer text-white" onClick={}>
            <FontAwesomeIcon icon={} className='search-icon'></FontAwesomeIcon>
        </button>
        <div className="profile" onClick={}>
            <FontAwesomeIcon icon='user' className="search-icon"></FontAwesomeIcon>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
