import { GetStaticPaths, GetStaticProps } from "next";
import Image from "next/image";
import React, { ReactElement } from "react";

import { IWorks } from "../../interfaces/IWorks";
import Layout from "../../layouts/layout";
import { getWorkBySlug } from "../../services/wordpressApi";
import "@wordpress/block-library/build-style/common.css";
import "@wordpress/block-library/build-style/style.css";
import "@wordpress/block-library/build-style/theme.css";
import SectionTitle from "../../components/SectionTitle/sectionTitle";
import { Content, SinglePage } from "../../styles/slug";

interface Props {
  workData: IWorks;
}

export default function WorkDetail({ workData }: Props) {
  console.log("workdata", workData);
  return (
    <SinglePage>
      <SectionTitle title={workData?.title.rendered} color="var(--Blue)" />
      {/* <h1>{workData?.title.rendered}</h1> */}
      <Content
        dangerouslySetInnerHTML={{ __html: workData?.content.rendered }}
      />
    </SinglePage>
  );
}

WorkDetail.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};
export const getStaticProps: GetStaticProps = async (ctx) => {
  const slug: any = ctx.params?.slug;

  const _workData = await getWorkBySlug(slug as string);

  if (!_workData) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {
      workData: _workData,
    },
    revalidate: 60, // 1 min
  };
};
