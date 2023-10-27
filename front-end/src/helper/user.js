const KEYUSER = 'userKey';

export const setUser = (data) => {
  localStorage.setItem(KEYUSER, JSON.stringify(data));
};

export const getUser = () => {
  const data = localStorage.getItem(KEYUSER);
  return JSON.parse(data);
};
