import { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from 'react-router-dom';
import Loader from './components/Loader';
import AuthLayout from './layout/AuthLayout';

const Routes = () => {
  return (
    <Router>
      <Suspense fallback={<Loader />}>
        <Switch>
          <Route path="/auth" component={AuthLayout} />
          <Redirect from="*" to="/auth" />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default Routes;
