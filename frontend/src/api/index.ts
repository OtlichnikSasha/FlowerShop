import {api} from '../http/api'
import {AuthorizationUserData, RegistrationUserData} from "../types/user";
import axios from "axios";

// Category
export const getCategories = async () => {
    const url = `categories`;
    return await api.get(url, {});
};

export const createCategory = async (data: object) => {
    const url = `categories`;
    return await api.post(url, data);
};
// SubCategory
export const getSubCategories = async (args: object) => {
    const url = `subCategories`;
    return await api.get(url, args);
};

export const createSubCategory = async (data: object) => {
    const url = `subCategories`;
    return await api.post(url, data);
};

// Products
export const getProducts = async (args: object) => {
    const url = `products`;
    return await api.get(url, args);
};

export const getFavoritesProducts = async (args: object) => {
    const url = `products/favorite`;
    return await api.get(url, args);
};

export const sortingProduct = async (args: object) => {
    const url = `products/sorting`;
    return await api.get(url, args);
};

export const getProductsData = async (args: object) => {
    const url = `products/data`;
    return await api.get(url, args);
};

export const getCellProducts = async () => {
    const url = `products/cell`;
    return await api.get(url, {});
};

export const getSimilarProducts = async (args: object) => {
    const url = `products/similar`;
    return await api.get(url, args);
};

export const getPopularProducts = async () => {
    const url = `products/popular`;
    return await api.get(url, {});
};


// Product
export const getProduct = async (args: object) => {
    const url = `product`;
    return await api.get(url, args);
}

export const createProduct = async (data: object) => {
    const url = `product`;
    return await api.post(url, data);
}

export const addFavorite = async (data: object) => {
    const url = `product/favorite`;
    return await api.post(url, data);
}

export const removeFavorite = async (data: object) => {
    const url = `product/favorite`;
    return await api.delete(url, data);
}

// Flowers
export const getFlowers = async () => {
    const url = `flowers`;
    return await api.get(url, {});
}

export const createFlower = async (data: object) => {
    const url = `flowers`;
    return await api.post(url, data);
}

// User
export const getUser = async (args: object) => {
    const url = `user`;
    return await api.get(url, args);
}

export const registration = async (data: RegistrationUserData) => {
    const url = `user/registration`;
    return await api.post(url, data);
}

export const authorization = async (data: AuthorizationUserData) => {
    const url = `user/authorization`;
    return await api.post(url, data);
}

// Basket
export const getBasket = async (args: object) =>{
    const url = `basket`;
    return await api.get(url, args);
}
interface AddBasketData{
    userId: number,
    productId: number,
    count: number
}
export const addToBasket = async (data: AddBasketData) =>{
    const url = `basket`;
    return await api.post(url, data);
}

export const removeFromBasket = async (args: object) =>{
    const url = `basket`;
    return await api.delete(url, args);
}




