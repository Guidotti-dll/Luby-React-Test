import styled from 'styled-components';

export const Nav = styled.nav`
  width: 100%;
  height: 68px;
  background: #1F1F1F;
  padding: 0 17px;
  display: grid;
  grid-template-areas: 'arrow name .';
  align-items: center;

  svg {
    grid-area: arrow;
  }
  p {
    grid-area: name;
    justify-self: center;
  }
`;
