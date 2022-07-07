import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene4.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Game1Map1 from "../Game1Screen/Game1Map";
import Game1Map2 from "../Game1Screen/Game1Map2";

function get_tracer_obj(type) {
  switch (type) {
    case "Game1Map2":
      return Game1Map1;
      break;
    case "Game1Map2":
      return Game1Map2;
      break;
  }
}

export default function Scene4({ nextload }) {
  // const { Bg, Loading } = useLoadAsset(IntroMap);
  const { Loading } = useLoadAsset(nextload);
  const [highlighteye, sethighlighteye] = useState(0);
  const [highlightnose, sethighlightnose] = useState(0);
  const [highlightear, sethighlightear] = useState(0);
  const [highlighttongue, sethighlighttongue] = useState(0);
  const [highlightskin, sethighlightskin] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  const { Bg, setBg } = useContext(BGContext);
  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets?.Scene4?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    if (isLoading === false) {
      if (Assets?.Scene4) {
        Assets?.Scene4?.sounds[0]?.play();
        Assets?.Scene4?.sounds[0].on("end", () => {
          setSceneId("/Game1_1");
        });
      }
    }
  }, [isLoading]);

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.intro?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const btn_style = {
    width: "10%",
    position: "fixed",
    bottom: "4.5%",
    borderradius: "100%",
    border: "none",
  };

  const txt_style = {
    position: "fixed",
    bottom: "27.5%",
    width: "7%",
  };

  const forward = () => {
    const timeout = setTimeout(() => {
      stop_all_sounds();
      setSceneId("/Game1_1");
    }, 1000);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      sethighlighteye(1);
    }, 6500);

    const timeout1 = setTimeout(() => {
      sethighlightnose(1);
    }, 7500);
    const timeout2 = setTimeout(() => {
      sethighlightear(1);
    }, 9500);
    const timeout3 = setTimeout(() => {
      sethighlighttongue(1);
    }, 8500);
    const timeout4 = setTimeout(() => {
      sethighlightskin(1);
    }, 10500);
  }, [
    highlighteye,
    highlightear,
    highlightskin,
    highlightnose,
    highlighttongue,
  ]);

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
    }, 1500);
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

          {/* Title */}
          <Image
            src={Assets?.Scene4?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="senses_smell_btn"
            style={{
              ...btn_style,
              border: highlightnose == 1 ? "0.5vw solid yellow" : "",
              borderRadius: "100%",
            }}
          />

          <Image
            src={Assets?.Scene4?.sprites[7]}
            alt="txt"
            id="fadeup"
            className="senses_smell_txt"
            style={{ ...txt_style }}
          />

          <Image
            src={Assets?.Scene4?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="senses_taste_btn"
            style={{
              ...btn_style,
              border: highlighttongue == 1 ? "0.5vw solid yellow" : "",
              borderRadius: "100%",
            }}
          />

          <Image
            src={Assets?.Scene4?.sprites[9]}
            alt="txt"
            id="fadeup"
            className="senses_Taste_txt"
            style={{
              ...txt_style,
            }}
          />

          <Image
            src={Assets?.Scene4?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_btn"
            style={{
              ...btn_style,
              border: highlightear == 1 ? "0.5vw solid yellow" : "",
              borderRadius: "100%",
            }}
          />

          <Image
            src={Assets?.Scene4?.sprites[8]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_txt"
            style={{ ...txt_style }}
          />

          <Image
            src={Assets?.Scene4?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="senses_touch_btn"
            style={{
              ...btn_style,
              border: highlightskin == 1 ? "0.5vw solid yellow" : "",
              borderRadius: "100%",
            }}
          />

          <Image
            src={Assets?.Scene4?.sprites[10]}
            alt="txt"
            id="fadeup"
            className="senses_touch_txt"
            style={{ ...txt_style }}
          />

          <Image
            src={Assets?.Scene4?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="senses_vision_btn"
            style={{
              ...btn_style,
              border: highlighteye == 1 ? "0.5vw solid yellow" : "",
              borderRadius: "100%",
            }}
          />

          <Image
            src={Assets?.Scene4?.sprites[6]}
            alt="txt"
            id="fadeup"
            className="senses_vision_txt"
            style={{ ...txt_style }}
          />

          <div ref={Ref} className="Scene4_lottie_container"></div>

          <Image
            src={Assets?.Scene4?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="next"
            onClick={forward}
            style={{ cursor: "pointer", bottom: "1%" }}
          />
        </>
      }
    />
  );
}
