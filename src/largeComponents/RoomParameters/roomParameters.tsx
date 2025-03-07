import { FC } from "react";
import style from "./roomParameters.module.css";
import TitleComponent from "../../components/TitleComponent";
import SideComponent from "../../components/SideComponent";

type RoomParametersProps = {
  input1: string;
  input2: string;
  input3: string;
  handleInputChange: (id: string, inputId: string, value: string) => void;
};

const RoomParameters: FC<RoomParametersProps> = ({
  input1,
  input2,
  input3,
  handleInputChange,
}) => {
  return (
    <div className={style["roomParameters"]}>
      <TitleComponent text="Параметры комнаты" />
      <div className={style["roomParameters__room"]}>
        <SideComponent
          id="input1"
          value={input1}
          onChange={(value) => handleInputChange("input1", "input1", value)}
          text="Длина м"
        />
        <SideComponent
          id="input2"
          value={input2}
          onChange={(value) => handleInputChange("input2", "input2", value)}
          text="Ширина м"
        />
        <SideComponent
          id="input3"
          value={input3}
          onChange={(value) => handleInputChange("input3", "input3", value)}
          text="Высота м"
        />
      </div>
    </div>
  );
};

export default RoomParameters;
