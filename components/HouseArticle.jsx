/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
import { MdVerified as VerifiedIcon } from "react-icons/md";
import Link from "next/link";
import { StyledImage } from "../styles/styledSixHousesSection";

import { StyledHouseArticle } from "../styles/styledHouseArticle";

// eslint-disable-next-line import/prefer-default-export
export function HouseArticle({ housesData }) {
  const { url: imageUrl } = housesData?.coverPhoto || "";
  const price = `${housesData?.price}${
    housesData.rentFrequency === null ? "" : `/${housesData.rentFrequency}`
  }`;
  const isVerified = housesData?.isVerified;
  const {
    logo: { url: logoUrl },
  } = housesData?.agency || "";
  const area = housesData?.area;
  const baths = housesData?.baths;
  const rooms = housesData?.rooms;
  const title = housesData?.title.substring(0, 40);

  return (
    <Link href={`/property/${housesData?.externalID}`}>
      <StyledHouseArticle>
        <StyledImage>
          <img src={imageUrl} alt="" />
        </StyledImage>
        <div className="house-price-wrapper">
          <span>{isVerified && <VerifiedIcon />}</span>
          <h2>AED {price}</h2>
          <span className="house-icon">
            <img className="icon" src={logoUrl} alt="" />
          </span>
        </div>
        <div className="house-info-wrapper">
          {rooms} <span>icon</span> | {baths} <span>icon</span> |{" "}
          {area?.toFixed(1)} sqft <span>icon</span>
        </div>
        <div className="house-description">{title} ...</div>
      </StyledHouseArticle>
    </Link>
  );
}
