import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import LogoMini from "../../../public/img/smallLogo.svg";
import Menu from "../menus/menu";
const Header = () => {
  return (
    <HeaderBlock>
      <div className="container">
        <Link href="/">
          <a>
            <div className="smallLogo">
              <Image src={LogoMini} alt="smallLogo" layout="responsive" />
            </div>
          </a>
        </Link>
        <Menu />
      </div>
    </HeaderBlock>
  );
};

//Style of header
const HeaderBlock = styled.header`
  z-index: 99999;
  position: fixed;
  width: 100vw;
  background-color: var(--BgBlackOpacity);
  .container {
    height: 60px;
    margin: 0 3rem;
    justify-content: space-between;
    align-items: center;
    display: flex;
    @media screen and (max-width: 1080px) {
      margin: 0 1rem;
    }
    .smallLogo {
      height: auto;
      width: 140px;
    }
  }
`;

export default Header;
