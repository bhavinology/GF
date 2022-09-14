// import './nav.css';
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Sidebar() {
  return (
    <>
      <aside className="sidebar">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "sidebar-item sidebar-active" : "sidebar-item"
          }
        >
          <FontAwesomeIcon icon="home" className="sidebar-icon" />
          <span>Home</span>
        </NavLink>
        <NavLink
          to="/videos"
          className={({ isActive }) =>
            isActive ? "sidebar-item sidebar-active" : "sidebar-item"
          }
        >
          <FontAwesomeIcon icon="compass" className="sidebar-icon" />
          <span>Explore</span>
        </NavLink>
        <NavLink
          to="/playlists"
          className={({ isActive }) =>
            isActive ? "sidebar-item sidebar-active" : "sidebar-item"
          }
        >
          <FontAwesomeIcon icon="clapperboard" className="sidebar-icon" />
          <span>Playlists</span>
        </NavLink>
        <NavLink
          to="/liked"
          className={({ isActive }) =>
            isActive ? "sidebar-item sidebar-active" : "sidebar-item"
          }
        >
          <FontAwesomeIcon icon="thumbs-up" className="sidebar-icon" />
          <span>Liked</span>
        </NavLink>
        <NavLink
          to="/history"
          className={({ isActive }) =>
            isActive ? "sidebar-item sidebar-active" : "sidebar-item"
          }
        >
          <FontAwesomeIcon icon="clock-rotate-left" className="sidebar-icon" />
          <span>History</span>
        </NavLink>
        <NavLink
          to="/watchlater"
          className={({ isActive }) =>
            isActive ? "sidebar-item sidebar-active" : "sidebar-item"
          }
        >
          <FontAwesomeIcon icon="clock" className="sidebar-icon" />
          <span>Watch Later</span>
        </NavLink>
        <NavLink
          to="/uploadvideo"
          className={({ isActive }) =>
            isActive ? "sidebar-item sidebar-active" : "sidebar-item"
          }
        >
          <FontAwesomeIcon icon="upload" className="sidebar-icon" />
          <span>Upload Video</span>
        </NavLink>
      </aside>
      <div className="mobile-bottom-nav">
        <Link to="/videos" className="mobile-nav-item">
          <div className="mobile-nav-item">
            <FontAwesomeIcon icon="compass" className="bottom-icon" />
            <span>Explore</span>
          </div>
        </Link>
        <Link to="/playlists" className="mobile-nav-item">
          <div className="mobile-nav-item">
            <FontAwesomeIcon icon="clapperboard" className="bottom-icon" />
            <span>Playlists</span>
          </div>
        </Link>
        <Link to="/uploadvideo" className="mobile-nav-item">
          <div className="mobile-nav-item">
            <div className="mobile-nav-item">
              <FontAwesomeIcon icon="upload" className="bottom-icon" />
              <span>Upload Video</span>
            </div>
          </div>
        </Link>
        <Link to="/profile" className="mobile-nav-item">
          <div className="mobile-nav-item">
            <FontAwesomeIcon icon="user" className="bottom-icon" />
            <span>Profile</span>
          </div>
        </Link>
      </div>
    </>
  );
}

export default Sidebar;
