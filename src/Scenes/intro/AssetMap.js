const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "intro",

  Bg: `${imgUrl}Intro-bg.svg`,

  sprites: [
    `${imgUrl}Intro-Text.svg`,
    `${imgUrl}Smell.svg`,
    `${imgUrl}Taste.svg`,
    `${imgUrl}Hearing.svg`,
    `${imgUrl}Touch.svg`,
    `${imgUrl}Vision.svg`,
    `${imgUrl}btn.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_smell.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_taste.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_hear.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_touch.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_see.svg`,
    `${imgUrl}progress_bar/SB_27_Progress_Bar.svg`,
    `${imgUrl}progress_bar/SB_27_Progress_Bar_Gray_Star.svg`,
    `${imgUrl}progress_bar/SB_27_Progress_Bar_Yellow_Star.svg`,
  ],

  sounds: [`${soundUrl}Intro_sound.mp3`],

  lottie: [],

  shuffle1: ["Game1Map1", "Game1Map2"],

  shuffle2: ["Game2Map1", "Game2Map2", "Game2Map3", "Game2Map4"],
};

export default IntroMap;
