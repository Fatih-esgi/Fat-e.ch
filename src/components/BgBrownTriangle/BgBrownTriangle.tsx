import styled from "styled-components";
const BgBrownTriangle = () => {
  return (
    <BgBrownStyle>
      <div className="triangle"></div>
    </BgBrownStyle>
  );
};
export default BgBrownTriangle;

const BgBrownStyle = styled.div`
  width: 100%;
  overflow: hidden;
  .triangle {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10vw 49.4vw 0 49.4vw;
    border-color: var(--Brown) transparent transparent transparent;
  }
`;
