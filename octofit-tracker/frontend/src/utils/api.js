const buildApiUrl = (resource) => {
  const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim();
  const baseUrl = codespaceName
    ? `https://${codespaceName}-8000.app.github.dev/api/${resource}/`
    : `/api/${resource}/`;
  return baseUrl;
};

export { buildApiUrl };
