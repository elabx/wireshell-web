module.exports = (pageUrl, navUrl) => {
  if (!pageUrl || !navUrl) return false
  if (navUrl === pageUrl) return true
  if (navUrl !== '/' && pageUrl.lastIndexOf(navUrl, 0) === 0) return true
  return false
};
