import React from 'react'
import { GameImageContainer  } from './GamePageElements'
import SelectMenu from '../../components/SelectMenu/SelectMenu'
import { db } from '../../firebase'
import { getDocs,doc, getDoc, collection, addDoc } from 'firebase/firestore'
import EndGameModal from '../../components/EndGameModal/EndGameModal'

function GameImage({targets, level}) {
  const [selectMenu, setSelectMenu] = React.useState(false)
  const [selectMenuPos, setSelectMenuPos] = React.useState({})
  const [targetsResults, setTargetsResults] = React.useState({
    [targets[0].name] : false,
    [targets[1].name] : false,
    [targets[2].name] : false
  })
  
  const [isLoading, setIsLoading] = React.useState(true)
  const [levelData, setLevelData] = React.useState()

  const [startTime, setStartTime] = React.useState()
  const [elapsedTime, setElapsedTime] = React.useState()
  const [isGameWon, setIsGameWon] = React.useState(false)
  const [showEndGameModal, setShowEndGameModal] = React.useState(false)
  React.useEffect(()=>{
    if(isLoading === false){
      setStartTime(Date.now())
    }
  }, [isLoading])

  React.useEffect(()=>{
    const values = Object.values(targetsResults)
    const isWon = values.every(value => value === true)
    setIsGameWon(isWon)
  }, [targetsResults])

  React.useEffect(()=>{
    if(isGameWon === true){
      let endTime = Date.now()
      setElapsedTime(((endTime - startTime)/1000).toFixed(2))

      setShowEndGameModal(true)

    }
    
  }, [isGameWon])


  React.useEffect(()=>{
    async function getData(){
      const docRef = doc(db, "levels", level.id)
      const docSnap = await getDoc(docRef)
  
      if(docSnap.exists()){
        setLevelData(docSnap.data())
      }
      setIsLoading(false)
    }
    getData().catch(console.error)

  },[])


  function handleImageClick(e){
    e.stopPropagation()
    setSelectMenu(true)
    const DomRect = (e.target.getBoundingClientRect())
    
    // percentage mouse position for comparing with character store
    const mouseY = Math.round(((e.clientY - DomRect.top)/DomRect.height)*100)
    const mouseX = Math.round(((e.clientX - DomRect.left)/DomRect.width)*100)
    
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
    // check if the mouseClick coord is within the character coord 
    const targetData = levelData.targets.filter(target => target.name === name)  

    if(selectMenuPos[0] >= targetData[0].topLeftCoord[0] 
      && selectMenuPos[0] <= targetData[0].bottomRightCoord[0]
      && selectMenuPos[1] >= targetData[0].topLeftCoord[1]
      && selectMenuPos[1] <= targetData[0].bottomRightCoord[1]
    ){
      setTargetsResults(prev => ({
        ...prev,
        [name]: true
      }))
      
    } 
  }
  async function addScoreToFirebase(elapsedTime, levelId, user, date){
    return await addDoc(collection(db, "records"), {
        level: levelId,
        user: user,
        elapsedTime: elapsedTime,
        date: date
      })
  }
  function handleSubmitToLeadboard(name){
    const today = new Date().toLocaleDateString()
    console.log(today)

    addScoreToFirebase(elapsedTime, level.id, name, today ).catch(console.error)
  }

  if(isLoading){
    return <>
      Loading...
    </>
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
        {showEndGameModal && <EndGameModal elapsedTime={elapsedTime | 0} onSubmit={handleSubmitToLeadboard} /> }
      </GameImageContainer>
  )
}

export default GameImage