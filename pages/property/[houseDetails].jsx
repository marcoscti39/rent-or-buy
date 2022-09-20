/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useRef } from "react";
import { MdVerified as VerifiedIcon } from "react-icons/md";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import {
  SectionHouseDeatails,
  Table,
  CarouselContainer,
  ArrowWrapper,
} from "../../styles/styledDetails";

import { fetchHouseDetails } from "../../components/API/fetchHouseDetails";

export async function getServerSideProps(context) {
  const data = await fetchHouseDetails(context.params.houseDetails);
  return {
    props: {
      houseDetailsData: data,
    },
  };
}

export default function HouseDetails({ houseDetailsData }) {
  console.log(houseDetailsData);
  const carouselElement = useRef(null);
  const [carouselProgress, setCarouselProgress] = React.useState(0);

  const photos = houseDetailsData?.photos;
  const rentFrequency = houseDetailsData?.rentFrequency;
  const price = houseDetailsData?.price;
  const isVerified = houseDetailsData?.isVerified;
  const icon = houseDetailsData?.agency?.logo?.url;
  const rooms = houseDetailsData?.rooms;
  const baths = houseDetailsData?.baths;
  const area = houseDetailsData?.area?.toFixed(1);
  const description = houseDetailsData?.description;
  const title = houseDetailsData?.title;
  const furnishingStatus = houseDetailsData.furnishingStatus || "--";
  const purpose = houseDetailsData.purpose || "--";
  const type = houseDetailsData.type || "--";
  const amenities = houseDetailsData.amenities || [
    { amenities: [{ text: "No amenities" }] },
  ];

  const carouselMaxLength = (photos.length - 1) * -1;

  React.useEffect(() => {
    carouselElement.current.style.transform = `translateX(${
      carouselProgress * 100
    }%)`;
  }, [carouselProgress]);
  return (
    <>
      <Header />
      <SectionHouseDeatails>
        <ArrowWrapper>
          <button
            className="arrow-left"
            type="button"
            onClick={() =>
              setCarouselProgress(
                carouselProgress === 0 ? 0 : carouselProgress + 1
              )
            }
          />

          <CarouselContainer>
            <div ref={carouselElement} className="carousel">
              {photos?.map((photo, index) => {
                const { url } = photo;
                return (
                  <img
                    key={index}
                    className="carousel-img img1"
                    src={url}
                    alt=""
                  />
                );
              })}
            </div>
          </CarouselContainer>
          <button
            className="arrow-right"
            type="button"
            onClick={() =>
              setCarouselProgress(
                carouselProgress === carouselMaxLength
                  ? carouselMaxLength
                  : carouselProgress - 1
              )
            }
          />
        </ArrowWrapper>

        <div className="house-price-wrapper">
          <span>{isVerified && <VerifiedIcon />}</span> AED {price}/
          {rentFrequency} <img className="img-icon" src={icon} alt="" />
        </div>
        <div className="house-info-wrapper">
          {rooms} icon | {baths} icon | {area} sqft icon
        </div>

        <h1 className="house-title">{title}</h1>

        <p className="house-text">{description}</p>

        <Table>
          <thead>
            <tr>
              <th>Type</th>
              <th>Purpose</th>
              <th>Furnishing Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{type}</td>
              <td>{purpose}</td>
              <td>{furnishingStatus}</td>
            </tr>
          </tbody>
        </Table>

        <div className="amentities">
          <h2>Amenities</h2>
          <div className="amentities-wrapper">
            {amenities?.map((amenity) => {
              const { amenities: realAmenities } = amenity;
              return realAmenities?.map((realAmenity, index) => (
                <div key={index} className="tag">
                  {realAmenity.text}
                </div>
              ));
            })}
          </div>
        </div>
      </SectionHouseDeatails>
      <Footer />
    </>
  );
}
