import { FC } from "react";
import styles from "./buttonComponent.module.css";

type ButtonComponentProps = {
  textButton: string;
  icon?: string;
  onClick?: () => void;
  width?: string;
  isWide?: boolean;
  funcButton?: boolean;
  magicButton?: boolean;
};

const ButtonComponent: FC<ButtonComponentProps> = ({
  textButton,
  onClick,
  icon,
  width,
  isWide,
  funcButton,
  magicButton = false,
}) => {
  return (
    <button
      className={`${styles["textButton"]} ${
        isWide ? styles["textButton__wide"] : ""
      } ${
        !magicButton
          ? funcButton
            ? styles["textButton__func"]
            : styles["textButton__funcActive"]
          : ""
      } `}
      style={{ width: width }}
      onClick={onClick}
    >
      {icon && <img className={styles["textButton__icon"]} src={icon} />}
      {textButton}
    </button>
  );
};

export default ButtonComponent;
