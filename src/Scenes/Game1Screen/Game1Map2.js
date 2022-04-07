const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const Game1Map2 = {
  id: "Game2",

  sprites: [
    `${imgUrl}organs_button/nose_button_icon.svg`,
    `${imgUrl}organs_button/tongue_button_icon.svg`,
    `${imgUrl}organs_button/ear_button_icon.svg`,
    `${imgUrl}organs_button/skin_button_icon.svg`,
    `${imgUrl}organs_button/eye_button_icon.svg`,
    `${imgUrl}organs_button/dotted_line.svg`,
    `${imgUrl}organs_images/tambourine_ear.svg`,
    `${imgUrl}organs_images/chocolates_tongue.svg`,
    `${imgUrl}organs_images/sand_skin.svg`,
    `${imgUrl}organs_images/rainbow_eye.svg`,
    `${imgUrl}organs_images/dustbin_nose.svg`,
    `${imgUrl}organs_images/drums_ear.svg`,
    `${imgUrl}organs_images/lemon_tongue.svg`,
    `${imgUrl}audio_replay_button.svg`,
    `${imgUrl}hand_icon.svg`,
    `${imgUrl}button_icon_green_highlight.svg`,
    `${imgUrl}button_icon_red_highlight.svg`,
    `${imgUrl}hand_icon.svg`,
  ],

  sounds: [
    `${soundUrl}13.mp3`,
    `${soundUrl}14.mp3`,
    `${soundUrl}15.mp3`,
    `${soundUrl}16.mp3`,
    `${soundUrl}17.mp3`,
    `${soundUrl}18.mp3`,
    `${soundUrl}19.mp3`,
    `${soundUrl}correct_answer_game2.mp3`,
    `${soundUrl}wrong_answer_game2.mp3`,
    `${soundUrl}countdown.mp3`,
  ],

  lottie: [],

  select: ["Nose", "Tongue", "Ear", "Touch", "Eye"],

  hint: ["Eyes", "Nose", "Ears", "Tongue", "Skin"],

  counter: 6,
};

export default Game1Map2;
