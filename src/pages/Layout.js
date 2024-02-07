import React from "react";
import { Outlet } from "react-router-dom";

// The Layout.jsx component specifies the application markup that remains
// consistent across all routes. This guide uses a simple header message:
// React With Firebase Authentication. A "real" application might use branding
// and/or navigation bar markup in its Layout specification, for example.
// The component also includes an <Outlet /> tag for rendering the markup
// specified by the different routes.
function Layout() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-center mt-3">
        <div className="col-md-4 text-center">
          <p className="lead">React With Firebase Authentication</p>
        </div>
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
