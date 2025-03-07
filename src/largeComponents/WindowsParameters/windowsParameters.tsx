import { FC } from "react";
import style from "./windowsParameters.module.css";
import TitleComponent from "../../components/TitleComponent";
import AddButton from "../../components/AddButton";
import InputWindow from "../../components/InputWindow";

type ComponentData = {
  id: string;
  input1: string;
  input2: string;
};

type WindowsParametersProps = {
  title: string;
  textButton: string;
  textInput: string;
  components: ComponentData[];
  onAdd: () => void;
  onDelete: (id: string) => void;
  onInputChange: (id: string, inputId: string, value: string) => void;
};

const WindowsParameters: FC<WindowsParametersProps> = ({
  title,
  textButton,
  textInput,
  components,
  onAdd,
  onDelete,
  onInputChange,
}) => {
  return (
    <div className={style["windowsParameters"]}>
      <TitleComponent text={title} />
      <div className={style["windowsParameters__windowsList"]}>
        {components.map((component) => (
          <div
            key={component.id}
            className={style["windowsParameters__windowsList-item"]}
          >
            <InputWindow
              components={[component]}
              onDelete={onDelete}
              onInputChange={onInputChange}
              text={textInput}
            />
          </div>
        ))}
        <AddButton text={`Добавить ${textButton}`} onClick={onAdd} />
      </div>
    </div>
  );
};

export default WindowsParameters;
