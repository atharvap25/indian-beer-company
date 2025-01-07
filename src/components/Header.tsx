import "./Header.css";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top">
        <div className="container">
          <a className="navbar-brand">
            <img src="/logo.png" alt="Bootstrap" width="106" height="50" />
          </a>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Coming Soon
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Coming Soon
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  Coming Soon
                </a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              {/* end content */}
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}
