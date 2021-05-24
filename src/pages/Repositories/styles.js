import styled from 'styled-components';
import { colors } from '../../constants/colors';

export const Repo = styled.div`

  padding: 0 18px;
  border-bottom: 1px solid ${colors.mediumGray};
  margin-top: 31px;
  width: 100%;
  display: flex;
  flex-direction: column;

  h3{
    position: relative;
    margin-bottom: 9px;
    height: 42px;
    font-size: 20px;
    line-height: 25px;
    &::before{
    position: absolute;
    left: -18px;
    top: -20%;
    border-radius: 0 100px 100px 0;
    content: '';
    width: 10px;
    height: 42px;
    background: ${colors.yellow};
    }
  }

  p{
    height: 54%;
    font-size: 15px;
    line-height: 20px;
    margin-bottom: 13px;
  }

  .status{
    margin-bottom: 30px;
    width: 100%;
    height: 21px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .star {
      height: 100%;
      display: flex;
      align-items: center;

      span {
        margin-left: 5px;
        font-size: 15px;
        line-height: 18px;
      }
    }

    .lock{
      display: flex;
      align-items: center;
      justify-content: flex-end;
      height: 100%;
      width: 20%;
    }
  }
`;
