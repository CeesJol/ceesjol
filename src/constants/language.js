const detectLanguage = () => {
  if (typeof navigator === "undefined" || !navigator) return "nl";
  var userLang = navigator.language || navigator.userLanguage;
  console.log("userLang:", userLang);
  if (userLang.startsWith("en")) {
    return "en";
  }
  return "nl";
};

export default detectLanguage;
