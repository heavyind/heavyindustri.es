import axios from "axios";


export const setLanguage = function (language) {
  axios.post("/options/language", { language }) ;
};

export const setAcceptCookies = (acceptCookies) => {
  axios.post("/options/acceptCookies", { acceptCookies });
};

