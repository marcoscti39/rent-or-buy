/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, 380px);
  gap: 1rem;
  justify-content: center;
  max-width: 1400px;
  .house-price-wrapper {
    display: flex;
    align-items: center;
  }
`;
