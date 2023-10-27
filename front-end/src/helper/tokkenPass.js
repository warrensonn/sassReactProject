import Cookies from 'js-cookie';

const KEYTOKKEN = 'tokkenPass';

export const getTokken = () => {
  const tokken = Cookies.get(KEYTOKKEN);

  return tokken;
};

export const setTokken = (tokken) => {
  Cookies.set(KEYTOKKEN, tokken);
};
