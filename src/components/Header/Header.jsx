import React from 'react'
import {useNavigate} from "react-router-dom"
import logo from "../../assets/images/logo.png"
import {Head} from "./HeaderElements"

function Header() {
  const navigate = useNavigate()

  function handleClickLogo(){
    navigate("/finding_kirby/")
  }

  return (
    <Head> 
      <div>
        <img src={logo} onClick={handleClickLogo}/>
        <h1 onClick={handleClickLogo}>Finding Kirby!</h1>
      </div>
    </Head>
  )
}

export default Header