const endpointUrls = {
  //baseUrl
  baseUrl: 'http://31.7.75.221:8002',

  //user
  login: '/Token/Login',
  register: '/Account/Register',
  verifyOtp: '/Account/AccountActivationByPhone',
  resendOtp: '/Account/ResendOtpCode',
  getUserDetail: '/Account/Info',

  //wishlist
  getUserWishlist: '/Whishlist/Index',
  deleteItemFromWishlist: 'Wishlist/DeleteItemFromWhishlist',

  //home
  getNewProducts: '/Product/NewProducts',
  // getNewProducts: '/Component/Index/HomePageNewProducts',
  getHomeCategories: '/Component/Index/HomePageCategories',
  getHomeBrands: '/Component/Index/HomePageBrands',
  getHomeBestSelleres: '/Component/Index/HomePageBestSellers',

  //product
  getproductDetail: '/Product/ProductDetails',
  sendComment: '/Product/ProductReviews',
  addToCartWishlist: '/ActionCart/AddProductCatalog',

  //search
  searchProducts: '/catalog/search',

  //brands
  getAllBrands: '/Catalog/BrandAll',
};

export default endpointUrls;
