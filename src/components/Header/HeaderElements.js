import styled from "styled-components"

export const Head = styled.header`
  box-shadow: 0 4px 10px -4px gray;

  & > div{
    margin: 0 auto;
    height: 8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    img{
      max-height: 100%;
      transition: all .3s ease;
    }
    img:hover{
      transform: scale(1.1);
      cursor: pointer;
    }

    h1{
      font-size: 2rem;
      transition: all .3s ease;
    }
    h1:hover{
      transform: scale(1.1);
      cursor: pointer;
    }
  }
  

`