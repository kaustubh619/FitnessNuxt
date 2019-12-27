console.log(process.env.NODE_ENV)

var url

if (process.env.NODE_ENV == 'development') {
  var url = 'http://127.0.0.1:8000/api/'
} else {
  var url = '/api/'
}

export const state = () => ({
  login: url + 'login/customer',

  signup: url + 'register',

  user_ext: 'http://127.0.0.1:8000/user_ext_post',

  getImages: 'http://127.0.0.1:8000/carousel_image',

  getBlogCategoryList: 'http://127.0.0.1:8000/blog_categories',

  getAllBlog: 'http://127.0.0.1:8000/blog_post',

  getAllBlogWP: 'http://127.0.0.1:8000/blog',

  getBlogsByCategory: 'http://127.0.0.1:8000/blogbycategory/',

  getBlogComment: 'http://127.0.0.1:8000/blogcomment/',

  getBlogPost: 'http://127.0.0.1:8000/blogbyid/',

  postComment: 'http://127.0.0.1:8000/comment/',

  likePost: 'http://127.0.0.1:8000/blog_like/',

  postInquiry: 'http://127.0.0.1:8000/contact',

  getGalleryImages: 'http://127.0.0.1:8000/gallery',

  getAllProducts: 'http://127.0.0.1:8000/',

  getProductsWithPagination: 'http://127.0.0.1:8000/product_pagination',

  getProductCategories: 'http://127.0.0.1:8000/product/category',

  getProductsWithCategory: 'http://127.0.0.1:8000/productbycategory/',

  getProductsAll: 'http://127.0.0.1:8000',

  getPlans: 'http://127.0.0.1:8000/subscription_plan',

  getUserDetails: 'http://127.0.0.1:8000/user_ext/',

  calculateBMR: 'http://127.0.0.1:8000/bmr_calculator/',

  bmrValues: 'http://127.0.0.1:8000/bmr_values/',

  PostBMR: 'http://127.0.0.1:8000/post_bmr'
})

export const getters = {}
