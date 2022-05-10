import styled,{keyframes} from "styled-components";
import {device} from '../../App.style';

const fadeOut = keyframes`
from {
  transform: scale(1);
  opacity: 1;
}
to {
  transform: scale(.25);
  opacity: 0;
}
`;

export const UsersContainer = styled.div`
width:70%;
height:100%;
display:flex;
flex-wrap:wrap;
justify-content:flex-end;

@media ${device.mobile} {
  margin-top:30px;
  width:100%;

};

@media ${device.tablet} {
  width:80%
};

@media ${device.tablet} {
  width:70%
};

@media ${device.laptop} {
  width:70%
};

@media ${device.desktopXL} {
  width:70%;
};

`

export const RemoveButton = styled.span`
cursor:pointer;
font-size:10px;
font-weight:bold;
visibility:hidden;
`

export const UserContainer = styled.div`
display:flex;
width:150px;
height:20px;
border:3px solid;
margin:4px;
box-shadow: 1px 1px 4px 0px #888888;
justify-content: space-between;
padding: 5px;
visibility: ${props => props.isFadingOut ? 'hidden' : 'visible'};
animation: ${props => props.isFadingOut ? fadeOut : 'none'} 1.4s linear;
transition: visibility 1s linear;
&:hover {
  transform: translate(0%, 5%);
  transition: .5s ease-out;
}
&:hover ${RemoveButton} {
  visibility:visible;
};

@media ${device.desktopXL} {
  width:12%;
};

@media ${device.laptop} {
  width:18%
};

@media ${device.desktop} {
  width:18%
};

@media ${device.tablet} {
  width:19%
};

@media ${device.mobile} {
  width:100%;  
};
`

export const User = styled.div`
cursor:pointer;
font-weight:bold;
font-size:13px;
`

export const ClickCounter = styled.span`
display:inline-block;
width:12px;
height:12px;
border:1px solid grey;
border-radius:50%;
font-size:10px;
background:grey;
font-weight:bold;
`