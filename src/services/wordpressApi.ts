import axios from "axios";

export const getCompetences = async () => {
  const { data } = await axios.get(
    `https://${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/competences`
  );
  const competences = await data;
  return competences;
};

export const getExperiences = async () => {
  const { data } = await axios.get(
    `https://${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/experiences`
  );
  const experiences = await data;
  return experiences;
};

export const getWork = async () => {
  const { data } = await axios.get(
    `https://${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/works`
  );
  const works = await data;
  return works;
};

export const getWorkBySlug = async (slug: string) => {
  const { data } = await axios.get(
    `https://${process.env.NEXT_PUBLIC_BACKEND_URL}/wp-json/wp/v2/works?slug=${slug}`
  );
  const works = await data[0];
  return works;
};
