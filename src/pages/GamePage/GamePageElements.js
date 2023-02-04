import styled from "styled-components"

export const GameContainer = styled.section`
  

`

export const GameImageContainer = styled.section`
  width: 100%;
  display: block;
  position: relative;
  /* padding: 2rem; */
  max-width: 1500px;
  margin: 0 auto;
  & > img{
    width: 100%;
  }

  & .selector{
    position: absolute;
    width: 60px;
    height: 60px;
    display: block;
    border-radius: 50%;
    content: "";
    
    /* background-color: rgba(0,0,0,0.2); */
    border: 4px dashed black;
    /* z-index: 99999; */
    
  }
`

export const InstructionsContainer = styled.section`  
  max-width: 1400px;
  margin: 0 auto;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h1{
    font-size: 1.4rem;
  }

  & > div{

    display: flex;
    align-items: center;
    h2{
      font-size: 1.2rem;
    }
  }
  
  & .items{
    display: flex;
    gap: 1rem;

    
    & > div{
      display: flex;
      justify-content: center;
      align-items: center;
      & > img{
        width: 3rem;
      }
    }
    
  }

`