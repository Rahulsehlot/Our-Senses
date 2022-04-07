import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import IntroMap from "../Scene3Organs/Scene3Map";

export default function Scene2({ scenename }) {
  const { Loading } = useLoadAsset(IntroMap);
  const { Bg, setBg } = useContext(BGContext);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const [highlighteye, sethighlighteye] = useState(0);
  const [highlightnose, sethighlightnose] = useState(0);
  const [highlightear, sethighlightear] = useState(0);
  const [highlighttongue, sethighlighttongue] = useState(0);
  const [highlightskin, sethighlightskin] = useState(0);

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets[scenename]?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setBg(Assets?.Scene2?.Bg);
    if (Assets?.Scene2 && !Loading) {
      Assets?.Scene2?.sounds[0]?.play();
      Assets?.Scene2?.sounds[0].on("end", () => {
        setSceneId("/Eyes_Scene3");
      });
    }
  }, [Assets, Loading, isLoading]);

  useEffect(() => {
    if (highlighteye === 0) {
      const timeout = setTimeout(() => {
        sethighlighteye(1);
      }, 4800);
      const timeout1 = setTimeout(() => {
        sethighlightnose(1);
      }, 5500);
      const timeout2 = setTimeout(() => {
        sethighlightear(1);
      }, 6500);
      const timeout4 = setTimeout(() => {
        sethighlightskin(1);
      }, 7500);
      const timeout3 = setTimeout(() => {
        sethighlighttongue(1);
      }, 8200);
    }
    const timeout5 = setTimeout(() => {
      sethighlighteye(0);
    }, 5500);

    const timeout6 = setTimeout(() => {
      sethighlightnose(0);
    }, 6500);
    const timeout7 = setTimeout(() => {
      sethighlightear(0);
    }, 7500);
    const timeout8 = setTimeout(() => {
      sethighlightskin(0);
    }, 8200);
  }, [
    highlighteye,
    highlightear,
    highlightskin,
    highlightnose,
    highlighttongue,
  ]);

  useEffect(() => {
    if (Assets && Ref.current && !Loading) {
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
  }, [Assets, Loading]);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/Eyes_Scene3");
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <Image
            src={Assets?.Scene2?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="senses_smell_img"
            style={{
              border: highlightnose == 1 ? "8px solid yellow" : "",
              borderRadius: "100%",
            }}
          />

          <Image
            src={Assets?.Scene2?.sprites[7]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_Scene2"
          />

          <Image
            src={Assets?.Scene2?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="senses_taste_img"
            style={{
              border: highlighttongue == 1 ? "8px solid yellow" : "",
              borderRadius: "100%",
            }}
          />
          <Image
            src={Assets?.Scene2?.sprites[8]}
            alt="txt"
            id="fadeup"
            className="senses_vision_Scene2"
          />

          <Image
            src={Assets?.Scene2?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_img"
            style={{
              border: highlightear == 1 ? "8px solid yellow" : "",
              borderRadius: "100%",
            }}
          />

          <Image
            src={Assets?.Scene2?.sprites[9]}
            alt="txt"
            id="fadeup"
            className="senses_smell_Scene2"
          />
          <Image
            src={Assets?.Scene2?.sprites[10]}
            alt="txt"
            id="fadeup"
            className="senses_taste_Scene2"
          />

          <Image
            src={Assets?.Scene2?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="senses_touch_img"
            style={{
              border: highlightskin == 1 ? "8px solid yellow" : "",
              borderRadius: "100%",
            }}
          />

          <Image
            src={Assets?.Scene2?.sprites[11]}
            alt="txt"
            id="fadeup"
            className="senses_touch_Scene2"
          />

          <Image
            src={Assets?.Scene2?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="senses_vision_img"
            style={{
              border: highlighteye == 1 ? "8px solid yellow" : "",
              top: "3%",
              borderRadius: "100%",
            }}
          />

          <Image
            src={Assets?.Scene2?.sprites[12]}
            alt="txt"
            id="fadeup"
            className="senses_vision_Scene2"
          />

          <div ref={Ref} className="intro_lottie_container"></div>
          <Image
            src={Assets?.Scene2?.sprites[6]}
            alt="txt"
            id="fadeup"
            className="next"
            onClick={forward}
            style={{ cursor: "pointer" }}
          />
        </>
      }
    />
  );
}
