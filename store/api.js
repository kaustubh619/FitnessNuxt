console.log(process.env.NODE_ENV)

var url

if (process.env.NODE_ENV == 'development') {
  var url = 'http://127.0.0.1:8000'
} else {
  var url = ''
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

  postTrainerInquiry: url + '/find_trainer'
})

export const getters = {}
