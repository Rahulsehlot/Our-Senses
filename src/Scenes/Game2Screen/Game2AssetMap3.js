const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const Game2Map4 = {
  id: "Scene22",

  Bg: `${imgUrl}Texture-BG_Dark.svg`,

  sprites: [
    `${imgUrl}Organs/Nose.svg`,
    `${imgUrl}Organs/Ear.svg`,
    `${imgUrl}Organs/Tongue.svg`,
    `${imgUrl}Organs/Touch.svg`,
    `${imgUrl}Organs/Eye.svg`,
    `${imgUrl}Game2_Images/Nose/Incense-stick_Nose.svg`,
    `${imgUrl}Game2_Images/Ear/Dog_Ear.svg`,
    `${imgUrl}Game2_Images/Tongue/Pop-corn_Tongue.svg`,
    `${imgUrl}Game2_Images/Skin/Feather_Skin.svg`,
    // `${imgUrl}Game2_Images/Eye/Moon-stars_Eye.svg`,
    `${imgUrl}Game2_Images/Nose/Pizza_Nose.svg`,
    `${imgUrl}Game2_Images/Ear/Speakers_Ear.svg`,

    `${imgUrl}Game2_Images/Skin/Football_Skin.svg`,
    `${imgUrl}Game2_Images/Skin/Shirt_Skin.svg`,
    `${imgUrl}Game2_Images/Skin/Teddy_Skin.svg`,
    `${imgUrl}Game2_Images/Eye/Sun_Eye.svg`,
    // `${imgUrl}Game2_Images/Eye/Set-of-books_Eye.svg`,
    `${imgUrl}Game2_Images/Eye/Set-of-books_Eye.svg`,
    `${imgUrl}Game2_Images/Eye/Ice-mountain_Eye.svg`,
    `${imgUrl}Audio_replay_button.svg`,
    `${imgUrl}Layout_Box_Icon.svg`,
    `${imgUrl}Layout_Box_Icon_Green_Highlight.svg`,
    `${imgUrl}Layout_Box_Icon_Red_Highlight.svg`,
  ],

  sounds: [
    `${soundUrl}game2-sounds/sense-of-smell.mp3`,
    `${soundUrl}game2-sounds/sense-of-hearing.mp3`,
    `${soundUrl}game2-sounds/sense-of-taste.mp3`,
    `${soundUrl}game2-sounds/sense-of-touch.mp3`,
    `${soundUrl}game2-sounds/sense-of-eye.mp3`,
    `${soundUrl}correct-answer-Game2.mp3`,
    `${soundUrl}wrong-answer-Game2.mp3`,
    `${soundUrl}mouse-click.mp3`,
  ],

  lottie: [],

  select: ["Eye", "Nose", "Ear", "Tongue", "Skin"],
};

export default Game2Map4;
