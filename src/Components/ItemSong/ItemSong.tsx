import React, { useEffect ,useState} from "react";
import { sliceName } from "../../Helpers/SliceName";
import { fetchSongs, setAudio, setPlay } from "../../store/createSlice";
import {
  ListItem,
  ListArtist,
  ListSong,
  ListImg,
  ListImgExample,
} from "./ItemSong.elements";
import Spinner from "../Spinner/Spinner";
import ErrorBoundry from "../ErrorBoundary/ErrorBoundary";

import { useAppDispatch } from "../../Hook/hook";
import { useSelector } from "react-redux";

import { getToken } from "../../Helpers/GetToken";

export default function SongItem() {
  const key = useSelector((state: any) => state.player.searchKey);
  const data: any = useSelector((state:any) => state.player);
  
  const {songs,isPlay,loading,} = data;

  const token = getToken();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchSongs({ token, key}));
  }, [dispatch,token,key]);


  const setPlayAudio = (item: string) => {
    dispatch(setAudio(item));
    dispatch(setPlay(!isPlay));
  };

  return (
    <>
      {loading ?
        <Spinner /> : !songs.length ? <ErrorBoundry condition={"emty"} /> :
        songs.map((item: any, id: number) => {
          return (
          <ListItem onClick={() => setPlayAudio(item)} key={item.id}>
            <ListImg>
              <ListImgExample src={item.album.images[1].url} alt={item.name} />
            </ListImg>
            <ListArtist>{item.artists[0].name}</ListArtist>
            <ListSong>{sliceName(item.name)}</ListSong>
          </ListItem>
          )
        })
        
        
        }
    </>
  );
}
