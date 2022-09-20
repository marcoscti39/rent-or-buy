import styled from "styled-components";

export const StyledHeader = styled.header``;

export const HeaderWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: rgb(180, 180, 180) solid 1px;
`;

export const Logo = styled.a`
  font-size: 2rem;
  color: ${(props) => props.theme.lightBlue};
  cursor: pointer;
`;

export const MenuButton = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  color: rgb(83, 83, 83);
  cursor: pointer;
`;

export const Menu = styled.div`
  display: ${(props) => (props.isMenuOpen ? "block" : "none")};
  position: absolute;
  right: 0.5rem;
  top: 90%;
  z-index: 10;
  border-radius: 5px;
  padding: 1rem 0;
  border: ${(props) => props.theme.lightGray} solid 1px;
  background-color: white;
  .menu-nav {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .menu-li {
    display: flex;
    gap: 0.5rem;
    padding: 0.4rem 2rem;
    transition: background-color 200ms;
  }

  .menu-li:hover {
    background-color: #91c8f5;
  }
`;
