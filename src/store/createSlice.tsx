import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchSongs = createAsyncThunk("get/songs", async ({token,key}:any) => {
    
    try {
        const data = await axios.get(`https://api.spotify.com/v1/search`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
            params: {
              q: key,
              type: "track",
            },
          });

          return  data.data.tracks.items
    } catch (error:any) {
        window.localStorage.removeItem("token");
    

        return error;
    }

});
type IState = {
  error: boolean,
  loading: boolean,
  token: string,
  songs: any,
  searchKey: string,
  isPlay: boolean,
  choosenAudio: any
};
let initialState: IState = {
  error: false,
  loading: false,
  token: "",
  songs: [],
  searchKey: "az",
  isPlay: false,
  choosenAudio: ""
};

const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {
    setKey: (state, action) => {
      state.searchKey = action.payload;
    },
    setPlay: (state, action) => {
        state.isPlay = action.payload;;
    },
    setAudio: (state, action) => {
      state.choosenAudio = action.payload;
    },
    setToken: (state, action) => { 
      state.token = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchSongs.pending, (state) => {
      state.error = false;
      state.loading = true;
    });
    builder.addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.error = false;
        state.songs = action.payload;
        

    });
    builder.addCase(fetchSongs.rejected, (state) => {
        state.loading = false;
        state.error = true;
    });
  },
});


export const {setKey,setPlay,setAudio,setToken} = playerSlice.actions;

export default playerSlice.reducer;
