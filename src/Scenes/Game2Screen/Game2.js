import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Game2.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Game2Map1 from "./Game2AssetMap";
import Star from "../progressBar";
import { counter } from "../Helper_function";
import IntroMap from "../Scene6-Body/Scene6AssetMap";

export default function Game2({
  flowCount,
  G2Ans,
  setG2Ans,
  G2Wrng,
  setG2Wrng,
  G2answer,
  count,
  setCount,
}) {
  const { Loading } = useLoadAsset(IntroMap);

  const { Bg, setBg } = useContext(BGContext);
  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const [G2QiD, setG2QiD] = useState();
  const [G2Sound, setG2Sound] = useState(0);
  const [answer, setAnswer] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [number, setNumber] = useState(null);
  const [playing, setplaying] = useState(false);
  const [option1Verify, setoption1Verify] = useState(0);
  const [option2Wrng, setoption2Wrng] = useState(0);
  const [grey, setGrey] = useState(false);

  const { intro } = Assets;

  const Ref = useRef(null);
  const transRef = useRef(null);
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    if (Assets && transRef.current) {
      lottie.loadAnimation({
        name: "boy",
        container: transRef.current,
        renderer: "svg",
        autoplay: true,
        loop: true,
        animationData: Assets?.intro?.lottie[1],
        speed: 1,
      });
    }
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
  }, []);

  const stop_all_sounds = () => {
    Assets?.Scene22?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setBg(Assets?.Scene22?.Bg);
    setG2Sound(flowCount);
  }, []);

  //Placing on either screens
  useEffect(() => {
    const element = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setNumber(element);
  }, []);

  //Setting Answer and random wrong answer
  useEffect(() => {
    const G2A1 = G2Ans;
    const G2W1 = G2Wrng;
    const G2Q1 = flowCount;
    setG2QiD(G2Q1);
    setAnswer(G2A1);
    setWrong(G2W1);
    console.log(G2A1, "**", G2W1);
    console.log(answer, "****", wrong);
  }, []);

  const playCorrectSound = () => {
    counter(count, setCount);
    if (Assets?.Scene22) {
      setplaying(true);
      Assets?.Scene22?.sounds[4]?.play();
      Assets?.Scene22?.sounds[4]?.on("end", () => {
        setplaying(false);
      });
    }
  };

  const playWrongSound = () => {
    if (Assets?.Scene22) {
      setplaying(true);
      Assets?.Scene22?.sounds[5]?.play();
      Assets?.Scene22?.sounds[5]?.on("end", () => {
        setplaying(false);
      });
    }
  };

  const Option1 = () => {
    if (answer < 10) {
      if (playing === false) {
        Assets?.Scene22?.sounds[flowCount]?.stop();
        playCorrectSound();
        if (playing === false) {
          setoption1Verify(1);
          // const soundEnd = () => {
          const item = Game2Map1?.sprites[answer + 1]?.split("_");
          const item1 = item[5].replace(".svg", "");
          const timeout = setTimeout(() => {
            setSceneId("/" + item1 + "_Game2");
          }, 1000);

          // };
          playCorrectSound();

          setG2Ans(answer + 1);
          setG2Wrng(wrong + 1);
        }
      }
    } else {
      playCorrectSound();
      setoption1Verify(1);

      const timeout = setTimeout(() => {
        setSceneId("/Scene6");
        stop_all_sounds();
      }, 1000);
    }
  };

  const Option2 = () => {
    if (playing === false) {
      playWrongSound();
      setoption2Wrng(1);
    }
  };
  const [replayId, setreplayId] = useState(null);

  useEffect(() => {
    if (isLoading === false) {
      if (Assets?.Scene22) {
        setGrey(true);
        setreplayId(Assets?.Scene22?.sounds[flowCount]);
        Assets?.Scene22?.sounds[flowCount]?.play();
        Assets?.Scene22?.sounds[flowCount]?.on("end", () => {
          setGrey(false);
        });
      }
    }
  }, [isLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setoption2Wrng(0);
    }, 1000);
  }, [option2Wrng]);

  const replayBtn = () => {
    if (grey === false) {
      if (Assets?.Scene22) {
        setGrey(true);
        replayId.play();
        replayId?.on("end", () => {
          setGrey(false);
        });
      }
    }
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          <div
            className="transition_bg"
            style={{ display: isLoading ? "block" : "none" }}
          >
            <div
              className="transition"
              style={{ display: isLoading ? "block" : "none" }}
              ref={transRef}
            ></div>
          </div>

          {/* Title */}
          <Image
            src={Assets?.Scene22?.sprites[G2QiD]}
            alt="txt"
            id="fadeup"
            className="Game2_question_img"
          />

          <Image
            src={Assets?.Scene22?.sprites[19]}
            alt="txt"
            id="fadeup"
            className="Option1BG"
            style={{
              cursor: playing === false ? "pointer" : "",
            }}
          />

          <Image
            src={Assets?.Scene22?.sprites[19]}
            alt="txt"
            id="fadeup"
            className="Option2BG"
            style={{
              borderColor: option1Verify === 1 ? "Green" : "#25256d",
              cursor: playing === false ? "pointer" : "",
            }}
          />

          <div
            alt="txt"
            id="fadeup"
            onClick={Option1}
            className="Option1"
            style={{
              left: number === 1 ? "8.5%" : "51.5%",
              cursor: playing === false ? "pointer" : "",
            }}
          >
            <Image
              src={Assets?.Scene22?.sprites[answer]}
              alt="txt"
              id="fadeup"
              className="Option1_Img"
            />
          </div>

          <Image
            src={Assets?.Scene22?.sprites[20]}
            alt="txt"
            id="fadeup"
            className="Option1_Button"
            style={{
              display: option1Verify === 1 ? "block" : "none",
              left: number === 1 ? "7.4%" : "50.3%",
            }}
          />

          <div
            id="fadeup"
            onClick={Option2}
            className="Option2"
            style={{
              left: number === 1 ? "51.5%" : "8.5%",
              cursor: playing === false ? "pointer" : "",
            }}
          >
            <Image
              src={Assets?.Scene22?.sprites[wrong]}
              alt="txt"
              id="fadeup"
              onClick={Option2}
              className="Option2_Img"
            />
          </div>
          <Image
            src={Assets?.Scene22?.sprites[21]}
            alt="txt"
            id="fadeup"
            className="Option2_Button"
            style={{
              display: option2Wrng === 1 ? "block" : "none",
              left: number === 1 ? "50.5%" : "7.4%",
            }}
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
              src={Assets?.Scene22?.sprites[18]}
              alt="txt"
              id="fadeup"
              onClick={replayBtn}
              style={{
                cursor: grey === false ? "pointer" : "",
              }}
            />
          </div>
          <Star num={count} />
        </>
      }
    />
  );
}
