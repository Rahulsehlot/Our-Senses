const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const Game2Map4 = {
  id: "Scene22",

  Bg: `${imgUrl}texture_bg_dark.svg`,

  sprites: [
    `${imgUrl}organs/nose.svg`,
    `${imgUrl}organs/ear.svg`,
    `${imgUrl}organs/tongue.svg`,
    `${imgUrl}organs/touch.svg`,
    `${imgUrl}organs/eye.svg`,
    `${imgUrl}game2_images/nose/incense_stick_nose.svg`,
    `${imgUrl}game2_images/ear/dog_ear.svg`,
    `${imgUrl}game2_images/tongue/pop_corn_tongue.svg`,
    `${imgUrl}game2_images/skin/feather_skin.svg`,
    // `${imgUrl}game2_images/eye/moon_stars_eye.svg`,
    `${imgUrl}game2_images/nose/pizza_nose.svg`,
    `${imgUrl}game2_images/ear/speakers_ear.svg`,

    `${imgUrl}game2_images/skin/football_skin.svg`,
    `${imgUrl}game2_images/skin/shirt_skin.svg`,
    `${imgUrl}game2_images/skin/teddy_skin.svg`,
    `${imgUrl}game2_images/eye/sun_eye.svg`,
    // `${imgUrl}game2_images/eye/set_of_books_eye.svg`,
    `${imgUrl}game2_images/eye/set_of_books_eye.svg`,
    `${imgUrl}game2_images/eye/ice_mountain_eye.svg`,
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
    `${soundUrl}game2_sounds/sense_of_eye.mp3`,
    `${soundUrl}correct_answer_game2.mp3`,
    `${soundUrl}wrong_answer_game2.mp3`,
    `${soundUrl}mouse_click.mp3`,
  ],

  lottie: [],

  select: ["Eye", "Nose", "Ear", "Tongue", "Skin"],
};

export default Game2Map4;
