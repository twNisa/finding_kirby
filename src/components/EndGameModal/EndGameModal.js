import React, { useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import { EndGameModalContainer } from './EndGameModalElements'
function EndGameModal({elapsedTime, onSubmit}) {
  const navigate = useNavigate()
  const [userName, setUserName] = React.useState("")
  console.log(elapsedTime)
  function handleNameInput(e){
    setUserName(e.target.value)
  }

  function cancel(){
    navigate("/finding_kirby")
  }

  function handleSubmit(){
    onSubmit(userName)
    navigate("/finding_kirby")
  }
  return (
    <EndGameModalContainer>
      <div>
        <h1>You finished in {elapsedTime} seconds!</h1>
        <p>Would you like to submit your score to the leaderboard?</p>
        <label>Name:</label>
        <input type="text" name='name' value={userName} onChange={(e)=>handleNameInput(e)} />
        <button onClick={handleSubmit}>Submit score</button>
        <button onClick={cancel}>Cancel</button>
      </div>
        

    </EndGameModalContainer>
  )
}

export default EndGameModal