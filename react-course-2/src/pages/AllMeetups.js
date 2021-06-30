import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const DUMMY_DATA = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    address: "Meetupstreet 5, 12345 Meetup City",
    description:
      "This is a first, amazing meetup which you definitely should not miss. It will be a lot of fun!",
  },
];

const AllMeetupsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  const getMeetupsData = async () => {
    setIsLoading(true);
    const data = await fetch(
      "https://react-course-2-8c79c-default-rtdb.europe-west1.firebasedatabase.app/meetups.json"
    );
    const jsonData = await data.json();
    const meetups = jsonData
      ? Object.keys(jsonData).map((key) => ({
          id: key,
          ...jsonData[key],
        }))
      : DUMMY_DATA;
    setIsLoading(false);
    setLoadedMeetups(meetups);
  };

  useEffect(() => {
    getMeetupsData();
  }, []);

  return isLoading ? (
    <section>
      <p>Loading...</p>
    </section>
  ) : (
    <div>
      <h1>All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </div>
  );
};

export default AllMeetupsPage;
