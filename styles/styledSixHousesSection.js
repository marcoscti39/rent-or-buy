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

  h2 {
    margin: 0;
    font-size: 1.3rem;
  }

  .house-info-wrapper {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: ${(props) => props.theme.lightBlue};
  }
`;
export const StyledImage = styled.div`
  position: relative;
  width: 380px;
  height: 247px;
  background-color: red;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
