import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import Game2Map from "./Game1Map";
import lottie from "lottie-web";
import "../../styles/Game1.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import IntroMap from "../Scene5-Body/Scene5AssetMap";
import Star from "../progressBar";
import { counter } from "../Helper_function";

export default function Game1({
  hintPlacement,
  sethintPlacement,
  G1ImgID,
  G1SoundId,
  nextScene,
  count,
  setCount,
  nextload,
}) {
  // const { Bg, Loading } = useLoadAsset(Game2Map);
  const { Loading } = useLoadAsset(IntroMap);

  const { Bg, setBg } = useContext(BGContext);

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  // const [G1ImgID, setG1ImgID] = useState();
  // const [G1SoundId, setG1SoundId] = useState(0);
  const [s1, setS1] = useState(0);
  const [playing, setplaying] = useState(false);
  const [EyeButtonCrct, setEyeButtonCrct] = useState(0);
  const [noseButtonCrct, setnoseButtonCrct] = useState(0);
  const [earsButtonCrct, setearsButtonCrct] = useState(0);
  const [tongueButtonCrct, settongueButtonCrct] = useState(0);
  const [skinButtonCrct, setskinButtonCrct] = useState(0);
  const [EyeButtonWrng, setEyeButtonWrng] = useState(0);
  const [noseButtonWrng, setnoseButtonWrng] = useState(0);
  const [earsButtonWrng, setearsButtonWrng] = useState(0);
  const [tongueButtonWrng, settongueButtonWrng] = useState(0);
  const [skinButtonWrng, setskinButtonWrng] = useState(0);
  const [grey, setGrey] = useState(false);

  const [hand, setHand] = useState(0);

  useEffect(() => {
    if (Assets?.Game2) {
      setGrey(true);
      Assets?.Game2?.sounds[G1SoundId]?.play();
      Assets?.Game2?.sounds[G1SoundId]?.on("end", () => {
        setGrey(false);
      });
    }
  }, []);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (clicked === 1) {
      Assets?.Game2?.sounds[G1SoundId]?.stop();
    }

    if (seconds > 15) {
      setSeconds(0);
      Assets?.Game2?.sounds[G1SoundId]?.play();
      setHand(1);
    }
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);

  const playCorrectSound = () => {
    counter(count, setCount);
    if (G1ImgID > 5 && G1ImgID <= 12) {
      if (playing === false) {
        if (Assets?.Game2) {
          setplaying(true);
          Assets?.Game2?.sounds[7]?.play();
          Assets?.Game2?.sounds[7]?.on("end", () => {
            sethintPlacement(hintPlacement + 1);
            setplaying(false);
          });
        }
      }
    } else {
      setSceneId("/Scene5");
    }
  };
  const playWrongSound = () => {
    if (playing === false) {
      if (Assets?.Game2) {
        setplaying(true);
        Assets?.Game2?.sounds[8]?.play();
        Assets?.Game2?.sounds[8]?.on("end", () => {
          setplaying(false);
        });
      }
    }
  };

  const replayBtn = () => {
    Assets?.Game2?.sounds[G1SoundId]?.stop();
    if (playing === false) {
      if (Assets?.Game2) {
        setGrey(true);
        if (playing === false) {
          if (Assets?.Game2) {
            Assets?.Game2?.sounds[G1SoundId]?.play();
            Assets?.Game2?.sounds[G1SoundId]?.on("end", () => {
              setGrey(false);
            });
          }
        }
      }
    }
  };

  const [clicked, setClicked] = useState(0);

  const Nose = () => {
    if (playing === false) {
      const ans = nextload?.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/organs_images/", "")
        .replace("_nose.svg", "");
      const verify = ans
        .replace("internal/images/organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      if (verify === "nose") {
        Assets?.Game2?.sounds[18]?.stop();
        setClicked(1);
        setHand(0);
        Assets?.Game2?.sounds[G1SoundId]?.stop();
        playCorrectSound();

        const timeout = setTimeout(() => {
          setSceneId(nextScene);
        }, 1500);
        setnoseButtonCrct(1);
      } else {
        playWrongSound();
        setnoseButtonWrng(1);
        setHand(0);
        setClicked(1);
      }
    }
  };

  const Tongue = () => {
    if (playing === false) {
      const ans = nextload?.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/organs_images/", "")
        .replace("_tongue.svg", "");
      const verify = ans
        .replace("internal/images/organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      if (verify === "tongue") {
        Assets?.Game2?.sounds[18]?.stop();
        setHand(0);
        setClicked(1);
        Assets?.Game2?.sounds[G1SoundId]?.stop();
        settongueButtonCrct(1);
        playCorrectSound();
        const timeout = setTimeout(() => {
          setSceneId(nextScene);
        }, 1500);
      } else {
        playWrongSound();
        settongueButtonWrng(1);
        setHand(0);
        setClicked(1);
      }
    }
  };

  const Ear = () => {
    if (playing === false) {
      const ans = nextload?.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/organs_images/", "")
        .replace("_ear.svg", "");
      const verify = ans
        .replace("internal/images/organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      if (verify === "ear") {
        Assets?.Game2?.sounds[18]?.stop();
        setClicked(1);

        setHand(0);
        Assets?.Game2?.sounds[G1SoundId]?.stop();

        playCorrectSound();
        setearsButtonCrct(1);
        const timeout = setTimeout(() => {
          setSceneId(nextScene);
        }, 1500);
      } else {
        playWrongSound();
        setearsButtonWrng(1);
        setHand(0);
        setClicked(1);
      }
    }
  };

  const Skin = () => {
    if (playing === false) {
      const ans = nextload?.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/organs_images/", "")
        .replace("_skin.svg", "");
      const verify = ans
        .replace("internal/images/organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      if (verify === "skin") {
        Assets?.Game2?.sounds[18]?.stop();
        setClicked(1);

        setHand(0);
        Assets?.Game2?.sounds[G1SoundId]?.stop();

        playCorrectSound();
        const timeout = setTimeout(() => {
          setSceneId(nextScene);
        }, 1500);

        setskinButtonCrct(1);
      } else {
        playWrongSound();
        setskinButtonWrng(1);
        setHand(0);
        setClicked(1);
      }
    }
  };
  const Eye = () => {
    if (playing === false) {
      const ans = nextload?.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/organs_images/", "")
        .replace("_eye.svg", "");
      const verify = ans
        .replace("internal/images/organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      if (verify === "eye") {
        Assets?.Game2?.sounds[18]?.stop();
        setClicked(1);
        setHand(0);
        Assets?.Game2?.sounds[G1SoundId]?.stop();
        playCorrectSound();
        const timeout = setTimeout(() => {
          setSceneId(nextScene);
        }, 1500);
        setEyeButtonCrct(1);
      } else {
        playWrongSound();
        setEyeButtonWrng(1);
        setHand(0);
        setClicked(1);
      }
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setEyeButtonWrng(0);
      setearsButtonWrng(0);
      setnoseButtonWrng(0);
      settongueButtonWrng(0);
      setskinButtonWrng(0);
      setClicked(0);
    }, 1500);
  }, [
    clicked,
    skinButtonWrng,
    EyeButtonWrng,
    earsButtonWrng,
    noseButtonWrng,
    tongueButtonWrng,
  ]);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          {/* <div className="mouse-move" onMouseMove={handleMouseMove}></div> */}

          <Image
            src={Assets?.Game2?.sprites[G1ImgID]}
            alt="txt"
            id="fadeup"
            className="Game_question"
          />

          <Image
            src={Assets?.Game2?.sprites[0]}
            alt="txt"
            id="fadeup"
            className={
              playing === true
                ? "senses_smell_img_game1Disabled"
                : "senses_smell_img_game1"
            }
            onClick={Nose}
            // style={{ cursor: playing === false ? "pointer" : "" }}
            style={{ cursor: "pointer" }}
          />
          <Image
            src={Assets?.Game2?.sprites[15]}
            alt="txt"
            id="fadeup"
            className="Nose_Button"
            style={{
              display: noseButtonCrct === 1 ? "block" : "none",
            }}
          />

          <Image
            src={Assets?.Game2?.sprites[16]}
            alt="txt"
            id="fadeup"
            className="Nose_Button"
            style={{ display: noseButtonWrng === 1 ? "block" : "none" }}
          />

          <Image
            src={Assets?.Game2?.sprites[1]}
            alt="txt"
            id="fadeup"
            className={
              playing === true
                ? "senses_taste_img_game1Disabled"
                : "senses_taste_img_game1"
            }
            onClick={Tongue}
            // style={{ cursor: playing === false ? "pointer" : "" }}
            style={{ cursor: "pointer" }}
          />
          <Image
            src={Assets?.Game2?.sprites[15]}
            alt="txt"
            id="fadeup"
            className="Taste_Button"
            style={{ display: tongueButtonCrct === 1 ? "block" : "none" }}
          />
          <Image
            src={Assets?.Game2?.sprites[16]}
            alt="txt"
            id="fadeup"
            className="Taste_Button"
            style={{ display: tongueButtonWrng === 1 ? "block" : "none" }}
          />

          <Image
            src={Assets?.Game2?.sprites[2]}
            alt="txt"
            id="fadeup"
            className={
              playing === true
                ? "senses_hearing_img_game1Disabled"
                : "senses_hearing_img_game1"
            }
            onClick={Ear}
            // style={{ cursor: playing === false ? "pointer" : "" }}
            style={{ cursor: "pointer" }}
          />
          <Image
            src={Assets?.Game2?.sprites[15]}
            alt="txt"
            id="fadeup"
            className="Hearing_Button"
            style={{ display: earsButtonCrct === 1 ? "block" : "none" }}
          />
          <Image
            src={Assets?.Game2?.sprites[16]}
            alt="txt"
            id="fadeup"
            className="Hearing_Button"
            style={{ display: earsButtonWrng === 1 ? "block" : "none" }}
          />

          <Image
            src={Assets?.Game2?.sprites[3]}
            alt="txt"
            id="fadeup"
            className={
              playing === true
                ? "senses_touch_img_game1Disabled"
                : "senses_touch_img_game1"
            }
            onClick={Skin}
            // style={{ cursor: playing === false ? "pointer" : "" }}
            style={{ cursor: "pointer" }}
          />
          <Image
            src={Assets?.Game2?.sprites[15]}
            alt="txt"
            id="fadeup"
            className="Touch_Button"
            style={{ display: skinButtonCrct === 1 ? "block" : "none" }}
          />
          <Image
            src={Assets?.Game2?.sprites[16]}
            alt="txt"
            id="fadeup"
            className="Touch_Button"
            style={{ display: skinButtonWrng === 1 ? "block" : "none" }}
          />

          <Image
            src={Assets?.Game2?.sprites[4]}
            alt="txt"
            id="fadeup"
            className={
              playing === true
                ? "senses_vision_img_game1Disabled"
                : "senses_vision_img_game1"
            }
            onClick={Eye}
            // style={{ cursor: playing === false ? "pointer" : "" }}
            style={{ cursor: "pointer" }}
          />

          <Image
            src={Assets?.Game2?.sprites[15]}
            alt="txt"
            id="fadeup"
            className="Vision_Button"
            style={{ display: EyeButtonCrct === 1 ? "block" : "none" }}
          />
          <Image
            src={Assets?.Game2?.sprites[16]}
            alt="txt"
            id="fadeup"
            className="Vision_Button"
            style={{ display: EyeButtonWrng === 1 ? "block" : "none" }}
          />

          <Image
            src={Assets?.Game2?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="dotted_Line"
          />

          <div
            className={
              playing === true
                ? "audio_replay_iconDisabled"
                : "audio_replay_icon"
            }
            style={{
              opacity: grey === false ? "1" : "0.50",
            }}
          >
            <Image
              src={Assets?.Game2?.sprites[13]}
              alt="txt"
              id="fadeup"
              // className={
              //   playing === true
              //     ? "audio_replay_iconDisabled"
              //     : "audio_replay_icon"
              // }
              onClick={replayBtn}
              style={{ cursor: playing === false ? "pointer" : "" }}
              // style={{ cursor: "pointer" }}
            />
          </div>
          <Star num={count} />
        </>
      }
    />
  );
}
