import styled from "styled-components";
const BgBrownTriangleInverted = () => {
  return (
    <BgBrownInvertedStyle>
      <div className="left"></div>
      <div className="right"></div>
    </BgBrownInvertedStyle>
  );
};
export default BgBrownTriangleInverted;

const BgBrownInvertedStyle = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  .left {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 200px 0 0 50vw;
    border-color: transparent transparent transparent var(--Brown);
    @media screen and (max-width: 1280px) {
      border-width: 150px 0 0 50vw;
    }
    @media screen and (max-width: 1024px) {
      border-width: 120px 0 0 50vw;
    }
    @media screen and (max-width: 960px) {
      border-width: 100px 0 0 50vw;
    }
    @media screen and (max-width: 640px) {
      border-width: 90px 0 0 50vw;
    }
    @media screen and (max-width: 560px) {
      border-width: 70px 0 0 50vw;
    }
  }
  .right {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 200px 50vw;
    border-color: transparent transparent var(--Brown) transparent;
    @media screen and (max-width: 1280px) {
      border-width: 0 0 150px 50vw;
    }
    @media screen and (max-width: 1024px) {
      border-width: 0 0 120px 50vw;
    }
    @media screen and (max-width: 960px) {
      border-width: 0 0 100px 50vw;
    }
    @media screen and (max-width: 640px) {
      border-width: 0 0 90px 50vw;
    }
    @media screen and (max-width: 560px) {
      border-width: 0 0 70px 50vw;
    }
  }
`;
