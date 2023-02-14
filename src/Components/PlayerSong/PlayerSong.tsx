import React from 'react'

export default function PlayerSong({audio,choosenAudio}:any) {
  return (
    <div> <audio ref={audio} src={choosenAudio} /></div>
  )
}

