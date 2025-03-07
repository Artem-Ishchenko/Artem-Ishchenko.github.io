import { FC, useState } from "react";
import style from "./App.module.css";
import WelcomeCard from "../WelcomeCard/welcomeCard";
import MainCard from "../MainCard";

const App: FC = () => {
  const [newPage, setNewPage] = useState(false);

  const handleClick = () => {
    setNewPage((prev) => !prev);
  };

  return (
    <div className={style["app"]}>
      {newPage ? (
        <MainCard onClick={handleClick} />
      ) : (
        <WelcomeCard onClick={handleClick} />
      )}
    </div>
  );
};

export default App;
