import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState(false);

  const menuItems = [
    { title: "accueil", link: "/#home" },
    { title: "à propos", link: "/#apropos" },
    { title: "compétences", link: "/#competences" },
    { title: "expériences", link: "/#experiences-pro" },
    { title: "mes travaux", link: "/#mes-travaux" },
    { title: "contact", link: "/#contact" },
  ];
  return (
    <>
      <MenuStyle>
        <ul>
          {menuItems.map((menuItem, i) => {
            return (
              <li key={i}>
                <Link href={menuItem.link}>
                  <a>{menuItem.title}</a>
                </Link>
              </li>
            );
          })}
        </ul>
      </MenuStyle>
      <MobileMenu>
        <div className="trigger">
          <svg
            className={`${activeMenu === true ? "active" : ""} bars`}
            viewBox="0 0 100 100"
            onClick={() => setActiveMenu(!activeMenu)}
          >
            <path
              className="line top"
              d="m 30,33 h 40 c 13.100415,0 14.380204,31.80258 6.899646,33.421777 -24.612039,5.327373 9.016154,-52.337577 -12.75751,-30.563913 l -28.284272,28.284272"
            ></path>
            <path
              className="line middle"
              d="m 70,50 c 0,0 -32.213436,0 -40,0 -7.786564,0 -6.428571,-4.640244 -6.428571,-8.571429 0,-5.895471 6.073743,-11.783399 12.286435,-5.570707 6.212692,6.212692 28.284272,28.284272 28.284272,28.284272"
            ></path>
            <path
              className="line bottom"
              d="m 69.575405,67.073826 h -40 c -13.100415,0 -14.380204,-31.80258 -6.899646,-33.421777 24.612039,-5.327373 -9.016154,52.337577 12.75751,30.563913 l 28.284272,-28.284272"
            ></path>
          </svg>
        </div>
        <nav className={`${activeMenu === true ? "active" : ""} menuPanel`}>
          <ul>
            {menuItems.map((menuItem, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    setActiveMenu(false);
                  }}
                >
                  <Link href={menuItem.link}>
                    <a>{menuItem.title}</a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </MobileMenu>
    </>
  );
};
export default Menu;

const MenuStyle = styled.nav`
  @media screen and (max-width: 1080px) {
    display: none;
  }
  ul {
    display: flex;
    gap: 2.5rem;
    @media screen and (max-width: 1200px) {
      gap: 1rem;
    }
    li {
      list-style-type: none;

      a {
        text-decoration: none;
        color: var(--White);
        text-transform: uppercase;
        letter-spacing: 0.5px;
        font-size: 16px;
      }
    }
  }
`;
const MobileMenu = styled.nav`
  display: none;
  @media screen and (max-width: 1080px) {
    display: block;
  }
  //menubutton
  .trigger {
    z-index: 2;
  }

  .bars {
    width: 70px;
    cursor: pointer;
  }
  .bars .line {
    fill: none;
    stroke: #fff;
    stroke-width: 4;
    stroke-linecap: square;
    transition: stroke-dasharray 400ms, stroke-dashoffset 400ms;
  }
  .bars .line.top {
    stroke-dasharray: 40 172;
  }
  .bars .line.middle {
    stroke-dasharray: 40 111;
  }
  .bars .line.bottom {
    stroke-dasharray: 40 172;
  }
  .bars.active .top {
    stroke-dashoffset: -132px;
  }
  .bars.active .middle {
    stroke-dashoffset: -71px;
  }
  .bars.active .bottom {
    stroke-dashoffset: -132px;
  }

  .menuPanel {
    position: absolute;
    background-color: var(--BgBlackOpacity);
    top: 60px;
    width: 230px;
    right: -300px;
    padding-right: 70px;
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: all ease-in 0.3s;
    &.active {
      right: 0;
      transition: all ease-in 0.2s;
    }
    ul {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-content: center;
      align-items: flex-end;
      height: 36%;
      li {
        a {
          color: var(--White);
          text-decoration: none;
        }
      }
    }
  }
`;
