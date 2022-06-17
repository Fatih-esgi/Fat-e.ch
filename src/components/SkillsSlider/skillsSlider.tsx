import { useState } from "react";
import styled from "styled-components";
import { ICompetence, ICompetenceData } from "../../interfaces/ICompétences";

import SkillsRoundBar from "../skillsRoundBar/skillsRoundBar";

const SkillsSlider = ({ competencesData }: ICompetenceData) => {
  const skills = competencesData;

  // active Section Statement
  const [activeSection, setactiveSection] = useState(competencesData[0]);
  const [activeTitle, setactiveTitle] = useState(
    competencesData[0].title.rendered
  );

  // map all skills Catégory
  const competencesMenu = competencesData.map((competence) => {
    return (
      <li
        key={competence.id}
        className={
          competence.title.rendered === activeSection.title.rendered
            ? "active"
            : ""
        }
        onClick={() => {
          setactiveSection(competence),
            setactiveTitle(competence.title.rendered);
        }}
      >
        {competence.title.rendered}
      </li>
    );
  });

  // map selected competence list
  const currentGroup = activeSection.acf.competences.map(
    (comp: ICompetence) => {
      return (
        <SkillsRoundBar
          percent={comp.pourcentage}
          src={comp.icone.url}
          text={comp.competence}
          key={comp.icone.ID}
        />
      );
    }
  );

  return (
    <SkillSliderBox>
      <ul className="skillCat">{competencesMenu}</ul>
      <ul className="skillListe">{currentGroup || "no data"}</ul>
    </SkillSliderBox>
  );
};

export default SkillsSlider;

const SkillSliderBox = styled.div`
  .skillCat {
    display: flex;
    gap: 3rem;
    width: 100%;
    margin-bottom: 4rem;
    justify-content: center;
    li {
      font-weight: 400;
      padding: 0 0.2rem 0.2rem 0.2rem;
      cursor: pointer;
      transition: all ease-in 0.1s;
      color: var(--Brown);
      background-color: var(--LightBlue);
      padding: 7px 25px;
      border-radius: 32px;

      &:hover,
      &.active {
        background-color: var(--LightYellow);
        /* color: var(--White); */
        transition: all ease-in 0.1s;
      }
    }
  }
  .skillListe {
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;
    align-content: flex-start;
    max-width: 1100px;
    margin: 0 auto;
  }
`;
