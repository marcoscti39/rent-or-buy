/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const SectionHouseDeatails = styled.section`
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: auto;

  .house-price-wrapper {
    display: flex;
    align-items: center;
    margin-top: 1rem;

    .img-icon {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      background-color: red;
      object-fit: cover;
      margin-left: auto;
    }
  }
  .house-info-wrapper {
    display: flex;
    gap: 1rem;
    color: ${(props) => props.theme.lightBlue};
  }

  .house-title {
    margin: 1.3rem 0;
    font-size: 1.3rem;
  }

  .house-text {
    margin: 0;
    line-height: 1.4rem;
  }

  .amentities {
    margin-top: 2rem;
    .amentities-wrapper {
      display: flex;
      flex-wrap: wrap;
      gap: 1rem;
    }
    .tag {
      padding: 0.7rem;
      border-radius: 5px;
      color: ${(props) => props.theme.lightBlue};
      font-weight: 600;
      background-color: ${(props) => props.theme.desaturadedBlue};
    }
  }
`;

export const Table = styled.table`
  border: 1px black solid;
  margin-top: 2rem;

  th {
    padding: 0.5rem 0;
  }

  td {
    text-align: center;
    padding: 0.5rem 0;
  }
`;

export const CarouselContainer = styled.div`
  overflow-x: hidden;

  background-color: red;
  width: 100%;
  height: 451px;
  margin-top: 1rem;

  .carousel {
    display: flex;
    width: 100%;
    height: 100%;
    transition: all 300ms;
  }

  .carousel-img {
    flex-shrink: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .img1 {
    background-color: green;
  }
  .img2 {
    background-color: blue;
  }
  .img3 {
    background-color: yellow;
  }
  .img4 {
    background-color: pink;
  }
  .img5 {
    background-color: orange;
  }
`;

export const ArrowWrapper = styled.div`
  position: relative;
  .arrow-left,
  .arrow-right {
    position: absolute;
    width: 30px;
    height: 30px;
    color: white;
    background-color: black;
    border-radius: 50%;
    z-index: 10;
    bottom: 50%;
    border: none;
    cursor: pointer;
  }

  .arrow-left {
    left: -40px;
  }

  .arrow-right {
    right: -40px;
  }
`;
