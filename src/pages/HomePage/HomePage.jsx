import React from 'react'
import {LevelCard, LevelCardsContainer, Container} from "./HomePageElements"
import {useNavigate} from "react-router-dom"
import { db } from '../../firebase'
import { getDocs, collection } from 'firebase/firestore'
import { getStorage, ref, getDownloadURL} from 'firebase/storage'


function Level({id, onClick, name, firebaseStorage}){
  const [image, setImage] = React.useState()
  React.useEffect(()=>{
    const storage = getStorage()
    const pathReference = ref(storage, firebaseStorage)

    getDownloadURL(pathReference)
      .then((url) => {
        setImage(url)
      })
      .catch(console.error);

  }, [])

  return (
  <LevelCard id={id} onClick={onClick}  >
    <img src={image} alt={name}/>
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
    navigate(`/game/${e.currentTarget.id}`)
  }

  

  const [levelsList, setLevelsList] = React.useState([])
  React.useEffect(()=>{
    async function getLevels(){
      const querySnapshot = await getDocs(collection(db, "levels"));
      querySnapshot.forEach((doc) => {
        setLevelsList(prev => prev.concat(doc.data()))
      })
    }
    getLevels().catch(console.error)
  }, [])

  const levelCards = levelsList.map(level => (
    <Level id={level.id} key={level.id} onClick={(e) => handleGameClick(e)} name={level.name} firebaseStorage={level.firebaseStorage} />
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