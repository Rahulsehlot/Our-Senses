import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene6AssetMap";
import lottie from "lottie-web";
import "../../styles/Scene4.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";

export default function Scene6({
  setCounter,
  setG2Ans,
  setNext,
  setG2Wrng,
  setCount,
}) {
  const { Bg, setBg } = useContext(BGContext);
  const [isLoading, setisLoading] = useState(true);

  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const [playing, setplaying] = useState(false);

  const { intro } = Assets;

  const Ref = useRef(null);
  const transRef = useRef(null);

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
    }, 500);
  }, []);

  useEffect(() => {
    setBg(Assets?.Scene2?.Bg);
    setCount(0);
    if (isLoading === false) {
      if (Assets?.Scene2) {
        setplaying(true);
        Assets?.Scene2?.sounds[0]?.play();
        Assets?.Scene2?.sounds[0].on("end", () => {
          Assets?.Scene2?.sounds[2]?.play();
          Assets?.Scene2?.sounds[2]?.volume(0.1);
          Assets?.Scene2?.sounds[2].on("end", () => {
            Assets?.Scene2?.sounds[1]?.play();
            Assets?.Scene2?.sounds[1].on("end", () => {
              setplaying(false);
            });
          });
        });
      }
    }
  }, [isLoading]);

  const RetryGame = () => {
    if (playing === false) {
      setSceneId("/");
      setCounter(6);
      setG2Ans(5);
      setG2Wrng(12);
      setNext(0);
    }
  };

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.Scene2?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

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

          <Image
            src={Assets?.Scene2?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="audio_replay_icon_scene6"
            onClick={RetryGame}
            style={{ cursor: playing === false ? "pointer" : "" }}
          />

          <div ref={Ref} className="Scene6_lottie_container"></div>
        </>
      }
    />
  );
}
