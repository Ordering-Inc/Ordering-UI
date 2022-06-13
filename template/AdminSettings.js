export const AdminSettings = {
  homepage_settings: {
    layout: 'original', // 'original', 'starbucks', 'red'
    contentPosition: 'left' // 'left', 'right', top, 'bottom', 'center'
  },
  businesses_listening_settings: {
    layout: 'grid', // 'original', 'grid', 'map', 'listing', 'appointments//pending'
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
    information_type: 'bottom_left' // 'top_left', 'top_right', 'bottom_left', 'bottom_right'
  },
  products_listening_settings: {
    product_section: {
      information_position: 'left', //  'left', 'right', 'top', 'bottom'
      information_show_status: {
        dummy_product_images: true, // true, false
        description: true, // true, false
        image: true, // true, false
        add_icon: true // true, false
      },
      elements_type: 'original', // 'original', 'starbucks', 'starbucks-latam'
      image_scale: '1' // '0.25', '0.5', '1', '1.5', '2', '2.5'
    },
    category_section: {
      category_position: 'left', //  'left', 'right'
      isBanner: false, // true, false // not complete
      name_position: 'left' //  'left', 'right'
    }
  },
  product_popup_settings: {
    layout: 'original', // 'original', 'left', 'right', 'full'
    multiple_images_enabled: true, // true, false
    product_comments: {
      isShowed: true, // true, false
      max_characters: 200 // number || '' empty means Infinity
    }
  },
  checkout_settings: {
    layout: 'original', // 'original', 'starbucks', 'old', 'appointments'
    information_show_status: {
      map: true, // true, false
      customer_information: {
        email: true, // true, false
        phone: true, // true, false
        address: true, // true, false
        photo: true // true, false
      },
      business_information: {
        logo: true, // true, false
        email: true, // true, false
        phone: true, // true, false
        address: true // true, false
      },
      delivery_type_special: {
        delivery_detail: false, // true, false
        driver_tip_view: 'options', // 'options', 'input', *already implemented
        eat_in_table_number: true, // true, false
        curbside_detail: {
          car_type: true, // true, false
          car_model: true, // true, false
          car_color: true, // true, false
          car_plate: true, // true, false
          spot_number: true, // true, false
          comments: true // true, false
        }
      },
      order_information: {
        product_images: true, // true, false
        delivery_pickup_time: true, // true, false
        comments: true // true, false
      },
      payments_options: 'options' // 'options', 'dropList'
    }
  }
}
