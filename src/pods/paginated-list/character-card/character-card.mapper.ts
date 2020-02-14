export const mapToId = (url: string): string => {
  const urlToArray = !!url && url.split('/');

  return urlToArray[urlToArray.length - 2];
};
