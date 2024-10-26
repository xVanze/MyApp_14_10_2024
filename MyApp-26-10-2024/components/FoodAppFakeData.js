// FoodAppFakeData.js

export const categories = [
    { id: '1', name: 'Burgers', icon: '🍔' },
    { id: '2', name: 'Pizza', icon: '🍕' },
    { id: '3', name: 'Snacks', icon: '🍟' },
    { id: '4', name: 'Sushi', icon: '🍣' }
  ];
  
  export const dishes = {
    Burgers: [
      {
        id: '1',
        name: 'Burger Story',
        time: '25-30 min',
        rating: 4.7,
        image: 'https://imageproxy.wolt.com/venue/5fa919899331798bd369261b/9965fec2-4092-11ed-b6d2-165a18135ae1_menu1__1_.jpg',
        tags: 'Burgers • Snacks',
        priceLevel: 1  // 3 green dollars
      },

      {
        id: '2',
        name: 'Beast Burger',
        time: '20-25 min',
        rating: 4.9,
        image: 'https://static.wixstatic.com/media/ca52af_c90039b5e9804c0d8dc999e7527295b1~mv2.jpg/v1/fill/w_640,h_640,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/UmamiBurger.jpg',
        tags: 'Burgers • Beast',
        priceLevel: 3  // 2 green dollars, 1 gray dollar
      },

      {
        id: '3',
        name: 'King Burger',
        time: '20-25 min',
        rating: 4,
        image: 'https://burgerking.vn/media/catalog/product/cache/1/image/1800x/040ec09b1e35df139433887a97daa66f/c/o/combo-burger-bo-hanh-tay-chien.jpg',
        tags: 'Burgers • King',
        priceLevel: 2  // 2 green dollars, 1 gray dollar
      }
    ],
    Pizza: [
      {
        id: '1',
        name: 'Pizza Margherita',
        time: '20-25 min',
        rating: 4.5,
        image: 'https://nz.ooni.com/cdn/shop/articles/20220211142645-margherita-9920.jpg?crop=center&height=800&v=1680290572&width=800',
        tags: 'Pizza • Vegetarian',
        priceLevel: 2  // 2 green dollars, 1 gray dollar
      },

      {
        id: '2',
        name: 'Pepperoni Pizza',
        time: '30-35 min',
        rating: 4.8,
        image: 'https://api.pepperonis.com.vn//uploads/images/undefined-1293.jpg',
        tags: 'Pizza • Pepperoni',
        priceLevel: 3  // 3 green dollars
      },

      {
        id: '3',
        name: 'Pineapple Pizza',
        time: '30-35 min',
        rating: '1.2',
        image: 'https://lifehacker.com/imagery/articles/01HF2GW345TPVA2DNXXF59D33Y/hero-image.fill.size_1248x702.v1699834048.jpg',
        tags: 'Pizza • Pineapple',
        priceLevel: 3  // 3 green dollars
      }
    ],
    Snacks: [
      {
        id: '1',
        name: 'Fries',
        time: '10-15 min',
        rating: 4.0,
        image: 'placeholder_image_url',
        tags: 'Snacks • Fries',
        priceLevel: 1  // 1 green dollar, 2 gray dollars
      },

      {
        id: '2',
        name: 'Fries',
        time: '10-15 min',
        rating: 4.0,
        image: 'placeholder_image_url',
        tags: 'Snacks • Fries',
        priceLevel: 1  // 1 green dollar, 2 gray dollars
      },

      {
        id: '3',
        name: 'Fries',
        time: '10-15 min',
        rating: 4.0,
        image: 'placeholder_image_url',
        tags: 'Snacks • Fries',
        priceLevel: 1  // 1 green dollar, 2 gray dollars
      }
    ],
    Sushi: [
      {
        id: '1',
        name: 'Sushi Set',
        time: '30-35 min',
        rating: 4.8,
        image: 'placeholder_image_url',
        tags: 'Sushi • Seafood',
        priceLevel: 3  // 3 green dollars
      },

      {
        id: '2',
        name: 'Sushi Set',
        time: '30-35 min',
        rating: 4.8,
        image: 'placeholder_image_url',
        tags: 'Sushi • Seafood',
        priceLevel: 3  // 3 green dollars
      },

      {
        id: '3',
        name: 'Sushi Set',
        time: '30-35 min',
        rating: 4.8,
        image: 'placeholder_image_url',
        tags: 'Sushi • Seafood',
        priceLevel: 3  // 3 green dollars
      }
    ]
  };
  