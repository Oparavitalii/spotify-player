export const getToken = () => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token") as any;
      



    if (!token && hash) {
      token = hash.substring(1) ;
      token = token.split("&")
      .find((el: any) => el.startsWith("access_token"))
      .split("=")[1]

      window.location.hash = "";
      window.localStorage.setItem(
        "token",
        token
    
      );
      return token;
    }

    return token
}

