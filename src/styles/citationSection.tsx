import styled from "styled-components";

export const CitationSection = styled.section`
  background-color: var(--Brown);
  width: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 5rem;

  .container {
    display: flex;
    flex-direction: column;
    width: 90%;
    max-width: 699px;
    text-align: center;

    p {
      margin-bottom: 1.5rem;

      q {
        font-size: 1.2rem;
        font-weight: 100;
        color: var(--White);
        letter-spacing: 0.7px;
        line-height: 2.1rem;
      }
    }

    .separator {
      width: 100%;
      height: 1px;
      background-color: var(--LightYellow);
      margin-bottom: 1.5rem;
    }

    .signatureBox {
      transform: translateX(17px);
      width: 50%;
      margin: 0 auto;
    }

    .signatureTitle {
      font-family: "Playfair Display SC", serif;
      color: var(--LightBlue);
      margin-top: 0.3rem;
      margin-bottom: 0;
    }
  }
`;
