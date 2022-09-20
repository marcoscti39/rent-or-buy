/* eslint-disable react/prop-types */
import Link from "next/link";
import React from "react";

import { ImageContainer, Section, StyledLink } from "../styles/styledGoTo";

export default function GoToRentAHome({
  img,
  propose,
  title,
  text,
  btnTxt,
  path,
}) {
  const { url: imgUrl } = img?.coverPhoto || "";
  return (
    <Section>
      <ImageContainer>
        <img src={imgUrl} alt="" />
      </ImageContainer>
      <article>
        <span>{propose}</span>
        <h2>{title}</h2>
        <p>{text}</p>

        <Link href={`/purpose/${path}`}>
          <StyledLink>{btnTxt}</StyledLink>
        </Link>
      </article>
    </Section>
  );
}
