import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Follow = styled.div`
  position: relative;
  width: 100%;
  padding-top: 0 18px;
  height: 108px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 1px solid ${colors.mediumGray};

  &::before{
    position: absolute;
    left: 0;
    border-radius: 0 100px 100px 0;
    content: '';
    width: 10px;
    height: 42px;
    background: ${colors.yellow};
    }

  img{
    width: 64px;
    border: 3px solid ${colors.white};
    border-radius: 100%;
  }

  p{
    width: 35%;
    font-size: 16px;
    line-height: 19px;
    font-weight: bold;
  }
`;
