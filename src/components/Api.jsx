import axios from 'axios';

const HTTP_ALL_PRODUCTS = 'https://fakestoreapi.com/products';
const HTTP_CATEGORIES = 'https://fakestoreapi.com/products/categories';
const HTTP_SPECIFIC_CATEGORY = 'https://fakestoreapi.com/products/category';

export async function getAllProducts() {
  try {
    const response = await axios.get(`${HTTP_ALL_PRODUCTS}`);
        return response.data;
  } catch (error) {
      console.log(error)
  }   
}

export async function getAllCategories() {
  try {
    const response = await axios.get(`${HTTP_CATEGORIES}`);
        return response.data;
  } catch (error) {
      console.log(error)
  }   
}

export async function getProduct(id) {
  try {
    const response = await axios.get(`${HTTP_ALL_PRODUCTS}/${id}`);
        return response.data;
  } catch (error) {
      console.log(error)
  }   
}

export async function getProductsInCategory(category) {
  try {
    const response = await axios.get(`${HTTP_SPECIFIC_CATEGORY}/${category}`);
        return response.data;
  } catch (error) {
      console.log(error)
  }   
}