import api from "../config/api";

export const getAllProducts = async (pageParam, limit) => {
    const params = new URLSearchParams({
        limit,
        skip: pageParam
    });
    const response = await api.get(`/products/search?${params}`);
    return response;
}

export const getProductById = async (id) => {
    const response = await api.get(`/products/${id}`);
    return response;
};
