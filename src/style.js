import styled from 'styled-components';

export const App = styled.div`
  text-align: center;
  width: 100vw;
  height: 100vh;
  background: #0f1424;
  display: flex;
  align-items: center;
  @media(max-width: 540px){
    display: flex;
    height: 250vh;
    flex-direction: column;
    align-items: center;
  }
`;

export const AllCards = styled.div`
  display: grid;
  height: 475px;
  column-gap: 40px;
  row-gap: 0px;
  margin-left: 15px;
  grid-template-columns: 1fr 1fr 1fr;
  @media(max-width: 540px){
    display: flex;
    flex-direction: column;
    height: 200vh;
    width: 100vw;
    margin-left: 35px;
    margin-top: 50px;
    row-gap: 90px;
  }
`;

