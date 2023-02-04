import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage"
import "./index.css"
import React from "react";
import {app, db} from "./firebase"
import {collection, getDocs, setDoc, doc} from "firebase/firestore"
import {getStorage, ref} from "firebase/storage"

import levels from "./assets/data/levels";


function App() {
  const storage = getStorage()
  const storageRef = ref(storage)

  React.useEffect(()=>{
    async function setData(data){
        await setDoc(doc(db, "levels", data.id), data);
    }
    
    levels.forEach(level => {
      setData(level)
    })
    
  }, [])

  
  console.log(levels)
  return (
    <>
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/" element={<HomePage />}></Route>
              <Route path="/game/:id" element={<GamePage />} />
              {/* <Route path="/leaderboard" element={<LeaderBoardPage />} />
              <Route path="*" element={<NotFound />} />} */}
            </Routes>          
      </BrowserRouter>
     
    </>
    
  );
}

export default App;
