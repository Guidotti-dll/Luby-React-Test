import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { ContainerLogin } from '../Login/styles';

export const Container = styled(ContainerLogin)`
  height: calc(100vh - 69px);
  justify-content: flex-start;
  color: ${colors.white};
  overflow-y: scroll;
`;

export const Header = styled.header`
    background: #1F1F1F;
    height: 126px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 15px;

    nav{
      width: 90%;
      display: grid;
      grid-template-areas: 'arrow name button';
      font-size: 17px;
      line-height: 24px;

      .goBack{
        grid-area: arrow;
        justify-self: flex-start;
      }

      div{
        grid-area: name;
        justify-self: flex-end;
        display: flex;
        align-items: center;
        font-weight: bold;
      }
      button{
        grid-area: button;
        justify-self: flex-end;
        color: ${colors.white};
        font-size: 17px;
        line-height: 24px;
        background: transparent;
        border: none;
        display: flex;
        align-items: center;
        svg{
          margin-left: 12px;
        }
      }
    }
    .twoItems{
        grid-template-areas: 'name button';
        div{
          justify-self: flex-start;
        }
    }
`;

export const Infos = styled.div`
  background: #5252525D;
  height: 97px;
  width: 100%;
  color: ${colors.white};
  padding: 0 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 44px;

  div{
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2{
      font-size: 40px;
      line-height: 49px;
    }
    span{
      font-size: 17px;
      line-height: 24px;
    }
  }
`

export const About = styled.div`
margin-top: 103px;
width: 100%;
padding: 0 18px;
position: relative;

h3{
    font-size: 26px;
    line-height: 32px;
    &::before{
    position: absolute;
    left: 0;
    top: -3px;
    border-radius: 0 100px 100px 0;
    content: '';
    width: 10px;
    height: 42px;
    background: ${colors.yellow};
    }
  }
`

export const Bio = styled.div`
  width: 100%;
  padding: 0 18px;
  margin: 53px 0 15px 0 ;
  position: relative;
  h3{
    font-size: 26px;
    line-height: 32px;
    &::before{
    position: absolute;
    left: 0;
    top: -3px;
    border-radius: 0 100px 100px 0;
    content: '';
    width: 10px;
    height: 42px;
    background: ${colors.yellow};
  }
}
  p{
    font-size: 18px;
    line-height: 24px;
    margin-top: 14px;
  }
`


export const Avatar = styled.img`
  width: 115px;
  border: 3pt solid ${colors.white};
  border-radius: 100pt;
  margin-top: 30px;
`
