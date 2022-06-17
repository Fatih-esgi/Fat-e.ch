import { StaticImageData } from "next/image";

export interface IWorksData {
  worksData: IWorks[];
}

export interface IWorks {
  id: 51;
  slug: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  acf: {
    logo: {
      url: string;
    };
  };
}
