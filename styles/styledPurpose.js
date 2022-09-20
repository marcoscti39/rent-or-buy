/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const FilterSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  background-color: ${(props) => props.theme.mediumGray};
  button {
    border: none;

    border-bottom: black solid 1px;
    margin: 0;
    padding: 1rem 0;
    font-size: 1.5rem;
    cursor: pointer;
    background-color: inherit;
  }
  .filter-wrapper {
    display: none;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
    margin-top: 1rem;
    padding: 1.5rem;
  }

  .show {
    display: flex;
  }
`;

export const StyledSelectFilter = styled.select`
  padding: 0.5rem;
  background-color: inherit;
  font-size: 1.1rem;
  border-radius: 5px;
  option {
    background-color: inherit;
  }
`;
