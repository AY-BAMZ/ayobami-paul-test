const BASE_URL = "https://dummyjson.com/";


const URI_MAP = {
  dummy_products: {
    products: `${BASE_URL}products`,
    search: `${BASE_URL}products/search`,
    categories: `${BASE_URL}products/categories`,
    create_product: `${BASE_URL}products/add`,
    delete_product: `${BASE_URL}products`,
    edit_product: `${BASE_URL}products`,
  },
};

export default URI_MAP;