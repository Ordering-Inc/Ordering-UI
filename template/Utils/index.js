export const checkSiteUrl = (url, fallback) => {
  if (!url) return fallback
  return url[0] === '/' ? url : `/${url}`
}
