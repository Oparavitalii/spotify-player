import React from 'react';
import { FaArrowLeft, FaArrowRight, FaPlay, FaStop } from "react-icons/fa";

import {
    ButtonsWrapper,
    RangeWrapper,
    RangeInput,
    RangeTime,
    ButtonContainer,
  } from "./PlayerButtons.elements";

export default function PlayerButtons({isPlay,playPause,setNextSong,setPreviousSong}:any) {
  return (
           <ButtonsWrapper>
        <ButtonContainer onClick={setPreviousSong}>
          <FaArrowLeft />
        </ButtonContainer>
        <ButtonContainer onClick={playPause}>
          {isPlay ? <FaStop /> : <FaPlay />}
        </ButtonContainer>
        <ButtonContainer onClick={setNextSong}>
          <FaArrowRight />
        </ButtonContainer>
      </ButtonsWrapper>
  )
}
