import React from 'react'
import levels from "../../assets/data/levels"
import {LevelCard, LevelCardsContainer, Container} from "./HomePageElements"
import {useNavigate} from "react-router-dom"
function HomePage() {

  const navigate = useNavigate()

  function handleGameClick(e){
    console.log(e.currentTarget)
    navigate(`/game/${e.currentTarget.id}`)
  }
  const levelCards = levels.map(level => (
    <LevelCard id={level.id} key={level.id} onClick={(e) => handleGameClick(e)}>
      <img src={level.url} />
      <div>
        <h2>{level.name}</h2>
      </div>  
    </LevelCard>

  ))  
  return (
    <Container>
      <section>
        <button>Leaderboard</button>
      </section>
      <LevelCardsContainer >
        {levelCards}

      </LevelCardsContainer>
      

    </Container>
  )
}

export default HomePage