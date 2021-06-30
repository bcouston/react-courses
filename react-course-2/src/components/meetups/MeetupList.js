import MeetupItem from "./MeetupItem";
import classes from "./MeetupList.module.css";

const MeetupList = ({ meetups }) => (
  <ul className={classes.list}>
    {meetups.map((meetup) => (
      <MeetupItem {...meetup} key={meetup.id} />
    ))}
  </ul>
);

export default MeetupList;
