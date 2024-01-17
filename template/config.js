import settings from './config.json'

const keysToNull = [
  'franchiseId',
  'franchiseSlug',
  'businessSlug',
  'store_facebook_pixel_id',
  'store_google_analytics_id',
  'store_segment_id'
]

keysToNull.forEach(key => {
  if (settings[key] === '0' || settings[key] === 'null') {
    settings[key] = null
  };
})

export default settings
