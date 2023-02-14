import React, { useState } from "react";
import { useAppDispatch } from "../../Hook/hook";

import {
  SideBarEl,
  Logo,
  LogoText,
  LogoImg,
  SideForm,
  SideSearch,
  SideButton,
} from "./Sidebar.elements";
import { setKey ,setAudio} from "../../store/createSlice";
import { FaMusic } from "react-icons/fa";

export default function Sidebar() {
  const dispatch = useAppDispatch();

  const [searchKey, setSearchKey] = useState<string>("");

  const searchArtist =  (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!searchKey) {
     return dispatch(setKey("music"))
    }
    dispatch(setAudio(""))
   return dispatch(setKey(searchKey))
  
  };
  

  return (
    <SideBarEl>
      <Logo>
        <LogoImg>
          <FaMusic />
        </LogoImg>
        <LogoText> Player</LogoText>
      </Logo>
      <SideForm onSubmit={searchArtist}>
        <SideSearch
          onChange={(e) => setSearchKey(e.target.value)}
          type="text"
          placeholder={`Search audio`}
        />
        <SideButton>Search</SideButton>
      </SideForm>
    </SideBarEl>
  );
}
