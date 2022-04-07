const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "intro",

  Bg: `${imgUrl}intro_bg.svg`,

  sprites: [
    `${imgUrl}intro_text.svg`,
    `${imgUrl}smell.svg`,
    `${imgUrl}taste.svg`,
    `${imgUrl}hearing.svg`,
    `${imgUrl}touch.svg`,
    `${imgUrl}vision.svg`,
    `${imgUrl}btn.svg`,
    `${imgUrl}scene2images/sb_27_ti_smell.svg`,
    `${imgUrl}scene2images/sb_27_ti_taste.svg`,
    `${imgUrl}scene2images/sb_27_ti_hear.svg`,
    `${imgUrl}scene2images/sb_27_ti_touch.svg`,
    `${imgUrl}scene2images/sb_27_intro_text_sight.svg`,
    `${imgUrl}progress_bar/sb_27_progress_bar.svg`,
    `${imgUrl}progress_bar/sb_27_progress_bar_gray_star.svg`,
    `${imgUrl}progress_bar/sb_27_progress_bar_yellow_star.svg`,
  ],

  sounds: [`${soundUrl}intro_sound.mp3`],

  lottie: [],
};

export default IntroMap;
