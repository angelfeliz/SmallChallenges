import React from 'react';
import PropTypes from 'prop-types';

const RecipeForm = (props) => (
  <div className="modal_view">
   <div className="flex-column">
     <input name="title" className="title-input" type="text" onChange={(e)=>props.onChangeInput(e)} value={props.title}/>
     <textarea name="recipe" row="40" onChange={(e) => props.onChangeInput(e)}>
       {props.recipe}
     </textarea>
    <button className="btn-save" onClick={() => props.onClickSave()}>Save</button>
    </div>
    </div>
)
RecipeForm.propTypes = {
  onChangeInput: PropTypes.func.isRequired,
  title: PropTypes.strinng,
  recipe: PropTypes.string,
  onClickSave: PropTypes.func
}

export default RecipeForm;
