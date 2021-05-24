import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Repo = styled.div`
  position: relative;
  padding: 0 18px;
  height: 151px;
  border-bottom: 1px solid ${colors.mediumGray};
  margin-top: 31px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h3{
    padding-top: 15px;
    height: 42px;
    font-size: 20px;
    line-height: 25px;
    &::before{
    position: absolute;
    left: 0;
    top: 5px;
    border-radius: 0 100px 100px 0;
    content: '';
    width: 10px;
    height: 42px;
    background: ${colors.yellow};
    }
  }

  p{
    height: 40%;
    font-size: 15px;
    line-height: 20px;
  }

  .status{
    width: 100%;
    height: 18px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .star {
      height: 100%;
      display: flex;
      align-items: center;
      font-size: 15px;
      line-height: 24px;
    }

    .lock{
      display: flex;
      align-items: center;
      height: 100%;
      width: 20%;
      svg{
        margin-right: 10px;
      }
    }
  }
`;
