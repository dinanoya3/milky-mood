import styled from "styled-components";
import image1 from "./image1.jpeg";

export const Image = styled.div.attrs(({ $movedX, $movedY }) => ({
  style: {
    transform: `translate(${$movedX}px, ${$movedY}px)`,
  },
}))`
  height: 100px;
  width: 100px;
  position: relative;
  background-image: url(${image1});
  /* corresponds to the ImageContainer's height and width */
  background-size: 400px 600px;
  /* set the initial position of image within square */
  background-position: ${({ $initialX, $initialY }) =>
    `-${$initialX * 100}px -${$initialY * 100}px`};
`;
