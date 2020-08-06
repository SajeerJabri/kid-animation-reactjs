import React from "react";
import useWebAnimations from "@wellyshen/use-web-animations";
import Kid from "../../images/kidAnimate.gif";
import "./Kid.css";

const KidComp = () => {
  const nature = useWebAnimations({
    playbackRate: 0.8,
    keyframes: [{ width: "100vw" }],
    timing: {
      duration: 10000,
      iterations: Infinity
    }
  });

  const kid = useWebAnimations({
    playbackRate: 0.8,
    keyframes: {
      transform: ["translateX(90vw)"]
    },
    timing: {
      duration: 10000,
      iterations: Infinity
    }
  });
  const natureAnimate = nature.getAnimation();
  const kidAnimate = kid.getAnimation();

  const play = () => {
    natureAnimate.play();
    kidAnimate.play();
  };

  const pause = () => {
    natureAnimate.pause();
    kidAnimate.pause();
  };

  return (
    <>
      <div className="nature" ref={nature.ref}></div>
      <div className="kid">
        <img src={Kid} alt="Kid" ref={kid.ref} />
      </div>
      <div className="btn">
        <button onClick={play}>Play</button>
        <button onClick={pause}>Pause</button>
      </div>
    </>
  );
};

export default KidComp;
