import { useState } from 'react';

const useForm = (initState) => {
  const [data, setData] = useState(initState);
  const [errors, setErrors] = useState(initState);

  const hangleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setData((currentState) => {
      return {
        ...currentState,
        [name]: value
      };
    });

    if (value.length <= 1) {
      setErrors({
        ...errors,
        [name]: 'error.tropcourt'
      });
      return;
    } else {
      setErrors({
        ...errors,
        [name]: ''
      });
    }

    validate(name, value);
  };

  const validate = (name, value) => {
    //A function to validate each input values

    switch (name) {
      case 'firstName':
      case 'lastName':
      case 'username':
        if (!new RegExp(/^[a-zA-Z0-9]+$/).test(value)) {
          setErrors({
            ...errors,
            [name]: `votre username n'est pas valide`
          });
        } else {
          setErrors({
            ...errors,
            [name]: ''
          });
        }
        break;
      case 'currentPassword':
      case 'newPassword':
      case 'password':
        if (
          !new RegExp(
            // eslint-disable-next-line no-useless-escape
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/
          ).test(value)
        ) {
          setErrors({
            ...errors,
            [name]: 'le mot de pass neut respect pas le critaire'
          });
        } else {
          setErrors({
            ...errors,
            [name]: ''
          });
        }
        break;
    }
  };

  const setInitialData = (data) => {
    setData(data);
  };

  return { data, errors, hangleChange, setInitialData };
};

export default useForm;
