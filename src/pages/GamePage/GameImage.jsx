import React from 'react'
import { GameImageContainer  } from './GamePageElements'
import SelectMenu from '../../components/SelectMenu/SelectMenu'


function GameImage({targets, level}) {

  const [selectMenu, setSelectMenu] = React.useState(false)
  const [selectMenuPos, setSelectMenuPos] = React.useState({})
  const [targetsResults, setTargetsResults] = React.useState({
    [targets[0].name] : false,
    [targets[1].name] : false,
    [targets[2].name] : false,
  })

  function handleImageClick(e){
    e.stopPropagation()
    setSelectMenu(true)
    console.log(selectMenu)
    const DomRect = (e.target.getBoundingClientRect())
    
    // percentage mouse position for comparing with character store
    const mouseY = Math.round(((e.clientY - DomRect.top)/DomRect.height)*100)
    const mouseX = Math.round(((e.clientX - DomRect.left)/DomRect.width)*100)
    console.log("click: ", [mouseX, mouseY]) 
    console.log(DomRect.width) 
    console.log(e.clientX) 

    

    setSelectMenuPos([mouseX , mouseY])
  }

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
  
  window.addEventListener("click", (e)=>{
    setSelectMenu(false)
  })  


  function selectCharacter(name){
    console.log(name)
  }

  return (
    <GameImageContainer  
            // onMouseOver = {handleMouseOver} 
            // onMouseOut={handleMouseOut} 
            // onMouseMove={handleMouseMove}

    >
        <img 
          src={level.url}  
          draggable="false" 
          onClick={(e) => handleImageClick(e)}

          // used to get percentage position of targets
          // onMouseDown={(e) => handleImageDown(e)} 
          // onMouseUp={(e) => handleImageUp(e)}           
        />
        {selectMenu && selectMenuPos && <SelectMenu pos={selectMenuPos} targets={targetsResults} selectCharacter={selectCharacter}/> }
      
      </GameImageContainer>
  )
}

export default GameImage