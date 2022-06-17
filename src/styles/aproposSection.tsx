import styled from "styled-components";

export const AproposSection = styled.section`
  padding-top: 3rem;
  .content {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-items: center;
    gap: 6rem;
    margin-left: 6rem;
    @media screen and (max-width: 1024px) {
      flex-direction: column;
      gap: 1rem;
      margin-left: 0rem;
      padding: 0 2rem;
    }
    .MyFaceBox {
      height: 426px;
      position: relative;
      flex: 0 0 340px;
      align-self: end;
      @media screen and (max-width: 1024px) {
        flex: auto;
        width: 100%;
      }
    }
  }
`;
