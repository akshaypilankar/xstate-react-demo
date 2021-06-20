export const getCookie = (key: string) => {
  console.log(document.cookie);
  return document.cookie.split("; ").find((row) => row.startsWith(`${key}=`));
  // .split("=")[1];
};

export const setCookie = (key: string, value: string) => {
  document.cookie = key + " = " + value + ";";
};
