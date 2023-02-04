import React from 'react'
import {SelectMenuContainer, SelectItem, TargetBox} from "./SelectMenuElements"

function SelectMenu({pos, targets, selectCharacter}) {
  // pos : [x, y, growUp, growLeft]
  console.log(targets)


  // let availableTargets = targets.forEach(target => (
  //   <SelectItem key={target.name}>
  //     {target.name}
  //   </SelectItem>
  // ))

  let availableTargets = []
  for(let target in targets){
    availableTargets.push(
      <SelectItem key={target} onClick={() => selectCharacter(target)}  >
        {target}
      </SelectItem>
    )
  }
 
  
  return (
    <>
      <TargetBox x={pos[0]} y={pos[1]} />
      <SelectMenuContainer x={pos[0]} y={pos[1]}>
        {availableTargets}
      </SelectMenuContainer>

    </>
    
  )     
}

export default SelectMenu