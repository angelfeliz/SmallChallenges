import React from 'react';
import PropTypes from 'prop-types';

const  Badge = (props) => (
    <div className="container-badge flex-row">
      <img src={props.imgUri} alt={"Avatar"}/>
      <div className="container-inline flex-column">
        <span className="title-name">{props.fullName}</span>
        <div className="flex-row">
        <div className="flex-column">
          <label className="sign">last 30 days</label>
          <span className="point">{props.monthPoint}</span>
        </div>
        <div className="flex-column">
          <label className="sign">All time</label>
          <span className="point">{props.allTimePoint}</span>
        </div>
        </div>
      </div>
    </div>
)

Badge.propTypes = {
  imgUri: PropTypes.string,
  fullName: PropTypes.string,
  monthPoint: PropTypes.number,
  allTimePoint: PropTypes.number
}

export default  Badge;
