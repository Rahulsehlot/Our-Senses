const imgUrl = "ee02_ow_och_pl1/images/";
const soundUrl = "ee02_ow_och_pl1/sounds/";
const lottieUrl = "ee02_ow_och_pl1/lottie/";

const Game2Map2 = {
  id: "Scene22",

  Bg: `${imgUrl}texture_bg_dark.svg`,

  sprites: [
    `${imgUrl}organs/nose.svg`,
    `${imgUrl}organs/ear.svg`,
    `${imgUrl}organs/tongue.svg`,
    `${imgUrl}organs/touch.svg`,
    `${imgUrl}game2_images/nose/perfume_nose.svg`,
    `${imgUrl}game2_images/ear/mantalkingonphone_ear.svg`,
    `${imgUrl}game2_images/tongue/icecream_tongue.svg`,
    `${imgUrl}game2_images/skin/stones_skin.svg`,
    `${imgUrl}game2_images/nose/flower_nose.svg`,
    `${imgUrl}game2_images/ear/ambulance_ear.svg`,
    `${imgUrl}game2_images/tongue/cupofcoffee_tongue.svg`,
    `${imgUrl}game2_images/skin/jugofwater_skin.svg`,
    `${imgUrl}game2_images/tongue/glassofwater_tongue.svg`,
    `${imgUrl}game2_images/eye/papers_eye.svg`,
    `${imgUrl}game2_images/eye/moonstars_eye.svg`,
    `${imgUrl}game2_images/ear/dog_ear.svg`,
    `${imgUrl}game2_images/eye/newspaper_eye.svg`,
    `${imgUrl}game2_images/skin/pencile_skin.svg`,
    `${imgUrl}audio_replay_button.svg`,
    `${imgUrl}layout_box_icon.svg`,
    `${imgUrl}layout_box_icon_green_highlight.svg`,
    `${imgUrl}layout_box_icon_red_highlight.svg`,
  ],

  sounds: [
    `${soundUrl}game2_sounds/sense_of_smell.mp3`,
    `${soundUrl}game2_sounds/sense_of_hearing.mp3`,
    `${soundUrl}game2_sounds/sense_of_taste.mp3`,
    `${soundUrl}game2_sounds/sense_of_touch.mp3`,
    `${soundUrl}correct_answer_game2.mp3`,
    `${soundUrl}wrong_answer_game2.mp3`,
  ],

  lottie: [],

  select: ["Eye", "Nose", "Ear", "Tongue", "Skin"],
};

export default Game2Map2;
