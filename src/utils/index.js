export const optimizeImage = (url, params, fallback) => {
  if (!url && fallback) return fallback
  params = params && params.length > 0 ? `,${params}` : ''
  if (url != null && url.indexOf('res.cloudinary.com') !== -1) {
    var parts = url.split('upload')
    url = `${parts[0]}upload/f_auto,q_auto${params}${parts[1]}`
  }
  return url
}

/**
 * TODO: refactor this method with current currency or some context about it
 * @param {Number} price
 */
export const formatPrice = (price) => `$ ${price.toFixed(2)}`
