const detectLanguage = () => {
  var userLang = navigator.language || navigator.userLanguage;
  console.log("userLang:", userLang);
  if (userLang.startsWith("nl")) {
    return "nl";
  }
  return "en";
};

export default detectLanguage;
