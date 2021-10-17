import { extractVideoIdFromUrl } from '..'

const TEST_URL = "https://www.youtube.com/watch?v=n62sWtterLw"
const TEST_ID = "n62sWtterLw"

describe('extractVideoIdFromUrl', () => {
  it('should return video id when passing a valid `youtube` URL', () => {
    const result = extractVideoIdFromUrl(TEST_URL)
    expect(result).toBe(TEST_ID)
  });

  it('should return `undefined` when passing invalid `youtube` URL', () => {
    const result = extractVideoIdFromUrl('https://invalid-url.com/')
    expect(result).toBe(undefined)
  });
});
