/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import Header from "../../components/Header";
import Filter from "../../components/Filter";
import BigSectionHouses from "../../components/BigSectionHouses";
import Footer from "../../components/Footer";
import { fetchDataWithFilter } from "../../components/API/fetchWithFilter";
// await fetchDataWithFilter(context.params);

export async function getServerSideProps(context) {
  const houseContent = [];

  return {
    props: {
      houseContent,
      purpose: context.params,
    },
  };
}

export default function Purpose({
  houseContent: { hits },
  purpose: { purpose },
}) {
  const [houseContentFiltered, setHouseContentFiltered] = React.useState(hits);
  return (
    <>
      <Header />
      <Filter setHouseContentFiltered={setHouseContentFiltered} />
      <h1>Properties {purpose} </h1>
      <BigSectionHouses houseContent={houseContentFiltered} />
      <Footer />
    </>
  );
}
