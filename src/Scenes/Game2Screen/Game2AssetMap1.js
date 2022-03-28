const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const Game2Map2 = {
  id: "Scene22",

  Bg: `${imgUrl}Texture-BG_Dark.svg`,

  sprites: [
    `${imgUrl}Organs/Ear.svg`,
    `${imgUrl}Organs/Tongue.svg`,
    `${imgUrl}Organs/Touch.svg`,
    `${imgUrl}Organs/Eye.svg`,
    `${imgUrl}Organs/Nose.svg`,
    `${imgUrl}Game2_Images/Ear/Man-talking-on-phone_Ear.svg`,
    `${imgUrl}Game2_Images/Tongue/Icecream_Tongue.svg`,
    `${imgUrl}Game2_Images/Skin/Stones_Skin.svg`,
    `${imgUrl}Game2_Images/Eye/Lion_Eye.svg`,
    `${imgUrl}Game2_Images/Nose/Perfume_Nose.svg`,
    `${imgUrl}Game2_Images/Ear/Ambulance_Ear.svg`,
    `${imgUrl}Game2_Images/Tongue/Cup-of-Coffee_Tongue.svg`,
    `${imgUrl}Game2_Images/Tongue/Glass-of-water_Tongue.svg`,
    `${imgUrl}Game2_Images/Eye/Papers_Eye.svg`,
    `${imgUrl}Game2_Images/Eye/Moon-stars_Eye.svg`,
    `${imgUrl}Game2_Images/Tongue/Garlic_Tongue.svg`,
    `${imgUrl}Game2_Images/Skin/Jug-of-water_Skin.svg`,
    `${imgUrl}Game2_Images/Eye/Newspaper_Eye.svg`,
    `${imgUrl}Game2_Images/Skin/Pencile_Skin.svg`,
    `${imgUrl}Audio_replay_button.svg`,
    `${imgUrl}Layout_Box_Icon.svg`,
    `${imgUrl}Layout_Box_Icon_Green_Highlight.svg`,
    `${imgUrl}Layout_Box_Icon_Red_Highlight.svg`,
  ],

  sounds: [
    `${soundUrl}game2-sounds/sense-of-hearing.mp3`,
    `${soundUrl}game2-sounds/sense-of-taste.mp3`,
    `${soundUrl}game2-sounds/sense-of-touch.mp3`,
    `${soundUrl}game2-sounds/sense-of-eye.mp3`,
    `${soundUrl}game2-sounds/sense-of-smell.mp3`,
    `${soundUrl}correct-answer-Game2.mp3`,
    `${soundUrl}wrong-answer-Game2.mp3`,
    `${soundUrl}mouse-click.mp3`,
  ],

  lottie: [],

  select: ["Eye", "Nose", "Ear", "Tongue", "Skin"],
};

export default Game2Map2;
