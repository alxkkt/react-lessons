import styles from "./BuyList.module.css";

const BuyList = ({ items, onDelete }) => {
  const elements = items.map(
    ({ name, quantity, price, urgency, type, id, deleted }, index) => {
      return (
        <li key={id} className={styles.listItem}>
          <p className={deleted ? styles.cross : styles.itemDescr}>
            name: {name}
          </p>
          <p className={deleted ? styles.cross : styles.itemDescr}>
            {quantity} pcs
          </p>
          <p className={deleted ? styles.cross : styles.itemDescr}>
            {price} credits
          </p>
          <p className={deleted ? styles.cross : styles.itemDescr}>
            urgent: {urgency ? "Срочно" : "не срочно"}
          </p>
          <p className={deleted ? styles.cross : styles.itemDescr}>
            type: {type}
          </p>
          <button type="button" onClick={() => onDelete(index)}>
            Удалить
          </button>
        </li>
      );
    }
  );
  return <ul className={styles.itemList}>{elements}</ul>;
};

export default BuyList;
