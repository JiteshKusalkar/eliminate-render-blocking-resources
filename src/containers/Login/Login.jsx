import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import { initialValues, validationSchema } from './validation';

const Login = () => {
  const [loading, setLoading] = useState(false);

  const onSubmit = (values) => {
    console.log('login', values);
    setLoading(true);
    setTimeout(() => setLoading(false), 3000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form
      className="auth-form"
      onSubmit={formik.handleSubmit}
      noValidate
      autoComplete="off"
    >
      <p
        style={{ fontSize: '50px', textAlign: 'center', marginBottom: '50px' }}
      >
        Restaurant Reviews
      </p>
      <p style={{ fontSize: '30px', textAlign: 'center' }}>Login</p>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...formik.getFieldProps('email')}
          isInvalid={formik.touched.email && !!formik.errors.email}
          type="text"
          placeholder="Email"
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          {...formik.getFieldProps('password')}
          isInvalid={formik.touched.password && !!formik.errors.password}
          type="password"
          placeholder="Password"
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.password}
        </Form.Control.Feedback>
      </Form.Group>

      <Button disabled={loading} type="submit">
        Login
        {loading && <FontAwesomeIcon icon={faSpinner} className="fa-pulse" />}
      </Button>

      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Don't have an account? <Link to="/auth/signup">Signup</Link>
      </p>
    </Form>
  );
};

export default Login;
