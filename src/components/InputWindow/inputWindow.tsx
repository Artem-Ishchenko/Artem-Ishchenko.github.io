import { FC } from "react";
import style from "./inputWindow.module.css";
import CloseComponent from "../CloseComponent";
import SideComponent from "../SideComponent";

type ComponentData = {
  id: string;
  input1: string;
  input2: string;
};

type InputWindowProps = {
  onDelete: (id: string) => void;
  text: string;
  components: ComponentData[];
  onInputChange: (id: string, inputId: string, value: string) => void;
};

const InputWindow: FC<InputWindowProps> = ({
  text,
  onDelete,
  components,
  onInputChange,
}) => {
  return (
    <>
      {components.map((component) => (
        <div key={component.id} className={style["inputWindow"]}>
          <div className={style["inputWindow__header"]}>
            <h3 className={style["inputWindow__h3"]}>{text}</h3>
            <CloseComponent
              onClick={() => onDelete(component.id)}
              top="-4px"
              right="0px"
            />
          </div>
          <div className={style["inputWindow__footer"]}>
            <SideComponent
              text="Высота м"
              placeholder="0"
              id={component.id + "-input1"}
              value={component.input1}
              onChange={(value) => onInputChange(component.id, "input1", value)}
            />
            <SideComponent
              text="Ширина м"
              placeholder="0"
              id={component.id + "-input2"}
              value={component.input2}
              onChange={(value) => onInputChange(component.id, "input2", value)}
            />
          </div>
        </div>
      ))}
    </>
  );
};

export default InputWindow;
