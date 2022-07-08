import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Home() {
  const [t, i18n] = useTranslation('global');
  
  return (
    <div>
      <h1>{t("header.hello-world")}</h1>

      <br/>
      <button onClick={()=>i18n.changeLanguage('en')}>en</button>
      <br/>
      <button onClick={()=>i18n.changeLanguage('es')}>esp</button>
      <br/>
      <br/>

      <Link to="/About">ir a test</Link>
    </div>
  );
}
