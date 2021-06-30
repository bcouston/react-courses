import { useContext } from "react";

import { Link } from "react-router-dom";

import { FavouritesContext } from "../../store/favourites-context";

import classes from "./MainNavigation.module.css";

const MainNavigation = () => {
  const favouritesContext = useContext(FavouritesContext);

  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new-meetup">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favourites">
              <span className={classes.badge}>
                {favouritesContext.totalFavourites}
              </span>
              My Favourites
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default MainNavigation;
