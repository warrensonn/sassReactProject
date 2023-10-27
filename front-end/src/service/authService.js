import { setTokken } from '../helper/tokkenPass';
import { setUser } from '../helper/user';

export const login = async (user) => {
  const data = await fetch('localhost:8001/api/auth/signin', {
    method: 'POST',
    body: JSON.stringify(user)
  });

  const json = data.json();

  if (data.tokken) {
    setTokken(data.tokken);
    setUser(data);
  }

  return json;
};
