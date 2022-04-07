import { useContext, useRef, useEffect } from "react";
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
import Game2Map4 from "../Game2Screen/Game2AssetMap3";

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
    case "rabbit":
      return Game2Map4;
      break;
    default:
      return "";
  }
}

export default function Scene5({ nextload, setCount }) {
  const { Bg, setBg } = useContext(BGContext);
  const { Loading } = useLoadAsset(nextload);

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  console.log(Assets);

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets?.Scene5?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setCount(0);
    if (Assets?.Scene5 && !Loading) {
      Assets?.Scene5?.sounds[0]?.play();
      Assets?.Scene5?.sounds[0].on("end", () => {
        setSceneId("/Eye_Game2");
      });
    }
  }, [Assets, Loading, isLoading]);

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
    setSceneId("/Eye_Game2");
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
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
