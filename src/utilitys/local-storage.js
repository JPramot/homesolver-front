const TOKEN = "token";

export const storeToken = (token) => localStorage.setItem(TOKEN, token);

export const getToken = () => localStorage.getItem(TOKEN);

export const removeToken = () => localStorage.removeItem(TOKEN);
