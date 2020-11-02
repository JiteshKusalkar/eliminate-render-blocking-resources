import { object, string, ref } from 'yup';

const passwordRegex = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/;

export const passwordRules = `Password must have at least 1 upper case,
1 lower case, 1 special character and must be at least 8 characters long.`;

export const initialValues = {
  name: '',
  email: '',
  password: '',
  rePassword: '',
};

export const validationSchema = object().shape({
  name: string().required('Name is required.').max(30, 'Character limit 30.'),
  email: string().email('Invalid email.').required('Username is required.'),
  password: string()
    .matches(passwordRegex, `Password doesn't match the pattern.`)
    .required('Password is required.'),
  rePassword: string()
    .required('Please re-enter password.')
    .oneOf([ref('password'), null], `Passwords don't match.`),
});
