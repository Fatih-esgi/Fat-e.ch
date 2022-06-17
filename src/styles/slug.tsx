import styled from "styled-components";

export const SinglePage = styled.article`
  padding: 6rem 6rem;
`;

export const Content = styled.div`
  figure.wp-block-gallery.has-nested-images.columns-default.is-cropped {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Playfair Display SC", serif;
    color: var(--Blue);
  }
`;
