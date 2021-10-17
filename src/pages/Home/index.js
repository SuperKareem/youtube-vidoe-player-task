/*
 *
 * Page: `Home`.
 *
 */
import { memo, useCallback, useState } from "react";
import PropTypes from "prop-types";
import YoutubeUrlForm from "../../components/YoutubeUrlForm";
import { extractVideoIdFromUrl } from "../../helpers";
import { Link, useHistory } from "react-router-dom";

const Home = ({ onSave, currentId }) => {
  const [formHasError, setFormError] = useState(false);
  const { push } = useHistory();

  const onFormSubmit = useCallback(
    (url) => {
      const id = extractVideoIdFromUrl(url);

      if (!id) {
        setFormError(true);
        return;
      }

      onSave(id);
      setFormError(false);
      push("/video");
    },
    [push, onSave]
  );

  return (
    <>
      <YoutubeUrlForm formError={formHasError} onSubmit={onFormSubmit} />
      {currentId && <Link to="/video">Back to current video</Link>}
    </>
  );
};

Home.propTypes = {
  onSave: PropTypes.func,
};

export default memo(Home);
