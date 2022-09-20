import styled from "styled-components";

/* eslint-disable import/prefer-default-export */
export const StyledHouseArticle = styled.article`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  justify-content: center;
  .house-icon {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: red;
    margin-left: auto;
    position: relative;

    .icon {
      border-radius: 50%;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;
