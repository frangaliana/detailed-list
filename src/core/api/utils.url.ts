const trimLeft = (str, remove) => (str ? (str.startsWith(remove) ? str.slice(1, str.length) : str) : '');
const trimRight = (str, remove) => (str ? (str.endsWith(remove) ? str.slice(0, -1) : str) : '');

export const generateUrl = (host, port, ...path) => {
  const safeHost = trimRight(host, '/');
  const safePort = port ? `:${port}` : '';
  const safePath = path && path.length > 0 ? path.map((r) => trimLeft(r, '/')).join('/') : '';

  return `${safeHost}${safePort}/${safePath}`;
};
