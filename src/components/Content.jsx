import React from "react";
import { useTranslation } from "react-i18next";

function Contant() {
  const { t } = useTranslation();

  return (
    <div className=" flex items-center justify-center m-10">
      <div>
        <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-white md:text-5xl lg:text-6xl dark:text-white text-center">
          MID-END | MET
        </h1>
        <p className="mb-6 text-lg font-normal text-white lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400 text-center">
          {t("title")}
        </p>

        <div className="flex items-center justify-center">
          <a
            href="https://www.linkedin.com/company/midend-tech/about/"
            target="_blank"
            className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900 "
          >
            {t("more")}
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contant;
