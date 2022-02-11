const endpointUrls = {
  //baseUrl
  baseUrl: 'http://31.7.75.221:8002',

  //user
  login: '/Token/Login',
  register: '/Account/Register',
  verifyOtp: '/Account/AccountActivationByPhone',
  resendOtp: '/Account/ResendOtpCode',
  getUserDetail: '/Account/Info',
  getUserAddresses: '/Account/Addresses',
  addNewAddress: '/Account/Addresses',
  editUserInfo: '/Account/Info',

  //requestProduct
  sendProductRequest: '/ProductRequest/Create',
  getProductRequestsList: '/ProductRequest/List',
  addNoteToProductRequest: '/ProductRequest/AddNote',


  //wishlist
  getUserWishlist: '/Wishlist/Index',
  deleteItemFromWishlist: 'Wishlist/DeleteItemFromWhishlist',

  //home
  getNewProducts: '/Product/NewProducts',
  // getNewProducts: '/Component/Index/HomePageNewProducts',
  getHomeCategories: '/Component/Index/HomePageCategories',
  getHomeBrands: '/Component/Index/HomePageBrands',
  getHomeBestSelleres: '/Component/Index/HomePageBestSellers',
  getHomeFeatured: '/Component/Index/CollectionFeaturedProducts',

  //product
  getproductDetail: '/Product/ProductDetails',
  sendComment: '/Product/ProductReviews',
  addToCartWishlist: '/ActionCart/AddProductCatalog',

  //search
  searchProducts: '/catalog/search',

  //brands
  getAllBrands: '/Catalog/BrandAll',
  getBrandProduct: '/Catalog/Brand',
};

export default endpointUrls;
