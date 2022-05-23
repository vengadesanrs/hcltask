import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <div className="container">
          <nav className="navbar navbar-default">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">
                HCL Task
              </a>
            </div>

            <ul className="nav navbar-nav">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/addtask">Add Task</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
