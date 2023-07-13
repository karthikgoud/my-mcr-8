import { NavLink } from "react-router-dom";
import Header from "../../components/Header/Header";
import MeetCard from "../../components/MeetCard/MeetCard";
import { useData } from "../../context/DataContext";
import styles from "./MeetListing.module.css";

const MeetListing = () => {
  const {
    data: { meetData },
  } = useData();

  return (
    <div>
      <Header />
      <div className={styles.eventsHeading}>
        <h1>Meetup events</h1>
        <div>filter</div>
      </div>
      <div className={styles.listCont}>
        {meetData.map((meet) => (
          <NavLink to={`/event/${meet.id}`}>
            <MeetCard meet={meet} />
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default MeetListing;
