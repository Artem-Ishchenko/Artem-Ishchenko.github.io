import { FC } from "react";
import styles from "./closeComponent.module.css";

type CloseComponentProps = {
  top?: string;
  right?: string;
  onClick?: () => void;
};

const CloseComponent: FC<CloseComponentProps> = ({ top, right, onClick }) => {
  return (
    <div
      className={styles["closeComponent"]}
      style={{ top: top, right: right }}
    >
      <button
        onClick={onClick}
        className={styles["closeComponent__btn"]}
      ></button>
    </div>
  );
};

export default CloseComponent;
