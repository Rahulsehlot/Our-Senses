import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene4.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Game2Map from "../Game1Screen/Game1Map";

export default function Scene4({ scenename }) {
  // const { Bg, Loading } = useLoadAsset(IntroMap);
  const { Loading } = useLoadAsset(Game2Map);

  const { Bg, setBg } = useContext(BGContext);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets?.Scene4?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    if (Assets?.Scene4) {
      Assets?.Scene4?.sounds[0]?.play();
      Assets?.Scene4?.sounds[0].on("end", () => {
        setSceneId("/Game1");
      });
    }
  }, []);

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.Scene4?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const btn_style = {
    width: "20%",
    position: "fixed",
    bottom: "10%",
  };

  const txt_style = {
    position: "fixed",
    bottom: "45%",
  };

  const forward = () => {
    stop_all_sounds();
    setSceneId("/Game1_1");
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          <Image
            src={Assets?.Scene4?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="senses_smell_btn"
            style={{
              ...btn_style,
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
            }}
          />

          <Image
            src={Assets?.Scene4?.sprites[9]}
            alt="txt"
            id="fadeup"
            className="senses_Taste_txt"
            style={{ ...txt_style }}
          />

          <Image
            src={Assets?.Scene4?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_btn"
            style={{
              ...btn_style,
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
