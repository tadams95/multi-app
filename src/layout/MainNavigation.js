import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Multi App</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/notes" activeClassName={classes.active}>
              All Notes
            </NavLink>
          </li>
          <li>
            <NavLink to="/counter" activeClassName={classes.active}>
              Counter
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
