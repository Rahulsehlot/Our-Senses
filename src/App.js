import { useState, useEffect, useContext } from "react";
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer";
import Router from "./utils/Router";
import "./styles/app.css";
import Scene2 from "./Scenes/Scene2-Body/Scene2";
import Game1 from "./Scenes/Game1Screen/Game1";
import Scene3Organs from "./Scenes/Scene3Organs/Scene3Organs";
import Scene4 from "./Scenes/Scene4-Body/Scene4";
import Scene5 from "./Scenes/Scene5-Body/Scene5";
import Game2 from "./Scenes/Game2Screen/Game2";
import Scene6 from "./Scenes/Scene6-Body/Scene6";
import { AudioPlayer2 } from "./utils/loadAudio";
import { LoadImage } from "./utils/loadImage";
import useLoadAsset from "./utils/useLoadAsset";
import IntroMap from "./Scenes/intro/AssetMap";
import Game1Map1 from "./Scenes/Game1Screen/Game1Map";
import Game1Map2 from "./Scenes/Game1Screen/Game1Map2";
import { SceneContext } from "./contexts/SceneContext";

function App() {
  const { SceneId, Assets, setheight } = useContext(SceneContext);
  const [LandScape, setLandScape] = useState(false);
  const Asset = useLoadAsset(IntroMap);
  const [Load, setLoad] = useState(true);
  const [next, setNext] = useState(0);
  const [counter, setCounter] = useState(6);
  const [G2Ans, setG2Ans] = useState(4);
  const [G2Wrng, setG2Wrng] = useState(11);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [hintPlacement, sethintPlacement] = useState(0);
  const [count, setCount] = useState(0);
  const [shuffle_g1, setshuffle_g1] = useState("");
  const [shuffle_g2, setshuffle_g2] = useState("");

  const [playing, setplaying] = useState(false);

  const resizer = () => {
    setLandScape(window.innerWidth / window.innerHeight < 1.0);
    if (window.innerWidth <= 1264) {
      setheight("87%");
    } else {
      setheight("73%");
    }
  };
  console.log(LandScape);

  useEffect(() => {
    const shuffle_1 = Math.floor(0 + Math.random() * (2 - 0));
    const shuffle_2 = Math.floor(0 + Math.random() * (3 - 0));
    const s1 = IntroMap?.shuffle1[shuffle_1];
    setshuffle_g1(s1);
    setshuffle_g2(IntroMap?.shuffle2[shuffle_2]);
  }, [shuffle_g1, shuffle_g2]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    loadAudio();
  }, []);

  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("ee02_ow_och_pl1/sounds/bg_sound.mp3"));
    seticon1(await LoadImage("ee02_ow_och_pl1/images/sound.svg"));
    seticon2(await LoadImage("ee02_ow_och_pl1/images/nosound.svg"));
  };

  useEffect(() => {
    if (BG_sound !== null && SceneId !== "/" && playing === false) {
      setplaying(true);
      BG_sound?.play();
    }
  }, [BG_sound, SceneId]);

  useEffect(() => {
    if (BG_sound) {
      if (mute) {
        BG_sound?.mute(true);
      } else {
        BG_sound?.mute(false);
      }
    }
  }, [mute]);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);

    loadAudio();

    window.addEventListener("resize", resizer);

    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, []);

  const toggleMute = () => {
    setmute(!mute);
  };

  if (LandScape) {
    return <h1 id="landscapeMode">Rotate your device</h1>;
  }

  if (Load && !Asset.Loading)
    return (
      <div className="loadingIndicator">
        <div className="vendorWrapper"></div>
        <div className="playerPreloader">
          <div className="playerPreloadCircle"></div>
        </div>
      </div>
    );

  return (
    <GameContainer setLandScape={setLandScape} LandScape={LandScape}>
      {!mute && SceneId !== "/" && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
        />
      )}
      {mute && SceneId !== "/" && (
        <img
          src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`}
          alt=""
          className="mute_btn"
          onClick={toggleMute}
        />
      )}{" "}
      <Router sceneId="/">
        <Intro />
      </Router>
      <Router sceneId="/Scene2">
        <Scene2 scenename={"Scene2"} />
      </Router>
      <Router sceneId="/Eyes_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={4}
          soundId={4}
          position={"Eyes_position"}
          PropId={["6"]}
          text_Id={19}
          scenename={"Scene3"}
          sceneid={"/Eyes_Scene3"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Nose_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={0}
          soundId={0}
          PropId={["7", "8"]}
          text_Id={20}
          position={"Nose_position"}
          scenename={"Scene3"}
          sceneid={"/Nose_Scene3"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Tongue_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={1}
          soundId={1}
          text_Id={22}
          PropId={["9", "10", "11"]}
          position={"Tongue_position"}
          scenename={"Scene3"}
          sceneid={"/Tongue_Scene3"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Ears_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={2}
          soundId={2}
          text_Id={21}
          PropId={["12", "13", "14"]}
          position={"Ears_position"}
          scenename={"Scene3"}
          sceneid={"/Ears_Scene3"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Skin_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={3}
          text_Id={23}
          soundId={3}
          PropId={["15", "16"]}
          position={"Skin_position"}
          scenename={"Scene3"}
          sceneid={"/Skin_Scene3"}
          count={count}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/Scene4">
        <Scene4 nextload={shuffle_g1} />
      </Router>
      <Router sceneId="/Scene5">
        <Scene5
          scenename={"Scene2"}
          setCount={setCount}
          nextload={shuffle_g2}
        />
      </Router>
      <Router sceneId="/Scene6">
        <Scene6
          setCounter={setCounter}
          setG2Ans={setG2Ans}
          setNext={setNext}
          setG2Wrng={setG2Wrng}
          setCount={setCount}
        />
      </Router>
      <Router sceneId="/nose_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Nose"}
          flowCount={0}
          count={count}
          setCount={setCount}
          nextload={shuffle_g2}
        />
      </Router>
      <Router sceneId="/ear_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Ear"}
          flowCount={1}
          count={count}
          setCount={setCount}
          nextload={shuffle_g2}
        />
      </Router>
      <Router sceneId="/tongue_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Tongue"}
          flowCount={2}
          count={count}
          setCount={setCount}
          nextload={shuffle_g2}
        />
      </Router>
      <Router sceneId="/skin_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Skin"}
          flowCount={3}
          count={count}
          setCount={setCount}
          nextload={shuffle_g2}
        />
      </Router>
      <Router sceneId="/Game1_1">
        <Game1
          nextScene={"/Game1_2"}
          hintPlacement={hintPlacement}
          sethintPlacement={sethintPlacement}
          G1ImgID={6}
          G1SoundId={0}
          count={count}
          setCount={setCount}
          nextload={shuffle_g1}
        />
      </Router>
      <Router sceneId="/Game1_2">
        <Game1
          nextScene={"/Game1_3"}
          hintPlacement={hintPlacement}
          sethintPlacement={sethintPlacement}
          G1ImgID={7}
          G1SoundId={1}
          count={count}
          setCount={setCount}
          nextload={shuffle_g1}
        />
      </Router>
      <Router sceneId="/Game1_3">
        <Game1
          nextScene={"/Game1_4"}
          hintPlacement={hintPlacement}
          sethintPlacement={sethintPlacement}
          G1ImgID={8}
          G1SoundId={2}
          count={count}
          setCount={setCount}
          nextload={shuffle_g1}
        />
      </Router>
      <Router sceneId="/Game1_4">
        <Game1
          nextScene={"/Game1_5"}
          hintPlacement={hintPlacement}
          sethintPlacement={sethintPlacement}
          G1ImgID={9}
          G1SoundId={3}
          count={count}
          setCount={setCount}
          nextload={shuffle_g1}
        />
      </Router>
      <Router sceneId="/Game1_5">
        <Game1
          nextScene={"/Game1_6"}
          hintPlacement={hintPlacement}
          sethintPlacement={sethintPlacement}
          G1ImgID={10}
          G1SoundId={4}
          count={count}
          setCount={setCount}
          nextload={shuffle_g1}
        />
      </Router>
      <Router sceneId="/Game1_6">
        <Game1
          nextScene={"/Game1_7"}
          hintPlacement={hintPlacement}
          sethintPlacement={sethintPlacement}
          G1ImgID={11}
          G1SoundId={5}
          count={count}
          setCount={setCount}
          nextload={shuffle_g1}
        />
      </Router>
      <Router sceneId="/Game1_7">
        <Game1
          nextScene={"/Scene5"}
          hintPlacement={hintPlacement}
          sethintPlacement={sethintPlacement}
          G1ImgID={12}
          G1SoundId={6}
          count={count}
          setCount={setCount}
          nextload={shuffle_g1}
        />
      </Router>
    </GameContainer>
  );
}

export default App;
