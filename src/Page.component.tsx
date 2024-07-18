import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const Pagecompo = () => {
  const { t, i18n } = useTranslation();
  const [selectOption, setSelectOption] = useState<string>("en");
  const langs = ["english", "hindi", "assamese", "russian", "spanish"];

  // const languageMap: Record<string, string> = {
  //   "english": "en",
  //   "hindi": "hn",
  //   "assamese": "as",
  //   "russian": "ru",
  //   "spanish": "es"
  // };
  const handlelang = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedLanguage:string = event.target.value;
    //  const languageCode = languageMap[selectedLanguage];
    // setSelectOption(languageCode);
    // i18n.changeLanguage(languageCode);
    setSelectOption(selectedLanguage);
    i18n.changeLanguage(selectedLanguage);
  };
  return (
    <div>
      <select value={selectOption} onChange={handlelang}>
        <option value="">Select an option</option>
        {langs.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectOption && <p>Selected: {selectOption}</p>}
      <h2>{t("welcome")}</h2>
      <p>{t("hi")}</p>
    </div>
  );
};

export default Pagecompo;
