import Game1Map1 from "../Game1Screen/Game1Map";
import Game1Map2 from "../Game1Screen/Game1Map2";
import Game2Map1 from "../Game2Screen/Game2AssetMap";
import Game2Map2 from "../Game2Screen/Game2AssetMap1";
import Game2Map3 from "../Game2Screen/Game2AssetMap2";
import Game2Map4 from "../Game2Screen/Game2AssetMap3";

const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "Scene2",

  Bg: `${imgUrl}intro_bg.svg`,

  sprites: [
    `${imgUrl}smell.svg`,
    `${imgUrl}taste.svg`,
    `${imgUrl}hearing.svg`,
    `${imgUrl}touch.svg`,
    `${imgUrl}vision.svg`,
    `${imgUrl}character.svg`,
    `${imgUrl}skip_btn.svg`,
    `${imgUrl}scene2images/sb_27_intro_text_listen.svg`,
    `${imgUrl}scene2images/sb_27_ti_see.svg`,
    `${imgUrl}scene2images/sb_27_ti_smell.svg`,
    `${imgUrl}scene2images/sb_27_ti_taste.svg`,
    `${imgUrl}scene2images/sb_27_ti_touch.svg`,
  ],

  sounds: [`${soundUrl}scene2_sound.mp3`],

  lottie: [`${lottieUrl}main_character.json`],

  shuffle1: [Game1Map1, Game1Map2],

  shuffle2: [Game2Map1, Game2Map2, Game2Map3],

  shuffle3: ["Game2Map1", "Game2Map2", "Game2Map3"],
};

export default IntroMap;
