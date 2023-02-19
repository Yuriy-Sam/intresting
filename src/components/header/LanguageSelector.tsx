import { Button, ButtonGroup } from "@mui/material";
import React, { useEffect } from "react";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import languages from "../../languages/languages.json";

i18n.use(initReactI18next).init({
  resources: languages,
  lng: "uk",
  fallbackLng: "uk",
  interpolation: {
    escapeValue: false,
  },
});

function LanguageSelector() {
  //   const { t } = useTranslation();
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  //   i18n.on("languageChanged", (lng) => {
  //     localStorage.setItem("language", lng);
  //   });

  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
    >
      <Button onClick={() => changeLanguage("uk")}>UK</Button>
      <Button onClick={() => changeLanguage("en")}>EN</Button>
    </ButtonGroup>
  );
}

export default LanguageSelector;
