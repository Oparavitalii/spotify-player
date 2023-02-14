import React from "react";
import { ListSongsEl, Header, ListWrapper ,Top} from "./ListSongs.elements";
import SongItem from "../ItemSong/ItemSong";
import Logoff from "../LogOut/LogOut";

export default function ListSongs() {
  return (
    <ListSongsEl>
      <Top>
      <Header>Finded Songs:</Header>
      <Logoff />
      </Top>
      <ListWrapper>
        <SongItem />
      </ListWrapper>
    </ListSongsEl>
  );
}
