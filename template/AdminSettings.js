export const AdminSettings = {
  homepage_settings: {
    layout: 'original', // 'original', 'starbucks', 'red'
    contentPosition: 'left' // 'left', 'right', top, 'bottom', 'center'
  },
  businesses_listening_settings: {
    layout: 'map', // 'original', 'grid', 'map', 'listing', 'appointments//pending'
    information_show_status: {
      business_header: true, // true or false
      business_logo: true, // true or false
      address: true, // true or false
      delivery_fee: true, // true or false
      delivery_pickup_time: true, // true or false
      delivery_distance: true, // true or false
      business_review: true // true or false
      // favorite_business: true // true or false
    },
    information_type: 1 // 1, 2, 3, 4
  }
}
