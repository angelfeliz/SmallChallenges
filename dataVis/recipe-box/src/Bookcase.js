import React from 'react';
import PropTypes from 'prop-types';

const Bookcase = (props) => (
     <ul>
      {props.recipes.map(item => (
         <li onClick={()=>props.onClickShowRecipeDetail({item})}>
           {item}
         </li>
    ))}
     </ul>
)

Bookcase.propTypes = {
  recipes: PropTypes.array,
  onCLickshowRecipeDetail: PropTypes.func
}


export default Bookcase;
