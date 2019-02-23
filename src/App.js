import React, { useState, useEffect } from "react";
import "./App.css";

const screenDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

const Grid = props => {
  const { center, width, height, GridSpacing } = props;
  let x = 0 - GridSpacing + (center.x % GridSpacing);
  let y = 0 - GridSpacing + (center.y % GridSpacing);
  return (
    <g id="grid">
      {Array.from({ length: Math.ceil(width / GridSpacing) }).map((_, i) => {
        x = x + GridSpacing;
        return (
          <line key={i} className="gline" x1={x} y1={0} x2={x} y2={height} />
        );
      })}
      {Array.from({ length: Math.ceil(height / GridSpacing) }).map((_, i) => {
        y = y + GridSpacing;
        return (
          <line className="gline" key={i} x1={0} y1={y} x2={width} y2={y} />
        );
      })}
    </g>
  );
};

const App = () => {
  const [dimensions, setDimensions] = useState(screenDimensions());
  const { width, height } = dimensions;
  const center = { x: width / 2, y: height / 2 };
  const GridSpacing = width / 21;
  const SubSpacing = 10;
  const [xoffset, setXoffset] = useState(0);
  const MaxOffset = width / (GridSpacing / SubSpacing);
  useEffect(() => {
    requestAnimationFrame(() => {
      setXoffset(
        xoffset > MaxOffset
          ? 0
          : xoffset +
              ((Math.PI * 2) / ((width / GridSpacing) * SubSpacing)) * 0.25
      );
    });
  }, [xoffset]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions(screenDimensions());
    });
  }, []);

  return (
    <div id="App">
      <span className="percentage">{`${Number(
        (xoffset / MaxOffset) * 100
      ).toFixed(2)}%`}</span>
      <svg width={width} height={height}>
        <Grid {...{ width, height, GridSpacing, center }} />
        {Array.from({
          length: Math.floor(width / GridSpacing) * SubSpacing + GridSpacing
        }).map((_, i) => {
          let x = (i * GridSpacing) / SubSpacing;
          let rotationFactor = Math.sin((Math.PI * 2 * xoffset) / (width / x));
          return (
            <circle
              key={i}
              cx={x}
              cy={center.y + (height / 2) * rotationFactor}
              r={2}
              style={{
                fill: `hsla(${-180 * rotationFactor}, 100%, 50%)`
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};
export default App;
