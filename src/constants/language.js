const detectLanguage = () => {
  if (typeof navigator === "undefined") return "en";
  var userLang = navigator.language || navigator.userLanguage;
  console.log("userLang:", userLang);
  if (userLang.startsWith("nl")) {
    return "nl";
  }
  return "en";
};

export default detectLanguage;
