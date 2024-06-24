import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <div>Desde Layout</div>
      <Outlet />
    </>
  );
}

export default Layout;
