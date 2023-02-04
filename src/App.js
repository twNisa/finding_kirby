import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import GamePage from "./pages/GamePage/GamePage"
import "./index.css"
function App() {
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
