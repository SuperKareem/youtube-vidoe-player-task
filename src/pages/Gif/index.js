/*
 *
 * Page: `Gif`.
 *
 */
import { Link } from "react-router-dom";
import babyGif from "./images/baby-gif.gif";

const Gif = () => {
  return (
    <>
      <img src={babyGif} alt="baby-gif" />
      <Link to="/video">Back to current video</Link>
    </>
  );
};

export default Gif;
