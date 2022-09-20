import Link from "next/link";
import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  HeaderWrapper,
  MenuButton,
  Logo,
  StyledHeader,
  Menu,
} from "../styles/styledHeader";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <StyledHeader>
      <HeaderWrapper>
        <Link href="/">
          <Logo>Realtor</Logo>
        </Link>
        <MenuButton type="button" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu />
        </MenuButton>
        <Menu isMenuOpen={isMenuOpen}>
          <nav className="menu-nav">
            <ul className="menu-ul">
              <li className="menu-li">
                <span>icon</span>
                <a href="foo">Home</a>
              </li>
              <li className="menu-li">
                <span>icon</span>
                <a href="foo">Search</a>
              </li>
              <li className="menu-li">
                <span>icon</span>
                <a href="foo">Buy Property</a>
              </li>

              <li className="menu-li">
                <span>icon</span>
                <a href="foo">Rent Property</a>
              </li>
            </ul>
          </nav>
        </Menu>
      </HeaderWrapper>
    </StyledHeader>
  );
}
