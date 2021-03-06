const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const Game1Map2 = {
  id: "Game2",

  sprites: [
    `${imgUrl}Organs_button/Nose_Button_Icon.svg`,
    `${imgUrl}Organs_button/Tongue_Button_Icon.svg`,
    `${imgUrl}Organs_button/Ear_Button_Icon.svg`,
    `${imgUrl}Organs_button/Skin_Button_Icon.svg`,
    `${imgUrl}Organs_button/Eye_Button_Icon.svg`,
    `${imgUrl}Organs_button/Dotted-Line.svg`,
    `${imgUrl}Organs_images/Tambourine_Ear.svg`,
    `${imgUrl}Organs_images/Chocolates_Tongue.svg`,
    `${imgUrl}Organs_images/Sand_Skin.svg`,
    `${imgUrl}Organs_images/Rainbow_Eye.svg`,
    `${imgUrl}Organs_images/Dustbin_Nose.svg`,
    `${imgUrl}Organs_images/Drums_Ear.svg`,
    `${imgUrl}Organs_images/Lemon_Tongue.svg`,
    `${imgUrl}Audio_replay_button.svg`,
    `${imgUrl}Hand_Icon.svg`,
    `${imgUrl}Button_Icon_Green_Highlight.svg`,
    `${imgUrl}Button_Icon_Red_Highlight.svg`,
    `${imgUrl}Hand_Icon.svg`,
  ],

  sounds: [
    `${soundUrl}13.mp3`,
    `${soundUrl}14.mp3`,
    `${soundUrl}15.mp3`,
    `${soundUrl}16.mp3`,
    `${soundUrl}17.mp3`,
    `${soundUrl}18.mp3`,
    `${soundUrl}19.mp3`,
    `${soundUrl}correct-answer-Game2.mp3`,
    `${soundUrl}wrong-answer-Game2.mp3`,
    `${soundUrl}countdown.mp3`,
  ],

  lottie: [],

  select: ["Nose", "Tongue", "Ear", "Touch", "Eye"],

  hint: ["Eyes", "Nose", "Ears", "Tongue", "Skin"],

  counter: 6,
};

export default Game1Map2;
