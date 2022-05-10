import styled from "styled-components";

const size = {
  mobile: '480px',
  tablet: '768px',
  laptop: '1024px',
  desktop: '1440px',
  desktopXL: '2560px'
}
export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet}) `,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopXL:`(max-width: ${size.desktopXL})`
};
export const AppContainer = styled.div`
text-align: center;
display:flex;
padding:10px;
justify-content: space-evenly;
width: 100%;

@media ${device.mobile} {
  display:flex;
flex-direction:row;
}

@media ${device.tablet} { 
  max-width: 800px;
}

@media ${device.desktop} {
  max-width: 1200px;
}
@media ${device.desktopXL} {
  max-width:1200px;
}
`
export const VerticalLine = styled.div`
border-left: 2px solid #000;
height: 100%;
margin-left:200px;
display:static;

@media ${device.mobile} {
  display:none;
};
`