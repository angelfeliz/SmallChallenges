import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getTopHundredUsers } from './api';
import { sortDescent } from './helper';
import Badge from './Badge';
import Header from './Header';
import './App.css';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      feed:[],
      allTime:[],
      recent:[]
    }
  }

  onClickSortByAllTime = () =>  {
    let arraySort = sortDescent.call(this.state.allTime,"alltime");
    console.log(arraySort);
    /*this.state.allTime.sort((a,b) => {
      return b.alltime - a.alltime ;
    })*/
    this.setState({feed: arraySort});
  }
  onClickSortByRecent = () =>  {
    let arraySort = this.state.recent.sort((a,b) => {
      return b.recent - a.recent;
    })
    this.setState({feed: arraySort});
  }

  componentDidMount() {
     getTopHundredUsers((fccUsers)=>{
       console.log(fccUsers);
       this.setState({feed:fccUsers.recent, recent:fccUsers.recent, allTime: fccUsers.allTime});
     });
  }
  render(){
    /*if(this.state.feed.length > 0) {
      console.log('feed ', this.state.feed.length);
    }*/
    return(
      <div>
        <Header
          onClickSortByAllTime = {this.onClickSortByAllTime}
          onClickSortByRecent = {this.onClickSortByRecent}
          />
      <div className="flex-row container-main">
        <h1>{this.state.feed.lengh}</h1>
        {
          this.state.feed.length > 0 ?
            this.state.feed.map((item, index) => {
              return(<Badge
                 fullName={item.username}
                 imgUri={item.img}
                 allTimePoint={item.alltime}
                 monthPoint={item.recent}
                 index={index}
               />)
            }) : <h1>empty</h1>
        }
      </div>
      </div>
    )
  }
}

export default App;
