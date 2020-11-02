import { object, string } from 'yup';

export const initialValues = {
  email: '',
  password: '',
};

export const validationSchema = object().shape({
  email: string().email('Invalid email').required('Email is required.'),
  password: string().required('Password is required.'),
});
