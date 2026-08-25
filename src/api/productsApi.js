import api from "../config/api";

export const getAllProducts = async (pageParam, limit) => {
    const params = new URLSearchParams({
        limit,
        skip: pageParam
    });
    const response = await api.get(`/products/search?${params}`);
    return response;
}