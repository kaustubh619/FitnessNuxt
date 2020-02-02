console.log(process.env.NODE_ENV)

var url

if (process.env.NODE_ENV == 'development') {
  var url = 'http://127.0.0.1:8000'
} else {
  var url = '/backend'
}

export const state = () => ({
  login: url + '/api/login/customer',

  signup: url + '/api/register',

  user_ext: url + '/user_ext_post',

  getImages: url + '/carousel_image',

  getBlogCategoryList: url + '/blog_categories',

  getAllBlog: url + '/blog_post',

  getAllBlogWP: url + '/blog',

  getBlogsByCategory: url + '/blogbycategory/',

  getBlogComment: url + '/blogcomment/',

  getBlogPost: url + '/blogbyid/',

  postComment: url + '/comment/',

  likePost: url + '/blog_like/',

  postInquiry: url + '/contact',

  getGalleryImages: url + '/gallery',

  getAllProducts: url,

  getProductsWithPagination: url + '/product_pagination',

  getProductCategories: url + '/product/category',

  getProductsWithCategory: url + '/productbycategory/',

  getProductsAll: url,

  getPlans: url + '/subscription_plan',

  getUserDetails: url + '/user_ext/',

  calculateBMR: url + '/bmr_calculator/',

  bmrValues: url + '/bmr_values/',

  PostBMR: url + '/post_bmr',

  postTrainerInquiry: url + '/find_trainer',

  getProductById: url + '/prodbyid/',

  addToCart: url + '/create_cart',

  getCartItems: url + '/cartbyuser/',

  removeCartItem: url + '/cart_item_delete/',

  createOrderSession: url + '/create_order_session',

  getOrderSession: url + '/get_order_session/',

  createProductOrder: url + '/create_order',

  editOrders: url + '/edit_order/',

  getUserCoupon: url + '/get_coupon/',

  getTrainersList: url + '/trainer_list',

  getTrainerBySlug: url + '/get_trainer_by_slug/',

  getUser: url + '/user/',

  getUserRatings: url + '/update_ratings/',

  user_ratings_update: url + '/user_update_ratings/',

  postRating: url + '/post_ratings',

  allProductRatings: url + '/all_ratings/',

  postSub: url + '/user_sub'
})

export const getters = {}
