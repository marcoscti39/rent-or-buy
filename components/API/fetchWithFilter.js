import axios from "axios";

const allParams = {
  locationExternalIDs: "5002,6020",
  hitsPerPage: "25",
  page: "0",
  lang: "en",
};
//

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchDataWithFilter = async (paramsChosen) => {
  const paramsOverridden = { ...allParams, ...paramsChosen };

  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/list",
    params: paramsOverridden,
    headers: {
      "X-RapidAPI-Key": "25a3ca9afemsh7f33bed2ab12277p195283jsn4ff872673d2e",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };

  return paramsOverridden;
  // const response = await axios.request(options);
  // return response.data;
};

export default fetchDataWithFilter;
