import React, { Component } from "react";
import { openingInfoBook } from "../actions/allActions";
import { connect } from "react-redux";

class AllBooks extends Component {
  constructor() {
    super();
    this.state = {
      name: "Joe"
    };
    this.showAllBooks = this.showAllBooks.bind(this)
  }
  showAllBooks = () => {
   return this.props.booksData.map(book => {
      return (
        <div key={book.title} className="book-container">
        <div
          
          onClick={this.props.openingInfoBook.bind(null, book)}
          className="book"
          style={{
            backgroundImage:
              `url('${book.coverURL}')`
          }}
        />
        </div>
      );
    });
  };
  render() {
    return (
      <section className="all-books">
        
          {this.showAllBooks()}

      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    booksData: state.booksData
  };
};
export default connect(
  mapStateToProps,
  { openingInfoBook }
)(AllBooks);
