export const DEFAULT_LANGUAGE = "en";
export const SECOND_LANGAUGE = "nl";

const detectLanguage = () => {
  // Find user language
  if (typeof navigator === "undefined" || !navigator) return DEFAULT_LANGUAGE;
  var userLang = navigator.language || navigator.userLanguage;
  if (!userLang) return DEFAULT_LANGUAGE;

  // Return proper language
  if (userLang.toLowerCase().startsWith(SECOND_LANGAUGE)) {
    return SECOND_LANGAUGE;
  }
  return DEFAULT_LANGUAGE;
};

export default detectLanguage;
