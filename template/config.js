import settings from './config.json'

const keysToNull = [
  'franchiseId',
  'franchiseSlug',
  'businessSlug'
]

keysToNull.forEach(key => {
  if (settings[key] === '0' || settings[key] === 'null') {
    settings[key] = null
  };
})

export default settings
