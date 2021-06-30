import MainNavigation from "./MainNavigation";

import classes from "./Layout.module.scss";

const Layout = ({ children }) => (
  <div>
    <MainNavigation />
    <main className={classes.main}>{children}</main>
  </div>
);

export default Layout;
