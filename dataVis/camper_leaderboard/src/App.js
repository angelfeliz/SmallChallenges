import React, { Component } from 'react';
import { getTopHundredUsers } from './api';
import { sortDescent } from './helper';
import Badge from './Badge';
import Header from './Header';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      feed:[],
      allTime:[],
      recent:[]
    }
  }

  onClickSort = (property) =>  {
    let filter = property === "allTime" ? "alltime" : "recent";
    sortDescent(this.state[property], filter, (array)=>{
           this.setState({feed: array});
    });
  }

  componentDidMount() {
     getTopHundredUsers((fccUsers)=>{
       this.setState({feed:fccUsers.recent, recent:fccUsers.recent, allTime: fccUsers.allTime});
     });
  }

  render(){
    return(
      <div>
        <Header
          onClickSortByAllTime = {this.onClickSort}
          onClickSortByRecent = {this.onClickSort}
          />
      <div className="flex-row container-main">
        <h1>{this.state.feed.lengh}</h1>
        {
          this.state.feed.length > 0 ?
            this.state.feed.map((item, index) => {
              return(<Badge
                key={index}
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
