export const AdminSettings = {
  homepage_settings: {
    layout: 'original', // 'original', 'starbucks', 'red'
    contentPosition: 'left' // 'left', 'right', top, 'bottom', 'center'
  },
  businesses_listening_settings: {
    layout: 'original', // 'original', 'grid', 'map', 'listing', 'appointments//pending'
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
    information_type: 'top_left' // 'top_left', 'top_right', 'bottom_left', 'bottom_right'
  },
  products_listening_settings: {
    product_section: {
      information_position: 'left', //  'left', 'right', 'top', 'bottom'
      information_show_status: {
        dummy_product_images: true, // true, false ***not implemented**
        description: true, // true, false
        image: true, // true, false
        add_icon: true // true, false
      },
      number_of_elements: 1, // 1, 2, 3 ***not implemented**
      image_size: '1x' // '1x', '2x', '3x', '4x', '5x',
    },
    category_section: {
      category_position: 'left', //  'left', 'right'
      banner: true, // true, false
      name_position: 'left' //  'left', 'right'
    }
  }
}
