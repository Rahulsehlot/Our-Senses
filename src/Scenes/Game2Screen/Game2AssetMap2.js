const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const Game2Map3 = {
  id: "Scene22",

  Bg: `${imgUrl}texture_bg_dark.svg`,

  sprites: [
    `${imgUrl}organs/touch.svg`,
    `${imgUrl}organs/nose.svg`,
    `${imgUrl}organs/ear.svg`,
    `${imgUrl}organs/eye.svg`,
    `${imgUrl}organs/tongue.svg`,

    `${imgUrl}game2_images/skin/setofclothes_skin.svg`,

    `${imgUrl}game2_images/nose/incensestick_nose.svg`,

    `${imgUrl}game2_images/ear/speakers_ear.svg`,

    `${imgUrl}game2_images/eye/campfire_eye.svg`,

    `${imgUrl}game2_images/tongue/mango_tongue.svg`,

    `${imgUrl}game2_images/skin/cotton_skin.svg`,

    `${imgUrl}game2_images/nose/pizza_nose.svg`,

    `${imgUrl}game2_images/eye/tiger_eye.svg`,

    `${imgUrl}game2_images/skin/football_skin.svg`,

    `${imgUrl}game2_images/eye/icemountain_eye.svg`,

    `${imgUrl}game2_images/skin/pencile_skin.svg`,

    `${imgUrl}game2_images/skin/stones_skin.svg`,

    `${imgUrl}game2_images/eye/campfire_eye.svg`,

    `${imgUrl}game2_images/eye/setofbooks_eye.svg`,

    `${imgUrl}audio_replay_button.svg`,
    `${imgUrl}layout_box_icon.svg`,
    `${imgUrl}layout_box_icon_green_highlight.svg`,
    `${imgUrl}layout_box_icon_red_highlight.svg`,
  ],

  sounds: [
    `${soundUrl}game2_sounds/sense_of_touch.mp3`,
    `${soundUrl}game2_sounds/sense_of_eye.mp3`,
    `${soundUrl}game2_sounds/sense_of_smell.mp3`,
    `${soundUrl}game2_sounds/sense_of_hearing.mp3`,
    `${soundUrl}game2_sounds/sense_of_taste.mp3`,
    `${soundUrl}correct_answer_game2.mp3`,
    `${soundUrl}wrong_answer_game2.mp3`,
    `${soundUrl}mouse_click.mp3`,
  ],

  lottie: [],

  select: ["Eye", "Nose", "Ear", "Tongue", "Skin"],
};

export default Game2Map3;
