/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React from "react";

import { Section } from "../styles/styledSixHousesSection";
import { HouseArticle } from "./HouseArticle";

export default function SixHousesSection({ housesData }) {
  return (
    <Section>
      {housesData?.map((houseData, index) => (
        <HouseArticle key={index} housesData={houseData} />
      ))}
    </Section>
  );
}
