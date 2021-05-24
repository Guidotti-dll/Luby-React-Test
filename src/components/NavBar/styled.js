import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Nav = styled.nav`
  width: 100%;
  background: ${colors.white};
  box-shadow: 0 -3px 6px ${colors.opacityBlack};
  position: fixed;
  bottom: 0;
  height: 80px;
  border-radius: 15px 15px 0px 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const Page = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${props => props.here ? colors.black : '#A5A5A5'};
  border: none;
  background: transparent;

  svg{
    height: 25px;
  }
`;

