import React from 'react';
import PropTypes from 'prop-types';

 const Header = (props) => (
  <div className="flex-row header">
    <button onClick={() => props.onClickSortByRecent()}>Sort by last 30 days</button>
    <button onClick={() => props.onClickSortByAllTime()}>Sort by all time</button>
  </div>
)

Header.propTypes = {
  onClickSortByRecent: PropTypes.func,
  onClickSortByAllTime: PropTypes.func
}

export default Header;
