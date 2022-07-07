import Game1Map1 from "../Game1Screen/Game1Map";
import Game1Map2 from "../Game1Screen/Game1Map2";
import Game2Map1 from "../Game2Screen/Game2AssetMap";
import Game2Map2 from "../Game2Screen/Game2AssetMap1";
import Game2Map3 from "../Game2Screen/Game2AssetMap2";

const imgUrl = "ee02_ow_och_pl1/images/";
const soundUrl = "ee02_ow_och_pl1/sounds/";
const lottieUrl = "ee02_ow_och_pl1/lottie/";

const IntroMap = {
  id: "intro",

  Bg: `${imgUrl}intro_bg.svg`,

  sprites: [
    `${imgUrl}intro_text.svg`,
    `${imgUrl}smell.svg`,
    `${imgUrl}taste.svg`,
    `${imgUrl}hearing.svg`,
    `${imgUrl}touch.svg`,
    `${imgUrl}vision.svg`,
    `${imgUrl}btn.svg`,
    `${imgUrl}scene2images/sb_27_ti_smell.svg`,
    `${imgUrl}scene2images/sb_27_ti_taste.svg`,
    `${imgUrl}scene2images/sb_27_ti_hear.svg`,
    `${imgUrl}scene2images/sb_27_ti_touch.svg`,
    `${imgUrl}scene2images/sb_27_intro_text_sight.svg`,
    `${imgUrl}progress_bar/sb_27_progress_bar.svg`,
    `${imgUrl}progress_bar/sb_27_progress_bar_gray_star.svg`,
    `${imgUrl}progress_bar/sb_27_progress_bar_yellow_star.svg`,
    `${imgUrl}blue_layer.svg`,
  ],

  sounds: [`${soundUrl}intro_sound.mp3`],

  lottie: [`${lottieUrl}main_character.json`, `${lottieUrl}1transition.json`],

  shuffle1: [Game1Map1, Game1Map2],

  shuffle2: [Game2Map1, Game2Map2, Game2Map3],
};

export default IntroMap;
