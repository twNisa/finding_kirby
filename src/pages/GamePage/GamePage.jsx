import React from 'react'
import {useParams} from "react-router-dom"
import levels from '../../assets/data/levels'
import {GameContainer, GameImageContainer, InstructionsContainer} from "./GamePageElements"
import SelectMenu from "../../components/SelectMenu/SelectMenu"
import GameImage from "./GameImage" 

function GamePage() {
  const {id} = useParams()
  const level = levels.filter(level => level.id === id)[0]

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array;
  }

  const shuffledTargetsArray = shuffle(level.targets)
  const targets = shuffledTargetsArray.slice(0, 3)

  const items = targets.map(target => (
    <div key={target.name}>
      <img src={target.url} />
      <h1>{target.name}</h1>
    </div>
  ))


  // used to get target position from top left corner and bottom right corner
  // mouseX and mouseY are calculated from the relative element size
  // function handleImageDown(e){
  //   const DomRect = (e.target.getBoundingClientRect())
    
  //   const mouseY = Math.round(((e.clientY - DomRect.top)/DomRect.height)*100)
  //   const mouseX = Math.round(((e.clientX - DomRect.left)/DomRect.width)*100)
  //   console.log("top-left: ", mouseX, mouseY)

  // }
  // function handleImageUp(e){
  //   const DomRect = (e.target.getBoundingClientRect())
  
  //   const mouseY = Math.round(((e.clientY - DomRect.top)/DomRect.height)*100)
  //   const mouseX = Math.round(((e.clientX - DomRect.left)/DomRect.width)*100)
  //   console.log("bottom-right: ", mouseX, mouseY)
  // }

  
  return (
    <GameContainer>
      <InstructionsContainer>
        <h1>{level.name}</h1>
        <div>
          <h2>Find the Kirby with: </h2>
          <div className='items'>
            {items}
          </div>
        </div>
      </InstructionsContainer>
      <GameImage targets={targets} level={level} />
      
    </GameContainer>
  )
}

export default GamePage