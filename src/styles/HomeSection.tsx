import styled from "styled-components";

export const HomeSection = styled.section`
  position: relative;
  height: 100vh;
  padding-top: 0;
  .bg {
    position: absolute;
    z-index: 1;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
  }
  .container {
    display: flex;
    height: 100vh;
    position: relative;
    z-index: 1;
    justify-content: flex-end;
    align-content: center;
    flex-direction: row;
    flex-wrap: wrap;
    margin-right: 3rem;
    transform: translateY(-6rem);

    .logoBig {
      width: 45vw;
      min-width: 450px;
      height: 100px;
    }
  }
`;
