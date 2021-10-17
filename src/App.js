import { memo, useCallback, useState } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import VideoPlayer from "./pages/VideoPlayer";
import Gif from "./pages/Gif";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
  align-items: center;
  flex-direction: column;
`;

const App = () => {
  const [videoSavedTime, setVideoSavedTime] = useState();
  const [youtubeVideoId, setYoutubeVideoId] = useState();
  const onSave = useCallback((id) => {
    setVideoSavedTime(Date.now());
    setYoutubeVideoId(id);
  }, []);

  return (
    <Router>
      <Switch>
        <Container>
          <Route exact path="/">
            <Home currentId={youtubeVideoId} onSave={onSave} />
          </Route>
          <Route path="/video">
            <VideoPlayer
              videoId={youtubeVideoId}
              videoSavedTime={videoSavedTime}
            />
          </Route>
          <Route path="/gif">
            <Gif />
          </Route>
        </Container>
      </Switch>
    </Router>
  );
};

export default memo(App);
