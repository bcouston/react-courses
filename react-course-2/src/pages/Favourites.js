import { useContext } from "react";

import { FavouritesContext } from "../store/favourites-context";
import MeetupList from "../components/meetups/MeetupList";

const FavouritesPage = () => {
  const favouritesContext = useContext(FavouritesContext);

  const { favourites } = favouritesContext;

  return (
    <section>
      <h1>My Favourites</h1>
      {favourites.length > 0 ? (
        <section>
          <MeetupList meetups={favourites} />
        </section>
      ) : (
        <p>No Favourites!</p>
      )}
    </section>
  );
};

export default FavouritesPage;
