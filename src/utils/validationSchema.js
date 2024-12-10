import * as Yup from 'yup';
export const signInvalidationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(6, 'Must be at least 6 characters')
    .required('Password is Required'),
});

export const watchListvalidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(3, 'Name must be at least 3 characters')
    .required('Name is Required'),
});
