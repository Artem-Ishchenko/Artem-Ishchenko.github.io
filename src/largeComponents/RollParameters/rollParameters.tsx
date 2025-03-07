import { FC } from "react";
import style from "./rollParameters.module.css";
import TitleComponent from "../../components/TitleComponent";
import ButtonComponent from "../../components/ButtonComponent";

type Btn = {
  value: number;
  textButton: string;
  id: string;
};

type RollParametersProps = {
  rollOption: number;
  rapOption: number;
  onRollOptionChange: (value: number) => void;
  onRapOptionChange: (value: number) => void;
};

const RollParameters: FC<RollParametersProps> = ({
  rollOption,
  rapOption,
  onRapOptionChange,
  onRollOptionChange,
}) => {
  const buttonsRoll: Btn[] = [
    { value: 10, textButton: "1.06 x 10м", id: "10" },
    { value: 25, textButton: "1.06 x 25м", id: "25" },
  ];
  const buttonsRap: Btn[] = [
    { value: 0, textButton: "0", id: "0" },
    { value: 0.32, textButton: "0.32м", id: "032" },
    { value: 0.64, textButton: "0.64м", id: "064" },
  ];

  const handleButtonRollClick = (buttonValue: number) => {
    onRollOptionChange(buttonValue);
  };
  const handleButtonRapClick = (buttonValue: number) => {
    onRapOptionChange(buttonValue);
  };

  return (
    <div className={style["rollParameters"]}>
      <div className={style["rollParameters__rollItem"]}>
        <TitleComponent text="Параметры рулона" />
        <div className={style["rollParameters__rollItemBtn"]}>
          {buttonsRoll.map((item) => (
            <div
              key={item.value}
              className={style[`rollParameters__rollItemBtn-${item.id}`]}
            >
              <ButtonComponent
                textButton={item.textButton}
                funcButton={rollOption === item.value ? false : true}
                onClick={() => handleButtonRollClick(item.value)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={style["rollParameters__rollItem"]}>
        <TitleComponent text="Раппорт" />
        <div className={style["rollParameters__rollItemBtn"]}>
          {buttonsRap.map((item) => (
            <div
              key={item.value}
              className={style[`rollParameters__rollItemBtn-${item.id}`]}
            >
              <ButtonComponent
                textButton={item.textButton}
                funcButton={rapOption === item.value ? false : true}
                onClick={() => handleButtonRapClick(item.value)}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RollParameters;
