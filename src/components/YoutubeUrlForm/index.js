/*
 *
 * Component: `YoutubeUrlForm`.
 *
 */
import { useCallback } from "react"
import PropTypes from 'prop-types'
import styled from 'styled-components'

const URL_INPUT_FORM_NAME = "youtube-video-url"

const ErrorText = styled.h4`
  color: red;
`

const StyledForm = styled.form`
  margin-bottom: 20px;
`

const YoutubeUrlForm = ({ formError, onSubmit }) => {
  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const urlValue = event.target.elements[URL_INPUT_FORM_NAME].value


    onSubmit(urlValue);
  }, [onSubmit])

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input name={URL_INPUT_FORM_NAME} placeholder="Insert Youtube URL" />
      <input type="submit" value="Save" />
      {formError && <ErrorText>Please insert a valid youtube URL</ErrorText>}
    </StyledForm>
  )
}
YoutubeUrlForm.propTypes = {
  formError: PropTypes.bool,
  VideoUrl: PropTypes.string,
  onSubmit: PropTypes.func.isRequired,
}

export default YoutubeUrlForm