/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";
import { Section } from "../styles/styledBigSectionHouses";
import { HouseArticle } from "./HouseArticle";

export default function BigSectionHouses({ houseContent }) {
  console.log(houseContent);
  return (
    <Section>
      {houseContent?.map((house, index) => (
        <HouseArticle key={index} housesData={house} />
      ))}
    </Section>
  );
}
