import React, { Component } from 'react';
import PropTypes from 'prop-types';
import showdown from 'showdown';
import logo from './logo.svg';
import './App.css';
import { textMarkdown } from './textExample';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      text: textMarkdown
    };

  }
  markerToText = (text) => {
    let converter = new showdown.Converter();
    return converter.makeHtml(text);
  }

  onChangeEdior = (e) => {
    let text = e.target.value;
    this.setState({text: text});
  }

  render() {
    return(
    <div className="flex-row container">
        <Editor
          onChangeEdior={this.onChangeEdior}
          text={this.state.text}
          />

        <ScreenDisplay
          text={this.state.text}
          markerToText={this.markerToText}
          />
     </div>
    )
  }
}

const Editor = (props) => (
    <textarea type="text" rows="35" onChange={(e)=> props.onChangeEdior(e)}>
      {props.text}
     </textarea>
)

const ScreenDisplay = (props) => (
  <div>
    <span dangerouslySetInnerHTML={{__html: props.markerToText(props.text)}}></span>
  </div>
)

Editor.propTypes = {
  text: PropTypes.string.isRequired
}

ScreenDisplay.propTypes = {
  text: PropTypes.string.isRequired
}

export default App;
