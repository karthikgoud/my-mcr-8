import { NavLink, useParams } from "react-router-dom";
import styles from "./EventDetails.module.css";
import Header from "../../components/Header/Header";
import { useData } from "../../context/DataContext";
import { CiClock2 } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaRupeeSign } from "react-icons/fa";
import SpeakerCard from "../../components/SpeakerCard/SpeakerCard";
import { useRef } from "react";

const EventDetails = () => {
  const params = useParams();
  const ref = useRef();

  const {
    data: { meetData },
    dispatch,
  } = useData();

  const selectedMeet = meetData.find((meet) => meet.id == params.id);

  const {
    id,
    title,
    eventStartTime,
    eventEndTime,
    location,
    address,
    eventThumbnail,
    eventDescription,
    hostedBy,
    eventType,
    isPaid,
    eventTags,
    speakers,
    price,
    additionalInformation,
    isRVPS,
  } = selectedMeet;

  function handleRSVP(id) {
    dispatch({ type: "RSVP", payload: id });
  }

  return (
    <div>
      <Header />
      <div className={styles.mainCont}>
        <main className={styles.detailsMain}>
          <NavLink to="/">Back</NavLink>
          <h1>{title}</h1>
          <div>
            <p>Hosted by :</p>
            <h4>{hostedBy}</h4>
          </div>
          <img src={eventThumbnail} alt={title} width={400} />
          <h3>Details</h3>
          <p>{eventDescription}</p>
          <h3>Additional Information</h3>
          <p>Dress code : {additionalInformation.dressCode} </p>
          <p>Age Restrictions : {additionalInformation.ageRestrictions} </p>
          <h3>Event Tags:</h3>
          <div>
            {eventTags.map((tag) => (
              <span className={styles.tags}>{tag}</span>
            ))}
          </div>
        </main>
        <aside>
          <div className={styles.asideTime}>
            <div className={styles.asideFlex}>
              <div>
                <CiClock2 />
              </div>
              <div>
                {eventStartTime} to {eventEndTime}
              </div>
            </div>
            <div className={styles.asideFlex}>
              <div>
                <CiLocationOn />
              </div>
              <div>
                {location}
                {address}
              </div>
            </div>
            <div className={styles.asideFlex}>
              <div>
                <FaRupeeSign />
              </div>
              <div>{price}</div>
            </div>
          </div>
          <div className={styles.speakers}>
            <h2>Speakers: ({speakers.length})</h2>
          </div>
          <div className={styles.speakersCont}>
            {speakers.map((speaker) => (
              <SpeakerCard speaker={speaker} />
            ))}
          </div>
          <div className={styles.rsvp}>
            <button onClick={() => ref.current.showModal()}>RSVP</button>
          </div>
        </aside>
      </div>
      <dialog className={styles.modal} ref={ref}>
        <form method="dialog">
          <h1>Conplete your RSVP</h1>
          <p>Fill in your personal information</p>
          <div>
            <label>Name</label>
            <input type="text" />
          </div>
          <div>
            <label>Email</label>
            <input type="email" />
          </div>
          {isPaid && <p>* You have to make payment at venue.</p>}
          <button>RSVP</button>
          <button>Close</button>
        </form>
      </dialog>
    </div>
  );
};

export default EventDetails;
