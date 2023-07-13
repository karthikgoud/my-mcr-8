import styles from "./MeetCard.module.css";

const MeetCard = ({ meet }) => {
  //   console.log(meet);
  const { eventThumbnail, id, title, eventStartTime, eventType } = meet;
  return (
    <div className={styles.cardCont}>
      <img src={eventThumbnail} alt={title} width={200} height={200} />
      <p>{eventStartTime}</p>
      <h3>{title}</h3>
      <span>{eventType} Event</span>
    </div>
  );
};

export default MeetCard;
