/* eslint-disable import/prefer-default-export */
import styled from "styled-components";

export const StyledFooter = styled.footer`
  width: 100%;
  margin-top: 2rem;
  .footer-container {
    display: flex;
    justify-content: center;
    border-top: ${(props) => props.theme.lightGray} solid 1px;
    padding: 0.8rem 0;
  }

  p {
    color: rgb(121, 121, 121);
  }
`;
