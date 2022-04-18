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
              src={
                num >= 1
                  ? Assets?.intro?.sprites[14]
                  : Assets?.intro?.sprites[13]
              }
              alt="txt"
              id="stars"
              className={num === 1 ? "star" : ""}
            />
            <Image
              src={
                num >= 2
                  ? Assets?.intro?.sprites[14]
                  : Assets?.intro?.sprites[13]
              }
              alt="txt"
              id="stars"
              className={num === 2 ? "star" : ""}
            />
            <Image
              src={
                num >= 3
                  ? Assets?.intro?.sprites[14]
                  : Assets?.intro?.sprites[13]
              }
              alt="txt"
              id="stars"
              className={num === 3 ? "star" : ""}
            />
            <Image
              src={
                num >= 4
                  ? Assets?.intro?.sprites[14]
                  : Assets?.intro?.sprites[13]
              }
              alt="txt"
              id="stars"
              className={num === 4 ? "star" : ""}
            />
            <Image
              src={
                num >= 5
                  ? Assets?.intro?.sprites[14]
                  : Assets?.intro?.sprites[13]
              }
              alt="txt"
              id="stars"
              className={num === 5 ? "star" : ""}
            />
            <Image
              src={
                num >= 6
                  ? Assets?.intro?.sprites[14]
                  : Assets?.intro?.sprites[13]
              }
              alt="txt"
              id="stars"
              className={num === 6 ? "star" : ""}
            />
            <Image
              src={
                num >= 7
                  ? Assets?.intro?.sprites[14]
                  : Assets?.intro?.sprites[13]
              }
              alt="txt"
              id="stars"
              className={num === 7 ? "star" : ""}
            />
          </div>
        </div>
      )}
    </>
  );
}
