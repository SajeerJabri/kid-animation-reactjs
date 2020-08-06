import React from "react";
import "./Bird.css";
import Bird2 from "../../images/bird2.gif";
import Bird3 from "../../images/bird3.gif";
import useWebAnimations from "@wellyshen/use-web-animations";

const Bird = () => {
  const { ref } = useWebAnimations({
    keyframes: [
      { transform: "translate(0,0)" },
      { transform: "translate(-80vw,-120px)" }
    ],
    timing: {
      duration: 10000,
      iterations: Infinity
    }
  });

  return (
    <>
      <div className="bird2">
        <img src={Bird2} alt="bird" ref={ref} />
      </div>
      <div className="bird3">
        <img src={Bird3} alt="bird" />
      </div>
    </>
  );
};

export default Bird;
