export const Category = [
  { name: 'Ăn nhanh', CategoryImage: 'https://cdn.tgdd.vn/2020/12/CookProduct/Thuc-an-nhanh-la-gi-tac-hai-cua-thuc-an-nhanh-va-cac-loai-tot-cho-suc-khoe-1-1200x676.jpg' },
  { name: 'Nướng', CategoryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjNBSn_xwdvnsacM4yKq66Z_lhToN4feelzw&s' },
  { name: 'Cà phê', CategoryImage: 'https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2024/8/14/2121767707dcce179f6866d132a2d6a384312f9-1723600454996-1723600455541950721311.jpg' },
  { name: 'Trà sữa', CategoryImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdf2vqBIiha7URosKRZ-jDvQyaHB7JEIKhQ&s' },
  { name: 'Sinh tố', CategoryImage: 'https://www.bartender.edu.vn/wp-content/uploads/2020/06/cach-lam-sinh-to-trai-cay-ngon.jpg' },
  { name: 'Lẩu', CategoryImage: 'https://cdnv2.tgdd.vn/mwg-static/common/Common/keovll.jpg' },
];

export const Banner = [
  'https://inan2h.vn/wp-content/uploads/2022/12/in-banner-quang-cao-do-an-3.jpg',
  'https://file.hstatic.net/1000301274/article/gdn01152024_sale_dau_nam_900x600_5b31fc30739b455b9b073d3b0f10fabf_grande.jpg',
  'https://img.freepik.com/free-vector/discount-voucher-with-details_1017-7944.jpg'
];

export const Store = [
  {
    Name: 'Gadana - Chân gà cay',
    ActiveTime: '08:00 - 23:00 (T2 - CN)',
    Rating: 4.1,
    ReviewTime: '50+',
    Address: '123 Đường A, Quận 1, TP. HCM',
    DeliveryTime: '11-20 phút',
    Logo: 'https://via.placeholder.com/150', // Logo cửa hàng
    ImageProduct: 'https://via.placeholder.com/600x200', // Ảnh cửa hàng (banner)
    Product: {
      'Món chính': [
        { name: 'Chân gà nướng', price: '50.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Chân gà cay', price: '55.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Cánh gà chiên', price: '60.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Mực chiên mắm', price: '65.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bò xào sả ớt', price: '70.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Món ăn kèm': [
        { name: 'Khoai tây chiên', price: '30.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Gỏi xoài', price: '35.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Rau trộn', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Dưa leo', price: '20.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Cơm trắng', price: '10.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Đồ uống': [
        { name: 'Trà chanh', price: '15.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Nước ngọt', price: '12.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Sữa đậu nành', price: '18.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bia', price: '20.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Nước lọc', price: '5.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Tráng miệng': [
        { name: 'Chè Thái', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Kem vani', price: '30.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh flan', price: '20.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Chuối nướng', price: '15.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Rau câu', price: '12.000', ImageProduct: 'https://via.placeholder.com/100' }
      ]
    }
  },
  {
    Name: 'Pizza Paradise',
    ActiveTime: '09:00 - 22:00 (T2 - CN)',
    Rating: 4.5,
    ReviewTime: '100+',
    Address: '456 Đường B, Quận 3, TP. HCM',
    DeliveryTime: '20-30 phút',
    Logo: 'https://via.placeholder.com/150', // Logo cửa hàng
    ImageProduct: 'https://via.placeholder.com/600x200', // Ảnh cửa hàng (banner)
    Product: {
      'Pizza': [
        { name: 'Pizza hải sản', price: '150.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Pizza thập cẩm', price: '140.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Pizza bò', price: '130.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Pizza gà', price: '120.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Pizza chay', price: '110.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Món ăn kèm': [
        { name: 'Khoai tây nghiền', price: '40.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Salad Caesar', price: '45.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh mì bơ tỏi', price: '35.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Gà viên chiên', price: '50.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Xúc xích nướng', price: '55.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Đồ uống': [
        { name: 'Coca Cola', price: '15.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Pepsi', price: '15.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Trà đào', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Soda chanh', price: '20.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Nước khoáng', price: '10.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Tráng miệng': [
        { name: 'Bánh Tiramisu', price: '40.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh su kem', price: '35.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Kem dâu', price: '30.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh pancake', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Pudding xoài', price: '20.000', ImageProduct: 'https://via.placeholder.com/100' }
      ]
    }
  },
  {
    Name: 'Café Sáng Tạo',
    ActiveTime: '07:00 - 21:00 (T2 - CN)',
    Rating: 4.3,
    ReviewTime: '200+',
    Address: '789 Đường C, Quận 5, TP. HCM',
    DeliveryTime: '10-15 phút',
    Logo: 'https://via.placeholder.com/150', // Logo cửa hàng
    ImageProduct: 'https://via.placeholder.com/600x200', // Ảnh cửa hàng (banner)
    Product: {
      'Cà phê': [
        { name: 'Cà phê sữa', price: '30.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Cà phê đen', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Cà phê dừa', price: '35.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Cappuccino', price: '40.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Latte', price: '40.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Sinh tố': [
        { name: 'Sinh tố bơ', price: '35.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Sinh tố xoài', price: '30.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Sinh tố dâu', price: '30.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Sinh tố chuối', price: '28.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Sinh tố việt quất', price: '38.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Bánh ngọt': [
        { name: 'Bánh mì nướng', price: '20.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh su kem', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh quế', price: '18.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh donut', price: '22.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh chocolate', price: '30.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Tráng miệng': [
        { name: 'Pudding caramel', price: '28.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Tiramisu', price: '35.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Cheese cake', price: '40.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Chè đậu xanh', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh flan', price: '30.000', ImageProduct: 'https://via.placeholder.com/100' }
      ]
    }
  },
  {
    Name: 'Bánh Mì Thịt Nướng',
    ActiveTime: '06:00 - 22:00 (T2 - CN)',
    Rating: 4.2,
    ReviewTime: '150+',
    Address: '321 Đường D, Quận 7, TP. HCM',
    DeliveryTime: '10-15 phút',
    Logo: 'https://via.placeholder.com/150', // Logo cửa hàng
    ImageProduct: 'https://via.placeholder.com/600x200', // Ảnh cửa hàng (banner)
    Product: {
      'Bánh mì thịt nướng': [
        { name: 'Bánh mì thịt nướng', price: '35.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh mì chả cá', price: '40.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh mì gà xé', price: '38.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh mì bò xào', price: '45.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh mì xíu mại', price: '38.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Đồ ăn kèm': [
        { name: 'Khoai tây chiên', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Rau sống', price: '15.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Dưa leo', price: '10.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Chả giò', price: '18.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Xúc xích nướng', price: '20.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Nước uống': [
        { name: 'Trà sữa', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Nước ép cam', price: '28.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Soda chanh', price: '22.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Cà phê đá', price: '20.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Nước suối', price: '10.000', ImageProduct: 'https://via.placeholder.com/100' }
      ],
      'Tráng miệng': [
        { name: 'Bánh flan', price: '18.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Chè đậu xanh', price: '20.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Chè hạt sen', price: '22.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Kem dừa', price: '25.000', ImageProduct: 'https://via.placeholder.com/100' },
        { name: 'Bánh cam', price: '18.000', ImageProduct: 'https://via.placeholder.com/100' }
      ]
    }
  }
];
