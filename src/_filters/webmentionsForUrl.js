module.exports = (webmentions, url) => {
  const allowedTypes = ['mention-of', 'in-reply-to']
  const allowedHTML = {
    allowedTags: ['b', 'i', 'em', 'strong', 'a'],
    allowedAttributes: {
      a: ['href']
    }
  }

  const clean = entry => {
    const {content} = entry
    if (content && content['content-type'] === 'text/html') {
      content.value = sanitizeHTML(content.value, allowedHTML)
    }
    return entry
  };

  return webmentions
    .filter(entry => entry['wm-target'] === url)
    .filter(entry => allowedTypes.includes(entry['wm-property']))
    .filter(entry => !!entry.content)
    .map(clean)
};
