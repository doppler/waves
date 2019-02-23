import React, { useState, useEffect } from "react";
import "./App.css";

const screenDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

const App = () => {
  const [dimensions, setDimensions] = useState(screenDimensions());
  const { width, height } = dimensions;
  const center = { x: width / 2, y: height / 2 };
  const GridSpacing = width / 21;
  const SubSpacing = 10;
  const [pi2multiplier, setPi2multiplier] = useState(21);
  const MaxPi2Multiplier = width / (GridSpacing / SubSpacing);
  useEffect(() => {
    requestAnimationFrame(() => {
      setPi2multiplier(
        pi2multiplier > MaxPi2Multiplier
          ? 0
          : pi2multiplier +
              ((Math.PI * 2) / ((width / GridSpacing) * SubSpacing)) * 0.25
      );
    });
  }, [pi2multiplier]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions(screenDimensions());
    });
  }, []);

  return (
    <div id="App">
      <span className="percentage">
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
            <>
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
                key={i}
                cx={x}
                cy={y}
                r={2}
                style={{
                  fill: `hsla(${color}, 100%, 50%)`
                }}
              />
            </>
          );
        })}
      </svg>
    </div>
  );
};
export default App;
