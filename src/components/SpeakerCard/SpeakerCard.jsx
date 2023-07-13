import styles from "./SpeakerCard.module.css";

const SpeakerCard = ({ speaker }) => {
  const { designation, image, name } = speaker;
  return (
    <div className={styles.cardSpeaker}>
      <img src={image} alt={name} width={50} height={50} />
      <h4>{name}</h4>
      <p>{designation}</p>
    </div>
  );
};

export default SpeakerCard;
