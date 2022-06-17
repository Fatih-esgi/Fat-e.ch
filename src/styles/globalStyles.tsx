import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
//reset css
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;

	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
//end of reset css

  * {
   margin:0;
   padding:0;
   font-family: 'Jost', sans-serif;
  }

  html{
    font-size:20px;
    scroll-behavior:smooth;
  }

  :root {
    --BgBlackOpacity:#141312ee;
    --Brown:#474432;
    --LightBrown:#7B7061;
    --White:#F2F2F2;
    --LightBlue:#44B1C2;
    --Blue:#1A6A77;
    --LightYellow:#DFD388;

  }

  h1,h2,h3,h4,h5,h6{
    font-family: 'Playfair Display SC', serif;
  }

  h1{
    font-size:3.1em;
    font-weight:100;
    @media screen and (max-width: 1024px) {
      font-size:2.8rem
    }
    @media screen and (max-width: 640px) {
      font-size:2.2rem
    }

  }
section{
  padding-top:59px;
}
  p{
    margin-bottom: 1.5rem ;
    font-size: 1em ;
    line-height:1.3em;
    font-weight:300 ;
  }
  a{
      display: inline-block;
  }
`;
