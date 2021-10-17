import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom'
import Home from '..';


jest.mock('react-router-dom', () => ({
  __esModule: true,
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: jest.fn()
  })
}));



describe('YoutubeUrlForm', () => {

  afterAll(() => {
    jest.clearAllMocks();
  })

  it('should match snapshot without `back-to-current-video-url`', () => {
    const result = render(<Home />)
    expect(result).toMatchSnapshot()
  })

  it('should match snapshot with `back-to-current-video-url`', () => {
    const result = render(
      <Router>

        <Home currentId="mocked-id" />
      </Router>
    )
    expect(result).toMatchSnapshot()
  })
})
