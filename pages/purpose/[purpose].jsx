/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import BigSectionHouses from "../../components/BigSectionHouses";
import Footer from "../../components/Footer";
import {
  baseUrl,
  fetchDataWithFilter,
} from "../../components/API/fetchWithFilter";
// await fetchDataWithFilter(context.params);

export async function getServerSideProps({ query }) {
  console.log(query);
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchDataWithFilter(
    `${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );
  console.log(data);

  return {
    props: {
      houseContent: data.hits,
    },
  };
}

export default function Purpose({ houseContent }) {
  return (
    <>
      <Header />
      <Filter />
      <h1>Properties </h1>
      <BigSectionHouses houseContent={houseContent} />
      <Footer />
    </>
  );
}
