import Image from "next/image";
import type { ReactElement } from "react";
import Layout from "../layouts/layout";
import { GetStaticProps } from "next";

//medias
import LogoBig from "../../public/img/bigLogo.svg";
import HomeBG from "../../public/img/BgHeader.jpg";
import Signature from "../../public/img/muskSignature.png";
import MyFace from "../../public/img/me.png";
import MyWorkBg from "../../public/img/BgWorks.jpg";

//components
import BgBrownTriangle from "../components/BgBrownTriangle/BgBrownTriangle";
import BgBrownTriangleInverted from "../components/BgBrownTriangleInverted/BgBrownTriangleInverted";
import ContactForm from "../components/contactForm/contactForm";
import SectionTitle from "../components/SectionTitle/sectionTitle";
import SkillsSlider from "../components/SkillsSlider/skillsSlider";
import ExperiencesAccordeon from "../components/ExperiencesAccordion/experiencesAccordeon";
import WorkSlider from "../components/workSlider/workslider";

//DB Calls
import {
  getCompetences,
  getExperiences,
  getWork,
} from "../services/wordpressApi";

//styles
import { HomeStyle } from "../styles/homeStyle";
import { HomeSection } from "../styles/HomeSection";
import { AproposSection } from "../styles/aproposSection";
import { CitationSection } from "../styles/citationSection";
import { CompetenceSection } from "../styles/competencesSection";
import { ExperienceSection } from "../styles/experiencesSection";
import { MyWorkSection } from "../styles/workSection";
import { ContactSection } from "../styles/contactSection";
import { ICompetenceCat } from "../interfaces/ICompétences";
import { IWPData } from "../interfaces/IWPData";

export default function Page({
  competencesData,
  experiencesData,
  worksData,
}: IWPData) {
  return (
    <HomeStyle>
      <HomeSection id="home">
        <div className="bg">
          <Image
            src={HomeBG}
            layout="fill"
            objectFit="cover"
            objectPosition="bottom center"
            alt="fond d'un petit pilote dans un avion de bois devant une lignée d'avion"
          />
        </div>
        <div className="container">
          <h1>
            <div className="logoBig">
              <Image
                src={LogoBig}
                layout="responsive"
                alt="Fatih Esgi, développeur Front-end Junior. Réalisation de site internet, e-commerce,applications web et mobile"
              />
            </div>
          </h1>
        </div>
      </HomeSection>
      <CitationSection id="citation">
        <div className="container">
          <p>
            <q>
              Réfléchissez constamment à la manière dont vous pourriez améliorer
              les choses et vous remettre en question.
            </q>
          </p>
          <div className="separator"></div>
          <div className="signatureBox">
            <Image
              src={Signature}
              width={173}
              height={36}
              alt="Signature Elon Musk"
            />
          </div>
          <p className="signatureTitle">Elon Musk</p>
        </div>
      </CitationSection>
      <BgBrownTriangle />
      <AproposSection id="apropos">
        <SectionTitle title="à propos de moi" color="var(--Blue)" />
        <div className="content">
          <div className="presentation">
            <p>
              Voici donc les "Hashtags" qui me définiraient le plus. Après une
              première formation de pâtissier-confiseur, je me suis reconvertis
              professionnellement. Mon choix fut d'abord le graphisme. Puis,
              après un passage à l'Eikon de Fribourg durant 2 ans, je suis tombé
              amoureux du Développement. Je me suis donc consacré uniquement à
              l'apprentissage des différents langages en autodidacte.
            </p>
            <p>
              J'ai eu l'immense chance d'avoir pu travailler pour plusieurs
              clients, ce qui m'a permis à chaque projets d'aller plus loin,
              plus rapidement. En 2020-2021, j'ai réalisée une formation de
              Développeur Front-end, où j'ai pu valider mes acquis et en
              apprendre d'avantage sur le design et le développement de site web
              et application web et mobile.
            </p>
          </div>
          <div className="MyFaceBox">
            <Image
              src={MyFace}
              layout="fill"
              objectFit="contain"
              objectPosition="bottom"
              alt="une photo de moi, Fatih Esgi "
            />
          </div>
        </div>
      </AproposSection>
      <CompetenceSection id="competences">
        <SectionTitle title="Compétences" />
        <SkillsSlider competencesData={competencesData} />
      </CompetenceSection>
      <BgBrownTriangle />
      <ExperienceSection id="experiences-pro">
        <SectionTitle
          title="expériences professionnelles"
          color="var(--Blue)"
        />
        <p className="descrExp">
          Vous trouverez ici tout les stages en entreprise réalisé, avec une
          petite description des tâches effectuées.
        </p>
        <ExperiencesAccordeon experiencesData={experiencesData} />
      </ExperienceSection>
      <MyWorkSection id="mes-travaux">
        <div
          className="background"
          style={{ backgroundImage: `url(${MyWorkBg.src})` }}
        >
          <div className="content">
            <SectionTitle title="Réalisations" />
            <WorkSlider worksData={worksData} />
          </div>
          <BgBrownTriangleInverted />
        </div>
      </MyWorkSection>
      <ContactSection id="contact">
        <SectionTitle title="Contactez-moi !" />
        <p>
          Merci d'avoir visiter mon site, je suis à votre dispositon pour tout
          supp
        </p>
        <ContactForm />
      </ContactSection>
    </HomeStyle>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticProps: GetStaticProps = async () => {
  const _competencesData = await getCompetences();
  const _experiencesData = await getExperiences();
  const _worksData = await getWork();

  return {
    props: {
      competencesData: _competencesData,
      experiencesData: _experiencesData,
      worksData: _worksData,
    },
    revalidate: 60,
  };
};
