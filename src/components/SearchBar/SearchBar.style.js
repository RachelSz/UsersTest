import styled from 'styled-components';
import {device} from '../../App.style'

export const SearchBarContainer = styled.div`
width:100px;
position:fixed;
left:0;

@media ${device.mobile} {
  width:97%;
  z-index:10;
  top:0;
};

`

export const SearchBarInput = styled.input`
border:2px solid;
border-radius:3px;
padding: 4px 4px;
::placeholder {
  font-weight:bold;
  color:#000
};
@media ${device.mobile} {
  width:100%;
  height:30px;
}
`
export const SearchIconContainer = styled.div`
position:absolute;
top:5px;
right:-50px;

@media ${device.mobile} {
  right:10px;
  top:10px;
  font-size:20px;
};
`