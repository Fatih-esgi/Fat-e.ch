import Image from "next/image";
import type { ReactElement } from "react";
import Layout from "../layouts/layout";
import { GetStaticProps } from "next";

//medias
import LogoBig from "../../public/img/bigLogo.svg";
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
  getHomeData,
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

//interfaces
import { IWPData } from "../interfaces/IWPData";

export default function Page({
  competencesData,
  experiencesData,
  worksData,
  homeData,
}: IWPData) {
  console.log(homeData.acf);

  //destructuring homeData
  const {
    homebg,
    citation,
    citation_signature,
    citation_author,
    apropos_txt,
    maphoto,
    experience_txt,
    travaux_bg,
    contact_txt,
  } = homeData.acf;

  return (
    <HomeStyle>
      <HomeSection id="home">
        <div className="bg">
          <Image
            src={homebg.url}
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
            <q>{citation}</q>
          </p>
          <div className="separator"></div>
          <div className="signatureBox">
            <Image
              src={citation_signature.url}
              width={citation_signature.width}
              height={citation_signature.height}
              alt={citation_signature.title}
            />
          </div>
          <p className="signatureTitle">{citation_author}</p>
        </div>
      </CitationSection>
      <BgBrownTriangle />
      <AproposSection id="apropos">
        <SectionTitle title="à propos de moi" color="var(--Blue)" />
        <div className="content">
          <div
            className="presentation"
            dangerouslySetInnerHTML={{ __html: apropos_txt }}
          />
          <div className="MyFaceBox">
            <Image
              src={maphoto.url}
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
        <p
          className="descrExp"
          dangerouslySetInnerHTML={{ __html: experience_txt }}
        />
        <ExperiencesAccordeon experiencesData={experiencesData} />
      </ExperienceSection>
      <MyWorkSection id="mes-travaux">
        <div
          className="background"
          style={{ backgroundImage: `url(${travaux_bg.url})` }}
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
        <p dangerouslySetInnerHTML={{ __html: contact_txt }} />
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
  const _homeData = await getHomeData();

  return {
    props: {
      competencesData: _competencesData,
      experiencesData: _experiencesData,
      worksData: _worksData,
      homeData: _homeData,
    },
    revalidate: 60,
  };
};
