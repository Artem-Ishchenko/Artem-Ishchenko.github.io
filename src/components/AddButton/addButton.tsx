import { FC } from "react";
import iconAdd from "../../assets/icons/Vector.svg";
import styles from "./addButton.module.css";

type AddButtonProps = {
  text: string;
  onClick?: () => void;
};

const AddButton: FC<AddButtonProps> = ({ text, onClick }) => {
  return (
    <button className={styles["addButton"]} onClick={onClick}>
      <div className={styles["addButton__circle"]}>
        <img className={styles["addButton__icon"]} src={iconAdd} />
      </div>
      <p className={styles["addButton__paragraph"]}>{text}</p>
    </button>
  );
};

export default AddButton;
