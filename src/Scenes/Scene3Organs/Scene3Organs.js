import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import "../../styles/Scene3.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import IntroMap from "../Scene4-Body/Scene4Map";
import lottie from "lottie-web";

export default function Scene3Organs({
  next,
  setNext,
  imageId,
  soundId,
  PropId,
  position,
  scenename,
  text_Id,
}) {
  const { Loading } = useLoadAsset(IntroMap);
  const { Bg, setBg } = useContext(BGContext);
  const { setSceneId, Assets } = useContext(SceneContext);
  const { intro } = Assets;
  const [name, setName] = useState("");
  const [triggered, setTriggered] = useState(false);
  const [isLoading, setisLoading] = useState(true);

  const stop_all_sounds = () => {
    Assets[scenename]?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setName(IntroMap.select[next]);

    if (isLoading === false) {
      setBg(Assets?.Scene3?.Bg);
      if (Assets?.Scene3) {
        Assets?.Scene3?.sounds[soundId]?.play();
        Assets?.Scene3?.sounds[soundId]?.on("end", () => {
          if (next < 4) {
            const nxtitem = next + 1;
            const item = IntroMap.select[nxtitem];
            setName(item);
            setNext(nxtitem);
            const samp = "/" + item + "_Scene3";

            if (triggered === false) {
              setSceneId(samp);
            }
          } else {
            if (triggered === false) {
              setSceneId("/Scene4");
            }
          }
        });
      }
    }
  }, [isLoading]);

  const back = () => {
    setTriggered(true);
    stop_all_sounds();
    if (next > 0) {
      const nxtitem = next - 1;
      const item = IntroMap.select[nxtitem];
      setNext(nxtitem);
      const samp = "/" + item + "_Scene3";
      setSceneId(samp);
    }
  };

  const forward = () => {
    stop_all_sounds();
    const nxtitem = next + 1;
    const item = IntroMap.select[nxtitem];
    setNext(nxtitem);
    const samp = "/" + item + "_Scene3";
    setSceneId(samp);
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

          <Image
            src={Assets?.Scene3?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="Blue_layyer_wrapper"
          />

          <Image
            src={Assets?.Scene3?.sprites[imageId]}
            alt="txt"
            id="fadeup"
            className="senses_vision_img_scene3"
          />

          <Image
            src={Assets?.Scene3?.sprites[PropId[0]]}
            alt="txt"
            id="fadeup"
            className={position + "Prop1"}
            style={{ position: "fixed", width: "11%" }}
          />

          <Image
            src={Assets?.Scene3?.sprites[PropId[1]]}
            alt="txt"
            id="fadeup"
            className={position + "Prop2"}
            style={{ position: "fixed", width: "11%" }}
          />
          <Image
            src={Assets?.Scene3?.sprites[PropId[2]]}
            alt="txt"
            id="fadeup"
            className={position + "Prop3"}
            style={{ position: "fixed", width: "11%" }}
          />

          <div className="organ-div">
            <Image
              src={Assets?.Scene3?.sprites[text_Id]}
              alt="txt"
              id="fadeup"
              className="senses_scene3_txt"
            />
          </div>
          <Image
            src={Assets?.Scene3?.sprites[17]}
            alt="txt"
            id="fadeup"
            className="next"
            onClick={forward}
            style={{
              cursor: "pointer",
              display: position === "Skin_position" ? "none" : "block",
            }}
          />
          <Image
            src={Assets?.Scene3?.sprites[18]}
            alt="txt"
            id="fadeup"
            className="back"
            onClick={back}
            style={{
              cursor: "pointer",
              display: position === "Eyes_position" ? "none" : "block",
            }}
          />

          {/* Title */}
        </>
      }
    />
  );
}
