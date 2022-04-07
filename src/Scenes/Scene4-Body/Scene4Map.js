const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "Scene4",

  Bg: `${imgUrl}Texture-BG_Light.svg`,

  sprites: [
    `${imgUrl}Organs_button/Nose_Button_Icon.svg`,
    `${imgUrl}Organs_button/Tongue_Button_Icon.svg`,
    `${imgUrl}Organs_button/Ear_Button_Icon.svg`,
    `${imgUrl}Organs_button/Skin_Button_Icon.svg`,
    `${imgUrl}Organs_button/Eye_Button_Icon.svg`,
    `${imgUrl}Skip_Btn.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_eyes.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_nose.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_ears.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_tongue.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_skin.svg`,
  ],

  sounds: [`${soundUrl}lets_play_a_game.mp3`],

  lottie: [],
  select: ["Eyes", "Nose", "Tongue", "Ears", "Skin"],

  Game2Map1: [
    "/Eye_Game2",
    "/Nose_Game2",
    "/Ear_Game2",
    "/Tongue_Game2",
    "/Skin_Game2",
    "/Eye_Game2",
    "/Nose_Game2",
  ],

  Game2Map2: [
    "/Ear_Game2",
    "/Tongue_Game2",
    "/Skin_Game2",
    "/Eye_Game2",
    "/Nose_Game2",
    "/Ear_Game2",
    "/Tongue_Game2",
  ],

  Game2Map3: [
    "/Skin_Game2",
    "/Nose_Game2",
    "/Nose_Game2",
    "/Ear_Game2",
    "/Tongue_Game2",
    "/Skin_Game2",
    "/Eye_Game2",
  ],
};

export default IntroMap;
