import styled from "styled-components";

export const Container = styled.section`
  max-width: 1400px;
  padding: 2rem;
  margin: 0 auto;
`

export const LevelCardsContainer = styled.section`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  
  gap: 2rem;
  width: 100%;
`
export const LevelCard = styled.div`
  /* max-width: 420px; */
  border-radius: 10px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 8px 4px gray;



  &:hover{  
    cursor: pointer;
    & > img{
      scale: 1.05;
    }
  }
  
  & > img{
    width: 100%;
    transition: scale .3s ease;
    z-index: 9999;
    position: relative;
  }


  & > div{
    position: absolute;
    color: white;
    z-index: 9999;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    background-color: red;
    height: 3rem;
    width: 100%;
  }
 
`