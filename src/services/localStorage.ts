export const setItem = (key: string, data: string) =>
  localStorage.setItem(key, data);

export const getItem = (key: string) => localStorage.getItem(key);

export const removeItem = (key: string) => localStorage.removeItem(key);

export const extractJSON = (key: string) => {
  try {
    const value = getItem(key);
    return JSON.parse(value || "{}");
  } catch {
    return {};
  }
};

export const saveJSON = (key: string, value: any) =>
  setItem(key, JSON.stringify(value));
