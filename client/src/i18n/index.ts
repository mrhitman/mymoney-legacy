import ru from "./ru";
import en from "./en";

export const t = (alias: string, lang: string = "en") => {
  switch (lang) {
    case "ru":
      return alias in ru ? ru[alias] : alias;
    case "en":
      return alias in en ? en[alias] : alias;
    default:
      return alias;
  }
};
