export interface IExperienceData {
  experiencesData: IExperience[];
}
export interface IExperience {
  id: number;
  acf: {
    annee: string;
    description: string;
    entreprise: string;
    siteweb: string;
    travaux_effectues: IExpWorks[];
  };
}

export interface IExpWorks {
  type_de_travail: string;
}
