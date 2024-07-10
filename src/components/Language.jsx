import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import i18n from "../i18n/i18n";

const LanguageSelector = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language); // i18n.language contains the language assigned to lng in i18n.js file.
  const { t } = useTranslation();


  const chooseLanguage = (e) => {
    e.preventDefault();
    i18n.changeLanguage(e.target.value); // i18n.changeLanguage() is used to change the language assigned to lng in i18n.js file.
    setSelectedLanguage(e.target.value);
  };

  return (
    <div className="">
      <form className="max-w-sm mx-auto">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-white dark:text-white"
        >
          {t("select")}
        </label>
        <select
          id="countries"
          defaultValue={selectedLanguage}
          onChange={chooseLanguage}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          {/* <option selected>Choose a country</option> */}
          <option value="ar">عربي</option>
          <option value="en">English</option>
          <option value="it">italiano</option>
          {/* <option value="es">spanich</option> */}
        </select>
      </form>
    </div>
  );
};

export default LanguageSelector;
