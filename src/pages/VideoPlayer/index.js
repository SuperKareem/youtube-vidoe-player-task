/*
 *
 * Page: `VideoPlayer`.
 *
 */
import PropTypes from "prop-types";
import { memo, useCallback, useMemo } from "react";
import { Link, useHistory } from "react-router-dom";
import YouTube from "react-youtube";

const VideoPlayer = ({ options, videoId, videoSavedTime }) => {
  const { push } = useHistory();

  const timeDifferecnce = useMemo(() => {
    const differnece = videoSavedTime - Date.now();

    return differnece > 1000 ? timeDifferecnce / 1000 : undefined;
  }, [videoSavedTime]);

  const onReady = useCallback(
    (event) => {
      const differnece = (Date.now() - videoSavedTime) / 1000;

      if (differnece > 1) {
        event.target.seekTo(differnece);
      }
    },
    [videoSavedTime]
  );

  if (!videoId) {
    push("/");
    return null;
  }

  return (
    <>
      <YouTube onReady={onReady} videoId={videoId} opts={options} />
      <Link to="/">Change URL</Link>
      <Link to="/gif">GIF Page</Link>
    </>
  );
};

VideoPlayer.propTypes = {
  options: PropTypes.exact({
    height: PropTypes.string,
    width: PropTypes.string,
    playerVars: {
      autoplay: PropTypes.number,
    },
  }),
  videoId: PropTypes.string.isRequired,
  videoSavedTime: PropTypes.number,
};

VideoPlayer.defaultProps = {
  options: {
    height: "390",
    width: "640",
    playerVars: {
      autoplay: 1,
    },
  },
};

export default memo(VideoPlayer);
