import Language from "./components/Language";
import Content from "./components/Content";
import Connect from "./components/Connect";

import { useTranslation } from "react-i18next";

function App() {

  const {t} = useTranslation();

  return (
    <div className="bg-gradient-to-b from-Blue to-lightBlue" dir={t("dir")}>
      <Language />
      <Content />
      <Connect />
    </div>
  );
}

export default App;
