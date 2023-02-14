import React from "react";
import { LogInWrapper, LogIn, LogInText } from "./Login.elements";
export function Login() {
  return (
    <LogInWrapper>
      <LogIn
        href={`https://accounts.spotify.com/authorize?client_id=0576439c411f46d58cdf9c06a0694ba6&response_type=token&redirect_uri=http://opara-v.space/playerapp`}
      >
        Login to Spotify
      </LogIn>
      <LogInText>
        <div>
          It's demo version.
          <br />
          You can use only this login and password .
        </div>
        <p>
          Login: <span>onazx@mailto.plus</span>
        </p>
        <p>
          Passwors: <span>s12345678</span>
        </p>
      </LogInText>
    </LogInWrapper>
  );
}
