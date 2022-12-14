import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Login from '../../components/auth/Login'

const PrivateRoute = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => {
  if (loading) return <Login />;
  // if (isAuthenticated) return <Component />;

  return <Navigate to='/login' />;
};

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRoute);
