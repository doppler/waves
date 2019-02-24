import React, { useState, useEffect } from "react";
import "./App.css";

const screenDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

const App = () => {
  const [dimensions, setDimensions] = useState(screenDimensions());
  const [paused, setPaused] = useState(false);
  const [sliderVisible, setSliderVisible] = useState(false);
  const { width, height } = dimensions;
  const center = { x: width / 2, y: height / 2 };
  const GridSpacing = width / 21;
  const SubSpacing = 10;
  const [pi2multiplier, setPi2multiplier] = useState(0);
  const MaxPi2Multiplier = width / (GridSpacing / SubSpacing);
  const pi2multiplierIncrement =
    ((Math.PI * 2) / ((width / GridSpacing) * SubSpacing)) * 0.25;
  let frame;

  useEffect(() => {
    if (!paused) {
      frame = requestAnimationFrame(() => {
        setPi2multiplier(
          pi2multiplier > MaxPi2Multiplier
            ? 0
            : pi2multiplier + pi2multiplierIncrement
        );
      });
    }
    return () => {
      cancelAnimationFrame(frame);
    };
  }, [pi2multiplier, paused]);

  const handleResize = () => {
    setDimensions(screenDimensions());
  };

  const handleKeyDown = event => {
    if ([32, 39, 37, 80].includes(event.keyCode)) event.preventDefault();
    const { keyCode, key, code, altKey, ctrlKey, metaKey, shiftKey } = event; // eslint-disable-line no-unused-vars
    let codeString = code.toLowerCase().replace(/arrow/, "");
    console.log({ codeString, key, keyCode });
    switch (keyCode) {
      case 32: // space
        setPaused(paused => !paused);
        break;
      case 39: // right arrow
        setPi2multiplier(
          pi2multiplier => pi2multiplier + pi2multiplierIncrement
        );
        break;
      case 37: // left arrow
        setPi2multiplier(
          pi2multiplier => pi2multiplier - pi2multiplierIncrement
        );
        break;
      case 80: // p
        setSliderVisible(sliderVisible => !sliderVisible);
        break;
      default:
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const togglePercentageSlider = event => {};
  return (
    <div id="App">
      <input
        id="percentage-slider"
        type="range"
        min={0.0}
        max={MaxPi2Multiplier}
        onChange={event => setPi2multiplier(Number(event.target.value))}
        style={{ display: sliderVisible ? "block" : "none" }}
      />
      <span
        className="percentage"
        onClick={togglePercentageSlider}
        style={{ display: sliderVisible ? "inline" : "none" }}
      >
        pi2multiplier={pi2multiplier.toFixed(8)} percentage=
        {Number((pi2multiplier / MaxPi2Multiplier) * 100).toFixed(8)}}%
      </span>
      <svg width={width} height={height}>
        {Array.from({
          length: Math.floor(width / GridSpacing) * SubSpacing + GridSpacing
        }).map((_, i) => {
          let x = (i * GridSpacing) / SubSpacing;
          let rotationFactor = Math.sin(
            (Math.PI * 2 * pi2multiplier) / (width / x)
          );
          let y = center.y + (height / 2) * rotationFactor;
          const color = -180 * rotationFactor;
          const strokeOpacity = 1 * ((i % SubSpacing) / SubSpacing);
          return (
            <g key={i}>
              <line
                x1={x}
                y1={y}
                x2={x}
                y2={0}
                style={{
                  stroke: `hsla(${color}, 100%, 50%, ${strokeOpacity})`
                }}
              />
              <circle
                cx={x}
                cy={y}
                r={2}
                style={{
                  fill: `hsla(${color}, 100%, 50%)`
                }}
              />
            </g>
          );
        })}
      </svg>
    </div>
  );
};
export default App;
