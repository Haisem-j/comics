import React, { Component } from "react";
import AllBooks from './AllBooks.js'
import MyList from './MyList.js'
import {connect} from 'react-redux'
import {openingMyList} from '../actions/allActions'
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
  }
  clickedBtn = () => {
    console.log("swag");
  };
  render() {
    return (
      <div id="approot" className={this.props.globalState.popUpOpen == true ? 'popUpOpen' : '' }>
        <div className="container">
          <div className="open-list" onClick={this.props.openingMyList}>
            <i className="fas fa-bars" />
          </div>
          <AllBooks />
        </div>
        <MyList />
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return state;
}
export default connect(mapStateToProps,
  {
    openingMyList
  })(App);