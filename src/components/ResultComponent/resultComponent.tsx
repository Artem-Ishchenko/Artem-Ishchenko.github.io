import { FC } from "react";
import style from "./resultComponent.module.css";
import { AllData } from "../../types/types";
import { calculateRoomWallpaper } from "../../calculators/wallpaperCalculator";

type ResultItem = {
  id: number;
  result: number;
  name: string;
};

type ResultComponentProps = {
  data: AllData | null;
  onReset: () => void;
};

const ResultComponent: FC<ResultComponentProps> = ({ data, onReset }) => {
  if (!data) {
    return <div></div>;
  }
  const calculatedResults = calculateRoomWallpaper(data);
  const resArray: ResultItem[] = [
    {
      id: 1,
      result: calculatedResults.rollsNeeded,
      name: "Кол-во рулонов",
    },
    {
      id: 2,
      result: calculatedResults.wallpaperArea,
      name: "Кол-во m2 обоев",
    },
    {
      id: 3,
      result: calculatedResults.totalArea,
      name: "Площадь оклейки",
    },
  ];
  const elemList = resArray.map((item) => {
    return (
      <div key={item.id} className={style["resultComponent__item"]}>
        <h2 className={style["resultComponent__h2"]}>
          {item.result} {item.id != 1 && "м2"}
        </h2>
        <p className={style["resultComponent__paragraph"]}>{item.name}</p>
      </div>
    );
  });

  return (
    <div className={style["resultComponent"]}>
      <h1 className={style["resultComponent__h1"]}>Результаты</h1>
      <div className={style["resultComponent__main"]}>{elemList}</div>
      <div className={style["resultComponent__buttonAll"]}>
        <button
          className={style["resultComponent__button-one"]}
          onClick={onReset}
        >
          Сбросить параметры
        </button>
        <button className={style["resultComponent__button-two"]}>
          Перейти в каталог
        </button>
      </div>
    </div>
  );
};

export default ResultComponent;
