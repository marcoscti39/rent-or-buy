import axios from "axios";

const options = {
  method: "GET",
  url: "https://bayut.p.rapidapi.com/properties/list",
  params: {
    locationExternalIDs: "5002,6020",
    purpose: "for-rent",
    hitsPerPage: "14",
    page: "0",
    lang: "en",
    sort: "",
    rentFrequency: "",
    categoryExternalID: "",
  },
  headers: {
    "X-RapidAPI-Key": "25a3ca9afemsh7f33bed2ab12277p195283jsn4ff872673d2e",
    "X-RapidAPI-Host": "bayut.p.rapidapi.com",
  },
};

const fetchData = async () => {
  const response = await axios.request(options);
  return response.data;
};

export default fetchData;
