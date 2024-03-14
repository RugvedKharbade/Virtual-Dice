import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const GamePlay =()=> {
  const [score,setScore]=useState(0);
  const [selectedNumber ,setSelectedNumber]=useState();
  const [currentDice,setCurrentDice]=useState(1);
  const [error,setError]=useState("");


  const generateRandomNumber=(min,max)=>{
         
    return Math.floor(Math.random()*(max-min)+min);
};

const roledice=()=>{
if(!selectedNumber) {
  setError("You have not selected any number")
  
  return;
}


const randomNumber = generateRandomNumber(1,7);

setCurrentDice((prev)=> randomNumber);
console.log(currentDice);



if(selectedNumber== randomNumber){
  setScore(prev => prev+ randomNumber)
}else{
  setScore((prev)=> prev-2);
}
setSelectedNumber(undefined);
}; 


    return (
        <MainContainer>
        <div className="top_section">
        <TotalScore  score={score}/>
        <NumberSelector error={error} selectedNumber={selectedNumber}  setSelectedNumber={setSelectedNumber} setError={setError}/>
        </div>
        <RoleDice  currentDice={currentDice} roledice={roledice}/>
        
        
        </MainContainer>
        
       

    );
};

export default GamePlay;


const MainContainer =styled.div`
padding-top:40px;
  .top_section{
    display: flex;
    justify-content: space-around;
    align-items: end;
  }


`;





