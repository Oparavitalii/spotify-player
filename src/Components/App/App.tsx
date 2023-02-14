import React, { useState, useEffect } from "react";
import axios from "axios";
import SideBar from "../Sidebar/Sidebar";
import ListSongs from "../ListSongs/ListSongs";
import Player from "../Player/Player";
import { useAppDispatch } from "../../Hook/hook";
import { setToken } from "../../store/createSlice";
import { useSelector } from "react-redux";
import { Normalize } from "styled-normalize";
import { Container, AppEl} from "./App.elements";

import { getToken } from "../../Helpers/GetToken";
import { Login } from "../Login/Login";

function App() {
 const dispatch = useAppDispatch();
  const token = useSelector((state:any) => state.player.token);
  const error = useSelector((state:any) => state.player.error);
  console.log(error);
  useEffect(() => {

      dispatch(setToken(getToken()));
    

 
  }, [getToken()]);
console.log(token);
  return (
    <AppEl>
      <Normalize />

      {!token ? (
        <Login />
      ) : (
        <Container>
          <SideBar />
          <ListSongs />
          <Player />
        </Container>
      )}
    </AppEl>
  );
}

export default App;
