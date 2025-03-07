import { FC, useState } from "react";
import style from "./mainCard.module.css";
import CloseComponent from "../CloseComponent";
import ButtonComponent from "../ButtonComponent";
import icon from "../../assets/icons/magic-wand.svg";
import RoomParameters from "../../largeComponents/RoomParameters";
import RollParameters from "../../largeComponents/RollParameters";
import WindowsParameters from "../../largeComponents/WindowsParameters";
import ResultComponent from "../ResultComponent";
import { AllData } from "../../types/types";

type MainCardProps = {
  onClick: () => void;
};

const MainCard: FC<MainCardProps> = ({ onClick }) => {
  const [input1, setInput1] = useState<string>("0");
  const [input2, setInput2] = useState<string>("0");
  const [input3, setInput3] = useState<string>("0");

  const [components, setComponents] = useState<
    { id: string; input1: string; input2: string }[]
  >([]);

  const [doorComponents, setDoorComponents] = useState<
    { id: string; input1: string; input2: string }[]
  >([]);

  const [rollOption, setRollOption] = useState<number>(10);
  const [rapOption, setRapOption] = useState<number>(0);

  const [showResult, setShowResult] = useState(false);
  const [allData, setAllData] = useState<AllData | null>(null);

  const handleInputChange = (id: string, inputId: string, value: string) => {
    if (id === "input1") setInput1(value);
    if (id === "input2") setInput2(value);
    if (id === "input3") setInput3(value);
    else {
      setComponents((prev) =>
        prev.map((component) =>
          component.id === id ? { ...component, [inputId]: value } : component
        )
      );
      setDoorComponents((prev) =>
        prev.map((component) =>
          component.id === id ? { ...component, [inputId]: value } : component
        )
      );
    }
  };

  const addComponent = (type: "windows" | "doors") => {
    const newId = crypto.randomUUID();
    const newComponent = { id: newId, input1: "0", input2: "0" };
    if (type === "windows") {
      setComponents((prev) => [...prev, newComponent]);
    } else if (type === "doors") {
      setDoorComponents((prev) => [...prev, newComponent]);
    }
  };

  const deleteComponent = (id: string, type: "windows" | "doors") => {
    if (type === "windows") {
      setComponents((prev) => prev.filter((component) => component.id !== id));
    } else if (type === "doors") {
      setDoorComponents((prev) =>
        prev.filter((component) => component.id !== id)
      );
    }
  };

  const handleSubmit = () => {
    const validRollOption: 10 | 25 =
      rollOption === 10 || rollOption === 25 ? rollOption : 10;

    const validRapOption: 0 | 0.32 | 0.64 = [0, 0.32, 0.64].includes(rapOption)
      ? (rapOption as 0 | 0.32 | 0.64)
      : 0;
    const allData: AllData = {
      glovalLength: parseFloat(input1),
      globalWidth: parseFloat(input2),
      globalHeight: parseFloat(input3),
      rollOption: validRollOption,
      rapOption: validRapOption,
      windows: components.map((component) => ({
        heigth: parseFloat(component.input1),
        width: parseFloat(component.input2),
      })),
      doors: doorComponents.map((component) => ({
        heigth: parseFloat(component.input1),
        width: parseFloat(component.input2),
      })),
    };
    setAllData(allData);
    setShowResult(true);
  };

  const handleReset = () => {
    setInput1("0");
    setInput2("0");
    setInput3("0");
    setComponents([]);
    setDoorComponents([]);
    setRollOption(10);
    setRapOption(0);
    setShowResult(false);
    setAllData(null);
  };

  const handleRollOptionChange = (value: number) => setRollOption(value);
  const handleRapOptionChange = (value: number) => setRapOption(value);

  const handleExitOnWelcome = (reset: () => void, click: () => void): void => {
    reset();
    click();
  };

  return (
    <div className={style["mainCard"]}>
      <CloseComponent
        onClick={() => handleExitOnWelcome(handleReset, onClick)}
      />
      <RoomParameters
        input1={input1}
        input2={input2}
        input3={input3}
        handleInputChange={handleInputChange}
      />
      <RollParameters
        rollOption={rollOption}
        rapOption={rapOption}
        onRapOptionChange={handleRapOptionChange}
        onRollOptionChange={handleRollOptionChange}
      />
      <div className={style["mainCard__list"]}>
        <WindowsParameters
          components={components}
          title={"Параметры окон"}
          textButton="окно"
          textInput="Окно"
          onAdd={() => addComponent("windows")}
          onDelete={(id) => deleteComponent(id, "windows")}
          onInputChange={handleInputChange}
        />
        <WindowsParameters
          components={doorComponents}
          title={"Параметры дверей"}
          textButton="дверь"
          textInput="Дверь"
          onAdd={() => addComponent("doors")}
          onDelete={(id) => deleteComponent(id, "doors")}
          onInputChange={handleInputChange}
        />
      </div>
      <div className={style["mainCard__footer"]}>
        {!showResult ? (
          <div className={style["mainCard__footer-button"]}>
            <ButtonComponent
              onClick={handleSubmit}
              textButton="Рассчитать материалы"
              icon={icon}
              isWide={true}
              magicButton={true}
              width="100%"
            />
          </div>
        ) : (
          <ResultComponent data={allData} onReset={handleReset} />
        )}
      </div>
    </div>
  );
};

export default MainCard;
