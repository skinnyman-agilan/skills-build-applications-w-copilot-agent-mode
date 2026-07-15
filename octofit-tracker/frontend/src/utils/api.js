const buildApiUrl = (resource) => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
  if (codespaceName) {
    return `https://${codespaceName}-8000.app.github.dev/api/${resource}/`;
  }
  return `/api/${resource}/`;
};

export { buildApiUrl };
