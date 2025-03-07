import { get, post } from '../lib/request.js';

const baseUrl = 'https://tshirt-latest.onrender.com/users';

export const login = (email, password) => {
    return post(`${baseUrl}/login`, {
        email,
        password,
    });
};

export const register = (firstName, lastName, email, phoneNumber, address, region, city, password) => {
    return post(`${baseUrl}/register`, {
        firstName,
        lastName,
        email,
        phoneNumber,
        address,
        region,
        city,
        password,
    });
};

export const profile = async () => await get(`${baseUrl}/profile`);
export const forgottenPassword = async (email) => await post(`${baseUrl}/forgot-password`, { email });
export const resetPassword = async (password, token) => await post(`${baseUrl}/reset-password`, { password, token });