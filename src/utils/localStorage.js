export const addItemsToLocalStorage = (key, items) => {
  return localStorage.setItem(key, JSON.stringify(items));
};

export const getItemsFromLocalStorage = (key) => {
  return localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
};
