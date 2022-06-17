import styled from "styled-components";

interface ITitle {
  color?: string;
  title: string;
}

const SectionTitle = ({ color, title }: ITitle) => {
  return (
    <SectionTitleStyle color={color}>
      <h1 dangerouslySetInnerHTML={{ __html: title }} />
      <div className="trait"></div>
    </SectionTitleStyle>
  );
};

export default SectionTitle;

const SectionTitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0rem 0 2rem 0;

  h1 {
    color: ${(props) => props.color || "var(--LightYellow)"};
    margin-bottom: 1rem;
    margin-top: 2rem;
  }
  .trait {
    width: 100px;
    height: 2px;
    background-color: ${(props) =>
      props.color ? "var(--LightBlue)" : "var(--White)"};
  }
`;
