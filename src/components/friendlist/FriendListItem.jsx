import styles from "./FriendList.module.css";

function FriendListItem({ isOnline, avatar, name }) {
  return (
    <li className={styles.item}>
      {isOnline === false ? (
        <span className={styles.status}>{isOnline}</span>
      ) : (
        <span className={styles.statusRed}>{isOnline} </span>
      )}

      <img
        className={styles.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default FriendListItem;
