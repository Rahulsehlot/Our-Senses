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

  Bg: `${imgUrl}Intro-bg.svg`,

  sprites: [
    `${imgUrl}Smell.svg`,
    `${imgUrl}Taste.svg`,
    `${imgUrl}Hearing.svg`,
    `${imgUrl}Touch.svg`,
    `${imgUrl}Vision.svg`,
    `${imgUrl}Character.svg`,
    `${imgUrl}Skip_Btn.svg`,
    `${imgUrl}Scene2Images/SB_27_Intro_Text_Listen.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_see.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_smell.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_taste.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_touch.svg`,
  ],

  sounds: [`${soundUrl}scene2_sound.mp3`],

  lottie: [`${lottieUrl}main_character.json`],

  shuffle1: [Game1Map1, Game1Map2],

  shuffle2: [Game2Map1, Game2Map2, Game2Map3],

  shuffle3: ["Game2Map1", "Game2Map2", "Game2Map3"],
};

export default IntroMap;
