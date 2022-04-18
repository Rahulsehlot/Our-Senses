import { useState, useEffect, useContext } from "react";
import { SceneContext } from "../contexts/SceneContext";
import Image from "../utils/elements/Image";
import { LoadStars } from "./Helper_function";

export default function Star({ num }) {
  const [isLoading, setisLoading] = useState(true);
  const { Assets } = useContext(SceneContext);

  const [Grey, setGrey] = useState("");
  const [Gold, setGold] = useState("");

  useEffect(() => {
    LoadStars(setGrey, setGold);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 300);
  }, []);

  return (
    <>
      {" "}
      {!isLoading && (
        <div className="fadeup">
          <Image
            src={Assets?.intro?.sprites[12]}
            alt="txt"
            id="fadeup"
            className="progress_Bar"
          />

          <div id="star_wrap0" style={{ position: "fixed" }}>
            <Image
              src={Assets?.intro?.sprites[13]}
              alt="txt"
              id="fadeup"
              className="star_off"
            />
            <Image
              src={Assets?.intro?.sprites[13]}
              alt="txt"
              id="fadeup"
              className="star_off"
            />
            <Image
              src={Assets?.intro?.sprites[13]}
              alt="txt"
              id="fadeup"
              className="star_off"
            />
            <Image
              src={Assets?.intro?.sprites[13]}
              alt="txt"
              id="fadeup"
              className="star_off"
            />
            <Image
              src={Assets?.intro?.sprites[13]}
              alt="txt"
              id="fadeup"
              className="star_off"
            />
            <Image
              src={Assets?.intro?.sprites[13]}
              alt="txt"
              id="fadeup"
              className="star_off"
            />
            <Image
              src={Assets?.intro?.sprites[13]}
              alt="txt"
              id="fadeup"
              className="star_off"
            />
          </div>
          <div id="star_wrap1" style={{ position: "fixed" }}>
            <Image
              src={Assets?.intro?.sprites[14]}
              alt="txt"
              id="stars"
              className={num === 1 ? "current_star" : ""}
              style={{ display: num >= 1 ? "block" : "none" }}
            />
            <Image
              src={Assets?.intro?.sprites[14]}
              alt="txt"
              id="stars"
              className={num === 2 ? "current_star" : ""}
              style={{ display: num >= 2 ? "block" : "none" }}
            />
            <Image
              src={Assets?.intro?.sprites[14]}
              alt="txt"
              id="stars"
              className={num === 3 ? "current_star" : ""}
              style={{ display: num >= 3 ? "block" : "none" }}
            />
            <Image
              src={Assets?.intro?.sprites[14]}
              alt="txt"
              id="stars"
              className={num === 4 ? "current_star" : ""}
              style={{ display: num >= 4 ? "block" : "none" }}
            />
            <Image
              src={Assets?.intro?.sprites[14]}
              alt="txt"
              id="stars"
              className={num === 5 ? "current_star" : ""}
              style={{ display: num >= 5 ? "block" : "none" }}
            />
            <Image
              src={Assets?.intro?.sprites[14]}
              alt="txt"
              id="stars"
              className={num === 6 ? "current_star" : ""}
              style={{ display: num >= 6 ? "block" : "none" }}
            />
            <Image
              src={Assets?.intro?.sprites[14]}
              alt="txt"
              id="stars"
              className={num === 7 ? "current_star" : ""}
              style={{ display: num >= 7 ? "block" : "none" }}
            />
          </div>
        </div>
      )}
    </>
  );
}
