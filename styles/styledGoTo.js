import styled from "styled-components";

export const Section = styled.section`
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  margin: 2rem 0;
  max-width: 1400px;

  @media (max-width: 830px) {
    & {
      flex-direction: column;
      align-items: center;
    }
  }

  article {
    width: 300px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    @media (max-width: 830px) {
      & {
        align-items: center;
        width: 100%;
      }
    }
  }

  span {
    color: ${(props) => props.theme.lightGray};
    text-transform: uppercase;
  }

  h2 {
    font-size: 2rem;
    font-weight: 500;
    margin: 0.3rem 0;
    color: ${(props) => props.theme.lightDark};
  }

  p {
    color: rgb(78, 78, 78);
    font-size: 1.2rem;
  }
`;
export const ImageContainer = styled.div`
  width: 500px;
  height: 300px;
  background-color: red;
  position: relative;
  @media (max-width: 540px) {
    & {
      width: 100%;
    }
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledLink = styled.a`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1.2rem;
  font-weight: 400;
  width: max-content;
  cursor: pointer;
  background-color: ${(props) => props.theme.mediumGray};
`;
