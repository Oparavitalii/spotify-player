import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../Hook/hook";
import { setPlay, setAudio } from "../../store/createSlice";
import PlayerButtons from "../PlayerButtons/PlayerButtons";
import PlayerSong from "../PlayerSong/PlayerSong";
import PlayerDecs from "../PlayerDesc/PlayerDecs";
import { PlayerEl } from "./Player.elements";

export default function Player() {
  const dispatch = useAppDispatch();
  const data = useSelector((state: any) => state.player);

  const { choosenAudio, isPlay, songs } = data;

  let audio = useRef<any>();

  useEffect(() => {
    audio.current.pause();
    dispatch(setPlay(false));
    audio.current.src = choosenAudio.preview_url;

    if (choosenAudio) {
      audio.current.play();
      dispatch(setPlay(true));
    }

    return () => {
      function cancellAudio() {
        audio.current.src = "";
      }
      cancellAudio();
    };
  }, [choosenAudio.preview_url]);

  useEffect(() => {
    if (isPlay) {
      audio.current.play();
    }
    if (!isPlay) {
      audio.current.pause();
    }
  }, [isPlay]);

  const playPause = () => {
    if (!isPlay) {
      audio.current.play();
      dispatch(setPlay(!isPlay));
    } else {
      audio.current.pause();
      dispatch(setPlay(!isPlay));
    }
    if (choosenAudio === "") {
      console.log(choosenAudio);

      dispatch(setPlay(false));
      console.log(isPlay);
    }
  };
  const setNextSong = () => {
    let currentId = songs.findIndex((song: any) => song.id === choosenAudio.id);
    dispatch(setAudio(songs[currentId + 1]));
    if (currentId === songs.length - 1) {
      dispatch(setAudio(songs[0]));
    }
  };

  const setPreviousSong = () => {
    let currentId = songs.findIndex((song: any) => song.id === choosenAudio.id);
    dispatch(setAudio(songs[currentId - 1]));
    if (currentId === 0) {
      dispatch(setAudio(songs[songs.length - 1]));
    }
  };
  return (
    <PlayerEl>
      <PlayerDecs choosenAudio={choosenAudio} />
      <PlayerButtons
        setNextSong={setNextSong}
        setPreviousSong={setPreviousSong}
        isPlay={isPlay}
        playPause={playPause}
      />
      <PlayerSong audio={audio} choosenAudio={choosenAudio.preview_url} />
    </PlayerEl>
  );
}
