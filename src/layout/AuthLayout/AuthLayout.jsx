import { Suspense, lazy } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Loader from '../../components/Loader';

import './style.scss';

const Login = lazy(() =>
  import(
    /* webpackChunkName: "login" */ /* webpackPreload: true */ '../../containers/Login'
  )
);
const Signup = lazy(() =>
  import(
    /* webpackChunkName: "signup" */ /* webpackPrefetch: true */ '../../containers/Signup'
  )
);

const AuthLayout = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Switch>
        <Route path="/auth/login" component={Login} />
        <Route path="/auth/signup" component={Signup} />
        <Redirect from="/auth" to="/auth/login" />
      </Switch>
    </Suspense>
  );
};

export default AuthLayout;
