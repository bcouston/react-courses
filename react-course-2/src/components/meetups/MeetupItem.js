import { useContext } from "react";

import Card from "../ui/Card";
import { FavouritesContext } from "../../store/favourites-context";

import classes from "./MeetupItem.module.css";

const MeetupItem = ({ id, image, title, address, description }) => {
  const favouritesContext = useContext(FavouritesContext);

  const { itemIsFavourite, addFavourite, removeFavourite } = favouritesContext;

  const toggleFavouriteStatusHandler = () => {
    if (itemIsFavourite(id)) {
      removeFavourite(id);
    } else {
      addFavourite({
        id,
        title,
        description,
        image,
        address,
      });
    }
  };

  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.image}>
          <img src={image} alt={title}></img>
        </div>
        <div className={classes.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={classes.actions}>
          <button onClick={toggleFavouriteStatusHandler}>
            {itemIsFavourite(id)
              ? "Remove from Favourites"
              : "Add to Favourites"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
