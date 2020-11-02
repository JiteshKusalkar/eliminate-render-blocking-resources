import { useFormik } from 'formik';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { initialValues, validationSchema, passwordRules } from './validation';

const Signup = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const onSubmit = (values) => {
    console.log('signup', values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      history.push('/auth/login');
    }, 3000);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  return (
    <Form className="auth-form" onSubmit={formik.handleSubmit} noValidate>
      <p
        style={{ fontSize: '50px', textAlign: 'center', marginBottom: '50px' }}
      >
        Restaurant Reviews
      </p>
      <p style={{ fontSize: '30px', textAlign: 'center' }}>Register</p>
      <Form.Group controlId="name">
        <Form.Label>Name</Form.Label>
        <Form.Control
          {...formik.getFieldProps('name')}
          isInvalid={formik.touched.name && !!formik.errors.name}
          type="text"
          placeholder="Name"
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.name}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control
          {...formik.getFieldProps('email')}
          isInvalid={formik.touched.email && !!formik.errors.email}
          type="email"
          placeholder="Email"
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.email}
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group controlId="password">
        <Form.Label>
          Password
          <OverlayTrigger
            placement="right"
            overlay={<Tooltip id="password-rule">{passwordRules}</Tooltip>}
          >
            <FontAwesomeIcon
              color="#007bff"
              icon={faInfoCircle}
              style={{ marginLeft: '10px' }}
            />
          </OverlayTrigger>
        </Form.Label>
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

      <Form.Group controlId="re-password">
        <Form.Label>Re-enter Password</Form.Label>
        <Form.Control
          {...formik.getFieldProps('rePassword')}
          isInvalid={formik.touched.rePassword && !!formik.errors.rePassword}
          type="password"
          placeholder="Re-enter Password"
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.rePassword}
        </Form.Control.Feedback>
      </Form.Group>

      <Button disabled={loading} type="submit">
        Register
        {loading && <FontAwesomeIcon icon={faSpinner} className="fa-pulse" />}
      </Button>

      <p style={{ textAlign: 'center', marginTop: '20px' }}>
        Alreay have an account? <Link to="/auth/login">Login</Link>
      </p>
    </Form>
  );
};

export default Signup;
