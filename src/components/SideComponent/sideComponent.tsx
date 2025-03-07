import { FC } from "react";
import styles from "./sideComponent.module.css";

type SideComponentProps = {
  text: string;
  width?: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  id: string;
};

const SideComponent: FC<SideComponentProps> = ({
  text,
  placeholder = "6.5",
  width,
  id,
  value,
  onChange,
}) => {
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    if (/^\d*\.?\d{0,1}$/.test(inputValue) && inputValue !== ".") {
      onChange(inputValue);
    }
  };
  return (
    <div className={styles["sideComponent"]} style={{ width: width }}>
      <p className={styles["sideComponent__paragraph"]}>{text}</p>
      <input
        className={styles["sideComponent__input"]}
        id={id}
        type="text"
        inputMode="decimal"
        value={value === "0" ? "" : value}
        onChange={handleInputChange}
        placeholder={placeholder}
      />
    </div>
  );
};

export default SideComponent;
