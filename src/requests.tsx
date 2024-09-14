const BASE_URL = "https://65e848554bb72f0a9c4ed3e6.mockapi.io";

export const getAllItems = async () => {
  const response = await fetch(BASE_URL + "/item");
  if (response.ok) {
    let json = await response.json();
    return json;
  } else {
    throw new Error("MISTAKE");
  }
};
