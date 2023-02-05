import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage"
import LeaderboardPage from "./pages/LeaderboardPage/LeaderboardPage";
import "./index.css"
import React from "react";
import {db} from "./firebase"
import {setDoc, doc} from "firebase/firestore"
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

  return (
    <>
      <BrowserRouter>
          <Header />
            <Routes>
              <Route path="/finding_kirby/" element={<HomePage />}></Route>
              <Route path="/finding_kirby/game/:id" element={<GamePage />} />
              <Route path="/finding_kirby/leaderboard" element={<LeaderboardPage />} />
              {/* <Route path="*" element={<NotFound />} /> */}
            </Routes>          
      </BrowserRouter>
     
    </>
    
  );
}

export default App;
