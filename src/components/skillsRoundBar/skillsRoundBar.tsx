import Image, { StaticImageData } from "next/image";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

interface IprogressBar {
  percent: number;
  src: StaticImageData;
  text: string;
}
const SkillsRoundBar = ({ percent, src, text }: IprogressBar) => {
  return (
    <SingleSkill>
      <CircularProgressbarWithChildren value={percent}>
        <div className="skillImg">
          <Image
            src={src}
            layout="fill"
            alt="skill image"
            objectFit="contain"
          />
        </div>
        <div style={{ fontSize: 12, marginTop: -5 }}>
          <strong>{percent}%</strong>
        </div>
      </CircularProgressbarWithChildren>
      <p className="descr">{text}</p>
    </SingleSkill>
  );
};
export default SkillsRoundBar;

const SingleSkill = styled.div`
  flex: 0 1 220px;
  padding: 0 3rem;
  .CircularProgressbar-path {
    stroke: var(--LightBlue);
  }
  .CircularProgressbar-trail {
    stroke: var(--White);
  }
  strong {
    font-size: 1rem;
    color: var(--LightYellow);
  }
  .skillImg {
    position: relative;
    width: 50%;
    height: 40px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .descr {
    margin-top: 1rem;
    text-align: center;
    color: var(--White);
    font-weight: 600;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.8rem;
  }
`;
