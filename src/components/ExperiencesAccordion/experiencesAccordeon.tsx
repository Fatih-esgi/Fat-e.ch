import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styled from "styled-components";
import { IExperienceData } from "../../interfaces/IExperiences";
const ExperiencesAccordeon = ({ experiencesData }: IExperienceData) => {
  return (
    <AccordionStyle>
      <Accordion allowZeroExpanded>
        {experiencesData.map((item, i) => (
          <AccordionItem key={i}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div className="entete">
                  <div className="left">
                    <span className="year">{item.acf.annee}</span>
                    <h2 className="title">{item.acf.entreprise}</h2>
                  </div>
                  <div className="right">
                    <p className="website">{item.acf.siteweb}</p>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="tags">
                {item.acf.travaux_effectues.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag.type_de_travail}
                  </span>
                ))}
              </div>
              <div
                className="descr"
                dangerouslySetInnerHTML={{ __html: item.acf.description }}
              />
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </AccordionStyle>
  );
};
export default ExperiencesAccordeon;

const AccordionStyle = styled.div`
  .accordion {
    padding: 0 3rem;
    border: none;

    .entete {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      align-content: flex-end;
      flex-direction: row;
      border-bottom: 2px solid var(--Brown);
      padding-bottom: 0.5rem;
      @media screen and (max-width: 810px) {
        align-items: flex-start;
        flex-direction: column;
        .right {
          padding-left: 30px;
        }
      }
      p {
        margin: 0;
      }
      .left {
        padding-left: 30px;
        .year {
          color: var(--LightBrown);
          font-weight: 700;
        }
        h2 {
          font-family: "Jost", sans-serif;
          color: var(--Blue);
          margin-top: 0.1rem;
          font-weight: 600;
          font-size: 1.3em;
        }
      }
    }
    .accordion__item {
      margin-bottom: 2rem;
    }
    .accordion__button {
      position: relative;
      cursor: pointer;
    }

    .accordion__button:before {
      display: inline-block;
      content: "";
      height: 10px;
      width: 10px;
      margin-right: 12px;
      border-bottom: 2px solid currentColor;
      border-right: 2px solid currentColor;
      transform: rotate(-45deg);
      position: absolute;
      bottom: 1rem;
      transition: all ease-in 0.1s;
      @media screen and (max-width: 810px) {
        bottom: 50%;
      }
    }

    .accordion__button[aria-expanded="true"]::before,
    .accordion__button[aria-selected="true"]::before {
      transform: rotate(45deg);
      bottom: 1.2rem;
      transition: all ease-in 0.1s;
    }
  }

  [hidden] {
    display: none;
  }

  .accordion__panel {
    animation: fadein 0.35s ease-in;
    border-bottom: 2px solid currentColor;
    .tags {
      display: flex;
      flex-direction: row;
      @media screen and (max-width: 1024px) {
        flex-direction: column;
        margin: 15px 0;
      }
      .tag {
        border-right: 3px solid;
        color: var(--LightBlue);
        font-weight: 600;
        padding: 0 6px;
        margin: 1rem 0px;
        @media screen and (max-width: 1024px) {
          margin: 0.3rem 0px;
          padding: 0 0px;
          border: none;
        }
        &:last-child {
          border-right: none;
        }
        &:first-child {
          padding-left: 0;
        }
      }
    }
  }

  /* -------------------------------------------------- */
  /* ---------------- Animation part ------------------ */
  /* -------------------------------------------------- */

  @keyframes fadein {
    0% {
      opacity: 0;
    }

    100% {
      opacity: 1;
    }
  }
`;
