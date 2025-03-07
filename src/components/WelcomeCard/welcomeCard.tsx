import { FC } from "react";
import styles from "./welcomeCard.module.css";
import magicWandIcon from "../../assets/icons/magic-wand.svg";
import ButtonComponent from "../ButtonComponent/buttonComponent";

type WelcomeCardProps = {
  onClick: () => void;
};

const WelcomeCard: FC<WelcomeCardProps> = ({ onClick }) => {
  const textH1 = "Калькулятор обоев";
  const textP =
    "Онлайн-калькулятор расчета обоев по поможет вам определить число рулонов, требуемых для оклеивания, с учетом окон и дверей. Чтобы получить точные результаты, просто укажите параметры помещения и размеры в специальной таблице. Наша программа также берет в учет повторение рисунка (раппорт), что позволяет оптимизировать расходы на материалы и клей.";
  const textButton = "Начать расчет материалов";

  return (
    <div className={styles["welcomeCard"]}>
      <h1 className={styles["welcomeCard__textH1"]}>{textH1}</h1>
      <p className={styles["welcomeCard__textP"]}>{textP}</p>
      <ButtonComponent
        textButton={textButton}
        onClick={onClick}
        icon={magicWandIcon}
        isWide={true}
        magicButton={true}
      />
    </div>
  );
};

export default WelcomeCard;
