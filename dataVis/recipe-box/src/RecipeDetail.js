import React from 'react';
import PropTypes from 'prop-types';


const RecipeDetail = (props) => (
  <div className="recipe-container">
    <p>{props.text}</p>
    <div className="btn_container">
      <button className="btn-remove" onClick={()=>props.onClickRemove()}>Remove</button>
      <button className="btn-edit" onClick={()=>props.onClickEdit()}>Edit</button>
    </div>
  </div>
)

RecipeDetail.propTypes = {
  text: PropTypes.string,
  onClickRemove: PropTypes.func,
  onClickEdit: PropTypes.func
}

export default RecipeDetail;
