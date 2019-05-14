import React, { Component} from 'react'
import {connect} from 'react-redux'
import {closingMyList} from '../actions/allActions'

class MyList extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {

    return (
      <section id="myList" className={this.props.globalState.listOpen == true ? 'active' : '' }>
      <h3>My List of Books</h3>
      <ul>
        <li>Harry Potter <span className="delete-btn">Delete</span></li>
      </ul>
      <div className="close-list" onClick={this.props.closingMyList}>Close List</div>
    </section>
    )
  }
}
const mapStateToProps = state => {
  return state

};
export default connect(mapStateToProps,
  {
    closingMyList
  })(MyList);






