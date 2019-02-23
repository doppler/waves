import React, { useState, useEffect } from "react";
import "./App.css";

const screenDimensions = () => ({
  width: window.innerWidth,
  height: window.innerHeight
});

const GridSpacing = 50;

const Grid = props => {
  const { width, height } = props.dimensions;
  const center = { x: width / 2, y: height / 2 };
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
  let x = 0 - GridSpacing + (center.x % GridSpacing);
  // let y = 0 - GridSpacing + (center.y % GridSpacing);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setDimensions(screenDimensions());
    });
  }, []);

  return (
    <div id="App">
      <svg width={width} height={height}>
        <Grid dimensions={dimensions} />
        {Array.from({
          length: Math.floor(width / GridSpacing) * 5 + GridSpacing
        }).map((_, i) => {
          x = x + GridSpacing / 5;
          return (
            <circle
              cx={x}
              cy={
                center.y + (height / 2) * Math.sin((Math.PI * 2) / (width / x))
              }
              r={2}
              style={{ stroke: "hsl(120, 100%, 50%" }}
            />
          );
        })}
      </svg>
    </div>
  );
};
export default App;
