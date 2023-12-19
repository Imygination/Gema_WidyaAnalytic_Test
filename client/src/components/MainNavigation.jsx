import { Link, useNavigate } from "react-router-dom";

function MainNavigation() {
  const navigate = useNavigate();
  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.clear();
    navigate("/login");
  };
  return (
    <>
      <header>
        {/* <!-- Sidebar --> */}
        <nav
          id="sidebarMenu"
          className="collapse d-lg-block sidebar collapse bg-white"
        >
          <div className="position-sticky">
            <div className="list-group list-group-flush mx-3 mt-4">
              <Link
                to="/"
                className="list-group-item list-group-item-action py-2 ripple"
                aria-current="true"
              >
                <i className="fas fa-clipboard-list me-3"></i>
                <span>Main dashboard</span>
              </Link>
              <Link
                to="/profile"
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-circle-user me-3"></i>
                <span>Profile</span>
              </Link>
              <a
                onClick={handleLogout}
                href=""
                className="list-group-item list-group-item-action py-2 ripple"
              >
                <i className="fas fa-globe fa-fw me-3"></i>
                <span>Sign Out</span>
              </a>
            </div>
          </div>
        </nav>
        {/* <!-- Sidebar --> */}

        {/* <!-- Navbar --> */}
        <nav
          id="main-navbar"
          className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
        >
          {/* <!-- Container wrapper --> */}
          <div className="container-fluid">
            {/* <!-- Toggle button --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-mdb-toggle="collapse"
              data-mdb-target="#sidebarMenu"
              aria-controls="sidebarMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <i className="fas fa-bars"></i>
            </button>

            {/* <!-- Brand --> */}
            <a className="navbar-brand nav-link">
              <strong>Gema-Mart</strong>
            </a>
            {/* <!-- Right links --> */}
            <ul className="navbar-nav ms-auto d-flex flex-row">
              {/* <!-- Icon --> */}
              <li className="nav-item">
                <a className="navbar-brand nav-link">
                  <h5>Welcome ...</h5>
                </a>
              </li>
            </ul>
          </div>
          {/* <!-- Container wrapper --> */}
        </nav>
        {/* <!-- Navbar --> */}
      </header>
    </>
  );
}

export default MainNavigation;
