/* eslint-disable react/prop-types */
import React from "react";
import fetchData from "../components/API/fetch";
import Footer from "../components/Footer";
import GoTo from "../components/GoTo";
import Header from "../components/Header";
import SixHousesSection from "../components/SixHousesSection";

export async function getServerSideProps() {
  const { hits } = await fetchData();
  const firstHalf = hits.filter((item, index) => {
    if (index > 1 && index <= 7) {
      return item;
    }
  });
  const secondHalf = hits.filter((item, index) => {
    if (index > 7) {
      return item;
    }
  });

  return {
    props: {
      goToImg1: hits[0],
      goToImg2: hits[1],
      firstHalf,
      secondHalf,
    },
  };
}

export default function Home({ firstHalf, secondHalf, goToImg1, goToImg2 }) {
  return (
    <>
      <Header />
      <GoTo
        propose="rent a home"
        title="Rental Homes for Everyone"
        text="Explore Apartments, Villas, Homes and more"
        btnTxt="Explore Renting"
        img={goToImg1}
        path="for-rent"
      />
      <SixHousesSection housesData={firstHalf} />

      <GoTo
        propose="buy a home"
        title="Find, Buy & Own Your
        Dream Home"
        text="Explore from Apartments, land, builder floors,
        villas and more"
        btnTxt="Explore Buying"
        img={goToImg2}
        path="for-sale"
      />

      <SixHousesSection housesData={secondHalf} />
      <Footer />
    </>
  );
}
