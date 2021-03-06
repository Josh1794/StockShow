import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email } = props;

  return (
    <div className='mainPage'>
      <h3>Welcome, {email}</h3>
      <h4>Portfolios</h4>
      <div>
        User's Portfolios Here (map a simple component that links to a larger
        portfolio view)
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
};
