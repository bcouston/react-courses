import { createContext, useState } from "react";

export const FavouritesContext = createContext({
  favourites: [],
  totalFavourites: 0,
  addFavourite: (favouriteMeetup) => {},
  removeFavourite: (meetupId) => {},
  itemIsFavourite: (meetupId) => {},
});

export const FavouritesContextProvider = ({ children }) => {
  const [userFavourites, setUserFavourites] = useState([]);

  const addFavouriteHandler = (favouriteMeetup) => {
    setUserFavourites((prev) => prev.concat(favouriteMeetup));
  };

  const removeFavouriteHandler = (meetupId) => {
    setUserFavourites((prev) => prev.filter(({ id }) => id !== meetupId));
  };

  const itemIsFavouriteHandler = (meetupId) =>
    userFavourites.map(({ id }) => id).includes(meetupId);

  const context = {
    favourites: userFavourites,
    totalFavourites: userFavourites.length,
    addFavourite: addFavouriteHandler,
    removeFavourite: removeFavouriteHandler,
    itemIsFavourite: itemIsFavouriteHandler,
  };

  return (
    <FavouritesContext.Provider value={context}>
      {children}
    </FavouritesContext.Provider>
  );
};
