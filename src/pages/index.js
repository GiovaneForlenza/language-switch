import i18n, {
  switchLanguage,
  TRANSLATION_KEYS,
  LANGUAGES,
  activeLanguage,
} from "@/utils/i18next";
import { t } from "i18next";

export default function Home() {
  return (
    <div className="wrapper">
      <div className="flags">
        <div
          className={`br ${activeLanguage === LANGUAGES.EN ? "grayscale" : ""}`}
          onClick={() => i18n.changeLanguage('pt-BR')}
        >
          <img src="./photos/brazil.png" alt="brazil flag" />
        </div>
        <div
          className={`usa ${
            activeLanguage === LANGUAGES.PT ? "grayscale" : ""
          }`}
          onClick={() => i18n.changeLanguage('en')}
        >
          <img src="./photos/usa.png" alt="usa flag" />
        </div>
      </div>
      <h1>{t(TRANSLATION_KEYS.WELCOME_MESSAGE)}</h1>
    </div>
  );
}
