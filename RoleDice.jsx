import styled from "styled-components";
import { useState } from "react";

const RoleDice=({roledice,currentDice})=>{
    
    
   return(
    <DiceContainer>
     <div className="dice" onClick={roledice}>
       <img src={`/images/dice/dice_${currentDice}.png`} alt='dice 1'/>

     </div>
     <p>Click on Dice to roll</p>
     </DiceContainer>
    )
};

export default RoleDice

const DiceContainer =styled.div`
margin-top: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-size: 24px;
    }
`;