
// @see {@link https://www.labnol.org/code/19797-regex-youtube-id}
//URL example = https://www.youtube.com/watch?v=n62sWtterLw
export const extractVideoIdFromUrl = (url) => {
  if (!url) {
    return undefined;
  }

  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
  var match = url.match(regExp);
  if (match && match[7].length === 11) {
    return match[7];
  }

  return undefined;
}