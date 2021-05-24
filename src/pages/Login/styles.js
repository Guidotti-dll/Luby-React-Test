import styled from 'styled-components';
import { colors } from '../../constants/colors'

export const ContainerLogin = styled.div`
  background: ${colors.lightnessGray} ;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.div`
  margin: 48px 0 19px 0;
  width: 90%;
  height: 56px;
  background: ${colors.white};
  border-radius: 12px;
  border: 1px solid ${colors.lightGray};
  display: flex;
  align-items: center;
  justify-content: space-between;

  input{
    height: 100%;
    border: none;
    border-radius: 12px;
    width: 60%;
    outline-style: none;
    padding: 20px 16px;
    font-size: 20px;
    line-height: 24px;
    color: ${colors.mediumGray};
  }

  .error{
    width: 40%;
    color: ${colors.red};
    font-size: 14px;
    line-height: 16px;
    display: flex;
    align-items: center;
  }
`;

export const Button = styled.button`
  height: 56px;
  width: 90%;
  background: ${colors.yellow};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 3px 6px ${colors.opacityBlack};
  border-style: none;
  border-radius: 12px;

  span {
    font-size: 20px;
    line-height: 25px;
    color: ${colors.mediumBlack};
    font-weight: bold;
  }

  svg{
    margin-left: 5px;
  }
`;
