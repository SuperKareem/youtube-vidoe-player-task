import { render } from '@testing-library/react';
import YoutubeUrlForm from '..';

describe('YoutubeUrlForm', () => {
  it('should match snapshot', () => {
    const result = render(<YoutubeUrlForm onSubmit={() => { }} />)
    expect(result).toMatchSnapshot()
  })
})
