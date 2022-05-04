import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Game2Map1 from "../Game2Screen/Game2AssetMap";
import Game2Map2 from "../Game2Screen/Game2AssetMap1";
import Game2Map3 from "../Game2Screen/Game2AssetMap2";

function get_tracer_obj(type) {
  switch (type) {
    case "lion":
      return Game2Map1;
      break;
    case "dog":
      return Game2Map2;
      break;
    case "horse":
      return Game2Map3;
      break;
    default:
      return "";
  }
}

export default function Scene5({ nextload, setCount }) {
  const { Bg, setBg } = useContext(BGContext);
  const { Loading } = useLoadAsset(nextload);
  const [isLoading, setisLoading] = useState(true);

  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets?.Scene5?.sounds?.map((v) => v?.stop());
  };
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
    setCount(0);
    if (isLoading === false) {
      if (Assets?.Scene5) {
        Assets?.Scene5?.sounds[0]?.play();
        Assets?.Scene5?.sounds[0].on("end", () => {
          setSceneId("/nose_Game2");
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

  const forward = () => {
    const timeout = setTimeout(() => {
      stop_all_sounds();
      setSceneId("/nose_Game2");
    }, 1000);
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

          <div ref={Ref} className="Scene5_lottie_container"></div>
          <Image
            src={Assets?.Scene5?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Game2_vision_img"
          />
          <Image
            src={Assets?.Scene5?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Game2_Newspaper_img"
          />

          <Image
            src={Assets?.Scene5?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="Game2_sun_img"
          />
          <Image
            src={Assets?.Scene5?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="Game2_Rarrow_img"
          />
          <Image
            src={Assets?.Scene5?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="Game2_Larrow_img"
          />
          <Image
            src={Assets?.Scene5?.sprites[4]}
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
