import React, { useState } from "react";
import { GlobalStyle, ImageContainer, Wrapper } from "./styles";
import Header from "./components/Header";
import ImgBox from "./components/ImgBox";
import Footer from "./components/Footer";

// 24 sets of pairs (grid: 4cols x 6rows)
// prettier-ignore
const matrix = [
  [0, 0], [1, 0], [2, 0], [3, 0],
  [0, 1], [1, 1], [2, 1], [3, 1],
  [0, 2], [1, 2], [2, 2], [3, 2],
  [0, 3], [1, 3], [2, 3], [3, 3],
  [0, 4], [1, 4], [2, 4], [3, 4],
  [0, 5], [1, 5], [2, 5], [3, 5]
];

// now it's a function expression
const App = () => {
  // TEMPLATE LITERAL
  // const message = (name) => {
  //   return `${name} is a front end developer at Vimeo.`;
  // };
  const [distance, setDistance] = useState(1);

  const easing = (num) => Math.pow(num, 3);

  const calculateDistance = ([x, y]) => {
    // store array containing px positions of center of window
    const center = [window.innerWidth / 2, window.innerHeight / 2];
    // console.log(center);

    // store max value of hypotenuse/max distance from center of browser
    const maxHypotenuse = Math.hypot(center[0], center[1]);
    // console.log("maxHypotenuse: ", maxHypotenuse);

    // calculate how far cursor is from center of window
    const hypotenuse = Math.hypot(center[0] - x, center[1] - y);
    // console.log("hypotenuse: ", hypotenuse);

    // distance evaluates to a number between 0 and 1
    const distance = hypotenuse / maxHypotenuse;
    // console.log("distance: ", distance);

    const easeDistance = easing(distance);
    // console.log("easeDistance: ", easeDistance);

    setDistance(easeDistance);
  };

  const handleMove = ({ clientX, clientY }) => {
    // console.log(clientX, clientY);
    calculateDistance([clientX, clientY]);
  };

  const handleTouchMove = ({ touches }) => {
    // console.log(touches);
    calculateDistance([touches[0].clientX, touches[0].clientY]);
  };

  console.log(distance);

  return (
    <>
      {/* <h1>Hello world</h1>
      {/* TAGGED TEMPLATE LITERAL */}
      {/* <h2>{message`Dina`}</h2> */}
      <GlobalStyle />
      <Header />
      <Wrapper onMouseMove={handleMove} onTouchMove={handleTouchMove}>
        <ImageContainer $isTogether={distance < 0.001}>
          {matrix.map(([x, y], index) => (
            <ImgBox key={index} x={x} y={y} percent={distance} />
          ))}
        </ImageContainer>
      </Wrapper>
      <Footer />
    </>
  );
};

export default App;
