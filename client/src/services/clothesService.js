import { get, post, put, del } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/clothes';

export const getNewest = async () => await get(`${baseUrl}/newest`);
export const getMostSold = async () => await get(`${baseUrl}/most-sold`);
export const getOne = async (clothingId) => await get(`${baseUrl}/${clothingId}`);

export const search = (value) => {
    return get(`${baseUrl}/search?name=${value}`);
};

export const create = (name, description, price, type, category, model, frontImage, backImage) => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('description', description);
    formData.append('price', price);
    formData.append('type', type);
    formData.append('category', category);
    formData.append('model', model);

    formData.append('frontImage', frontImage);
    formData.append('backImage', backImage);

    return post(`${baseUrl}/add`, formData);
};

export const edit = async (clothingId, clothData) => {
    const result = await put(`${baseUrl}/${clothingId}`, clothData);

    return result;
};

// export const getLatest = async () => {
//     const result = await get(`${baseUrl}?sortBy=_createdOn%20desc&offset=0&pageSize=4`);

//     return result;
// }

// export const deleteGame = async (gameId) => await del(`${baseUrl}/${gameId}`);