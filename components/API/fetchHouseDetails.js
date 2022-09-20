/* eslint-disable import/prefer-default-export */

const axios = require("axios");

export const fetchHouseDetails = async (houseId) => {
  console.log(houseId);
  const options = {
    method: "GET",
    url: "https://bayut.p.rapidapi.com/properties/detail",
    params: { externalID: houseId },
    headers: {
      "X-RapidAPI-Key": "25a3ca9afemsh7f33bed2ab12277p195283jsn4ff872673d2e",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  };
  console.log(options);
  const response = await axios.request(options);
  return response.data;
};
