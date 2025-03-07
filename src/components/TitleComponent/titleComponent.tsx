import { FC } from "react";
import styles from "./titleComponent.module.css";

type TitleComponentProps = {
  text: string;
};

const TitleComponent: FC<TitleComponentProps> = ({ text }) => {
  return <h2 className={styles["titleComponent"]}>{text}</h2>;
};

export default TitleComponent;
