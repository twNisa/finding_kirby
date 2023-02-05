import React from 'react'
import {LevelCard, LevelCardsContainer, Container} from "./HomePageElements"
import {useNavigate} from "react-router-dom"
import { db } from '../../firebase'
import { getDocs, collection } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL} from 'firebase/storage'
import levels from '../../assets/data/levels'

function Level({id, onClick, name, imgUrl }){
  
  return (
  <LevelCard id={id} onClick={onClick}  >
    <img src={imgUrl} alt={name}/>
    <div>
      <h2>{name}</h2>
    </div>  
  </LevelCard>
  )
}


function HomePage() {
  const navigate = useNavigate()

  function handleGameClick(e){
    console.log(e.currentTarget)
    navigate(`/finding_kirby/game/${e.currentTarget.id}`)
  }

  const levelCards = levels.map(level => (
    <Level id={level.id} key={level.id} onClick={(e) => handleGameClick(e)} name={level.name} imgUrl={level.url} />
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