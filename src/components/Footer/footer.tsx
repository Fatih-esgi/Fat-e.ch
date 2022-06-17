import styled from "styled-components";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <FooterBlock>&copy;{currentYear} Fatih Esgi</FooterBlock>;
};

const FooterBlock = styled.footer``;

export default Footer;
