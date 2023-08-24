import { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import { useAuth } from "../../states/auth";
const AdminLayout = () => {
  const { logout } = useAuth();
  return (
    <Fragment>
      <header>
        <div className="container header-container">
          <div className="header">
            <div className="header-menu">
              <Link to="about">About</Link>
              <Link to="skills">Skills</Link>
              <Link to="education">Education</Link>
              <Link to="experiences">Experiences</Link>
              <Link to="projects">Projects</Link>
              <Link to="contact">Contact</Link>
            </div>
            <div className="header-buttons">
              <button className="header-button" type="button">
                <Link to="/">Login</Link>
              </button>
              <button
                className="header-button"
                type="button"
                onClick={() => logout()}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>
      <div className="main"><Outlet /></div>
      <footer>
        <div className="container">
          ©2024 All Rights Reserved. Lorem Technologies, Inc.
        </div>
      </footer>
    </Fragment>
  );
};

export default AdminLayout;
