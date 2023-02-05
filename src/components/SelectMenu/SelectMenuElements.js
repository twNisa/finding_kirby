import styled from "styled-components";



export const SelectMenuContainer = styled.section`
  position: absolute;
  width: 115px;
  top: ${props => props.y + "%" ||  0};
  left: ${props => props.x + "%" || 0};
  transform: translate(0.2rem, 0);
  background-color: gray;
  color: white;
  display: flex;
  flex-direction: column;
  
  /* transform: translateX(calc(-100% - 1rem));
  transform: translateY(calc(-100% + 1rem)); */

`

export const SelectItem = styled.div`
  padding: 0.2rem 0.5rem;
  cursor: pointer ;
  &:not(:nth-of-type(-1)){
    border-bottom: 1px solid darkgray;

  }

  &:hover{
    background-color: rgba(108, 122, 137, 1 );
  }
`