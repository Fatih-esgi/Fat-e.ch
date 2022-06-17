import { ICompetenceCat } from "./ICompétences";
import { IExperience } from "./IExperiences";
import { IWorks } from "./IWorks";

export interface IWPData {
  competencesData: ICompetenceCat[];
  experiencesData: IExperience[];
  worksData: IWorks[];
}
