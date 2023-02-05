import React from 'react'
import {SelectMenuContainer, SelectItem} from "./SelectMenuElements"

function SelectMenu({pos, targets, selectCharacter}) {

  let availableTargets = []
  console.log(targets)
  for(let target in targets){
    console.log(targets[target])
    if(!targets[target] ){
      availableTargets.push(
      <SelectItem onClick={() => selectCharacter(target)}  >
        {target}
      </SelectItem>
    )
    }
  }

  return (
    <>
      <SelectMenuContainer x={pos[0]} y={pos[1]}>
        {availableTargets}
      </SelectMenuContainer>

    </>
    
  )     
}

export default SelectMenu