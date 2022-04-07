import { LoadImage } from "../utils/loadImage";

export const LoadStars = async (setGrey, setGold) => {
  setGrey(await LoadImage("Internal/assets/progress_off.svg"));
  setGold(await LoadImage("Internal/assets/progress_on.svg"));
};

export const counter = (count, setCount) => {
  setCount(count + 1);
};
