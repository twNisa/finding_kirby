import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { EndGameModalContainer } from './EndGameModalElements'
function EndGameModal({elapsedTime, onSubmit}) {
  const navigate = useNavigate()
  const [userName, setUserName] = React.useState("")
  function handleNameInput(e){
    setUserName(e.target.value)
  }

  function cancel(){
    navigate("/finding_kirby")
  }
  return (
    <EndGameModalContainer>
      <h1>You finished in {elapsedTime} seconds!</h1>
      <p>Would you like to submit your score to the leaderboard?</p>
      <label>Name:</label>
      <input type="text" name='name' value={userName} onChange={(e)=>handleNameInput(e)} />
      <button onClick={()=>onSubmit(userName)}>Submit score</button>
      <button onClick={cancel}>Cancel</button>

    </EndGameModalContainer>
  )
}

export default EndGameModal