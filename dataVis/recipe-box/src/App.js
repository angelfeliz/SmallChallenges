import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'
import './App.css';
import RecipeForm from './RecipeForm';
import Bookcase from './Bookcase';
import RecipeDetail from './RecipeDetail';

class App extends Component{
  constructor(){
    super();
    this.state = {
      title: '',
      recipe: '',
      recipes: Object.keys(window.sessionStorage),
      showRecipe: false,
      showForm: false
    }
  }

  onClickRemove= () => {
    window.sessionStorage.removeItem(this.state.title);
    this.setState({...this.state, showRecipe: false, recipes: Object.keys(window.sessionStorage) });
  }
  onClickEdit = () => {
    let recipe = window.sessionStorage.getItem(this.state.title);
    this.setState({...this.state, title: this.state.title, recipe: recipe, showForm: true, showRecipe: false});
  }
  onChangeInput = (e) => {
    let property = e.target.name;
    let value = e.target.value;
    this.setState({[property]:value});
  }
  onClickToggleForm = () => {
    this.setState({...this.state, showForm: !this.state.showForm, showRecipe: false, title: "", recipe:""});
  }
  onClickSave = () => {
    if(typeof(window.Storage) !== "undefined") {
      let key = this.state.title;
      let value = this.state.recipe;
       window.sessionStorage.setItem(key, value);
       this.setState({...this.state, showForm:false, title:"", recipe:"", recipes:Object.keys(window.sessionStorage)});
    }
    else {
      //Not suppor Storage
    }
  }
  onClickShowRecipeDetail = (text) => {
    let recipe = window.sessionStorage.getItem(text.item);
    this.setState({...this.state, showRecipe:false});
    window.setTimeout(() => {    this.setState(
      {...this.state, recipe: recipe, title: text.item, showRecipe: true});
    },500);
  }

  render() {
    return(
      <div>
        <button className="btn-show_form" onClick={()=>this.onClickToggleForm()}>Create recipe</button>

        {
          this.state.showForm ?
            <RecipeForm
              title={this.state.title}
              recipe={this.state.recipe}
              onChangeInput={this.onChangeInput}
              onClickSave={this.onClickSave}
        /> : null
      }

      <div className="flex-row">
        <Bookcase
          onClickShowRecipeDetail={this.onClickShowRecipeDetail}
          recipes = {this.state.recipes}
          />

      <CSSTransitionGroup
        transitionName="slip"
        >
          {this.state.showRecipe ?
          <RecipeDetail
            onClickRemove={this.onClickRemove}
            onClickEdit={this.onClickEdit}
            text = {this.state.recipe}
            />:null}
			</CSSTransitionGroup>
        </div>
      </div>
    )
  }
}

export default App;
