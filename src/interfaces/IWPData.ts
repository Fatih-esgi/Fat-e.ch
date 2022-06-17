import { ICompetenceCat } from "./ICompétences";
import { IExperience } from "./IExperiences";
import { IWorks } from "./IWorks";

export interface IWPData {
  competencesData: ICompetenceCat[];
  experiencesData: IExperience[];
  worksData: IWorks[];
  homeData: {
    acf: {
      apropos_txt: string;
      citation: string;
      citation_author: string;
      citation_signature: {
        title: string;
        height: number;
        width: number;
        url: string;
      };
      contact_txt: string;
      experience_txt: string;
      homebg: {
        title: string;
        height: number;
        width: number;
        url: string;
      };
      maphoto: {
        title: string;
        height: number;
        width: number;
        url: string;
      };
      travaux_bg: {
        title: string;
        height: number;
        width: number;
        url: string;
      };
    };
  };
}
