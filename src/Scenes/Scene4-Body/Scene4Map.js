const imgUrl = "ee02_ow_och_pl1/images/";
const soundUrl = "ee02_ow_och_pl1/sounds/";
const lottieUrl = "ee02_ow_och_pl1/lottie/";

const IntroMap = {
  id: "Scene4",

  Bg: `${imgUrl}texture_bg_light.svg`,

  sprites: [
    `${imgUrl}organs_button/nose_button_icon.svg`,
    `${imgUrl}organs_button/tongue_button_icon.svg`,
    `${imgUrl}organs_button/ear_button_icon.svg`,
    `${imgUrl}organs_button/skin_button_icon.svg`,
    `${imgUrl}organs_button/eye_button_icon.svg`,
    `${imgUrl}skip_btn.svg`,
    `${imgUrl}scene3images/sb_27_ti_eyes.svg`,
    `${imgUrl}scene3images/sb_27_ti_nose.svg`,
    `${imgUrl}scene3images/sb_27_ti_ears.svg`,
    `${imgUrl}scene3images/sb_27_ti_tongue.svg`,
    `${imgUrl}scene3images/sb_27_ti_skin.svg`,
  ],

  sounds: [`${soundUrl}lets_play_a_game.mp3`],

  lottie: [],

  select: ["Eyes", "Nose", "Tongue", "Ears", "Skin"],
};

export default IntroMap;
