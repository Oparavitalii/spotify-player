import React from "react";

import { DescItem, DescImg, DescArtist, DescSong } from "./PlayerDesc.elements";

import { sliceName } from "../../Helpers/SliceName";

export default function PlayerDecs({ choosenAudio }: any) {
  return (
    <DescItem>
      {choosenAudio && (
        <>
          <DescImg src={choosenAudio.album.images[2].url} />
          <DescArtist>{choosenAudio.artists[0].name}</DescArtist>
          <DescSong> {sliceName(choosenAudio.name)}</DescSong>
        </>
      )}
    </DescItem>
  );
}
