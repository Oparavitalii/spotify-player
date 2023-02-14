export const sliceName = (str: string | string[]) => {
    if (str.length <= 20) {
      return str;
    } else if (str.length >= 21 && str[21] === "") {
      return str.slice(0, 20);
    } else {
      str = str.slice(0, 20) as string;
      str = str.split(" ") as string[];
      str.pop();
      return str;
    }
  };

