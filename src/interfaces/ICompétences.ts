import { StaticImageData } from "next/image";

export interface ICompetenceData {
  competencesData: ICompetenceCat[];
}

export interface ICompetenceCat {
  id: number;
  title: {
    rendered: string;
  };
  acf: {
    competences: ICompetence[];
  };
}

export interface ICompetence {
  competence: string;
  pourcentage: number;
  icone: {
    ID: number;
    url: StaticImageData;
  };
}
