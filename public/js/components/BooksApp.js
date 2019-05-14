webpackJsonp([0],{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _AllBooks = __webpack_require__(237);

var _AllBooks2 = _interopRequireDefault(_AllBooks);

var _MyList = __webpack_require__(238);

var _MyList2 = _interopRequireDefault(_MyList);

var _reactRedux = __webpack_require__(47);

var _allActions = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = function (_Component) {
  _inherits(App, _Component);

  function App() {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

    _this.clickedBtn = function () {
      console.log("swag");
    };

    _this.state = {
      name: "Joe"
    };
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { id: 'approot', className: this.props.globalState.popUpOpen == true ? 'popUpOpen' : '' },
        _react2.default.createElement(
          'div',
          { className: 'container' },
          _react2.default.createElement(
            'div',
            { className: 'open-list', onClick: this.props.openingMyList },
            _react2.default.createElement('i', { className: 'fas fa-bars' })
          ),
          _react2.default.createElement(_AllBooks2.default, null)
        ),
        _react2.default.createElement(_MyList2.default, null)
      );
    }
  }]);

  return App;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  openingMyList: _allActions.openingMyList
})(App);

/***/ }),

/***/ 233:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(47);

var _allActions = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Modal = function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    _classCallCheck(this, Modal);

    var _this = _possibleConstructorReturn(this, (Modal.__proto__ || Object.getPrototypeOf(Modal)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(Modal, [{
    key: 'render',
    value: function render() {

      var temp = this.props.globalState.openInfoBook;
      return _react2.default.createElement(
        'section',
        { id: 'modal', className: this.props.globalState.popUpOpen == true ? 'active' : '' },
        _react2.default.createElement(
          'div',
          { className: 'modal-container' },
          _react2.default.createElement(
            'div',
            { className: 'close-modal', onClick: this.props.closingInfoBook },
            _react2.default.createElement('i', { className: 'fas fa-times' })
          ),
          _react2.default.createElement(
            'div',
            { className: 'modal-grid' },
            _react2.default.createElement(
              'div',
              { className: 'images' },
              _react2.default.createElement('div', { className: 'cover', style: { backgroundImage: 'url("' + (this.props.globalState.openInfoBook.coverURL == undefined ? '' : this.props.globalState.openInfoBook.coverURL) + '")' } })
            ),
            _react2.default.createElement(
              'div',
              { className: 'info' },
              _react2.default.createElement(
                'h2',
                null,
                this.props.globalState.openInfoBook.title
              ),
              _react2.default.createElement(
                'div',
                { className: 'info-line' },
                _react2.default.createElement(
                  'span',
                  { className: 'bold' },
                  'Author:'
                ),
                this.props.globalState.openInfoBook.author
              ),
              _react2.default.createElement(
                'div',
                { className: 'info-line' },
                _react2.default.createElement(
                  'span',
                  { className: 'bold' },
                  'Category:'
                ),
                this.props.globalState.openInfoBook.category
              ),
              _react2.default.createElement(
                'div',
                { className: 'info-line' },
                _react2.default.createElement(
                  'span',
                  { className: 'bold' },
                  'Published:'
                ),
                this.props.globalState.openInfoBook.published
              ),
              _react2.default.createElement(
                'p',
                { className: 'review' },
                this.props.globalState.openInfoBook.review
              )
            )
          )
        )
      );
    }
  }]);

  return Modal;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  closingInfoBook: _allActions.closingInfoBook
})(Modal);

/***/ }),

/***/ 234:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(69);

var _appStateReducer = __webpack_require__(240);

var _booksDataReducer = __webpack_require__(241);

exports.default = (0, _redux.combineReducers)({
    globalState: _appStateReducer.AppStateReducer,
    booksData: _booksDataReducer.booksDataReducer
});

/***/ }),

/***/ 237:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _allActions = __webpack_require__(79);

var _reactRedux = __webpack_require__(47);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AllBooks = function (_Component) {
  _inherits(AllBooks, _Component);

  function AllBooks() {
    _classCallCheck(this, AllBooks);

    var _this = _possibleConstructorReturn(this, (AllBooks.__proto__ || Object.getPrototypeOf(AllBooks)).call(this));

    _this.showAllBooks = function () {
      return _this.props.booksData.map(function (book) {
        return _react2.default.createElement(
          "div",
          { key: book.title, className: "book-container" },
          _react2.default.createElement("div", {

            onClick: _this.props.openingInfoBook.bind(null, book),
            className: "book",
            style: {
              backgroundImage: "url('" + book.coverURL + "')"
            }
          })
        );
      });
    };

    _this.state = {
      name: "Joe"
    };
    _this.showAllBooks = _this.showAllBooks.bind(_this);
    return _this;
  }

  _createClass(AllBooks, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "section",
        { className: "all-books" },
        this.showAllBooks()
      );
    }
  }]);

  return AllBooks;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return {
    booksData: state.booksData
  };
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, { openingInfoBook: _allActions.openingInfoBook })(AllBooks);

/***/ }),

/***/ 238:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(47);

var _allActions = __webpack_require__(79);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MyList = function (_Component) {
  _inherits(MyList, _Component);

  function MyList() {
    _classCallCheck(this, MyList);

    var _this = _possibleConstructorReturn(this, (MyList.__proto__ || Object.getPrototypeOf(MyList)).call(this));

    _this.clickedBtn = function () {
      console.log('swag');
    };

    _this.state = {
      name: 'Joe'
    };
    return _this;
  }

  _createClass(MyList, [{
    key: 'render',
    value: function render() {

      return _react2.default.createElement(
        'section',
        { id: 'myList', className: this.props.globalState.listOpen == true ? 'active' : '' },
        _react2.default.createElement(
          'h3',
          null,
          'My List of Books'
        ),
        _react2.default.createElement(
          'ul',
          null,
          _react2.default.createElement(
            'li',
            null,
            'Harry Potter ',
            _react2.default.createElement(
              'span',
              { className: 'delete-btn' },
              'Delete'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'close-list', onClick: this.props.closingMyList },
          'Close List'
        )
      );
    }
  }]);

  return MyList;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
  return state;
};
exports.default = (0, _reactRedux.connect)(mapStateToProps, {
  closingMyList: _allActions.closingMyList
})(MyList);

/***/ }),

/***/ 239:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(46);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(104);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _App = __webpack_require__(232);

var _App2 = _interopRequireDefault(_App);

var _Modal = __webpack_require__(233);

var _Modal2 = _interopRequireDefault(_Modal);

var _reactRedux = __webpack_require__(47);

var _redux = __webpack_require__(69);

var _allReducers = __webpack_require__(234);

var _allReducers2 = _interopRequireDefault(_allReducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = document.getElementById("app");
var modal = document.getElementById("modalroot");
var store = (0, _redux.createStore)(_allReducers2.default);

_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_App2.default, null)
), app);
_reactDom2.default.render(_react2.default.createElement(
  _reactRedux.Provider,
  { store: store },
  _react2.default.createElement(_Modal2.default, null)
), modal);

/***/ }),

/***/ 240:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var initialState = {
  myList: [],
  openInfoBook: {},
  popUpOpen: false,
  listOpen: false
};
var newState = void 0;

var AppStateReducer = exports.AppStateReducer = function AppStateReducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments[1];

  switch (action.type) {
    case "ADD_BOOK":
      var myList = [].concat(_toConsumableArray(state.myList), [action.payload]);
      newState = Object.assign({}, state, {
        myList: myList
      });
      return newState;
      break;
    case "REMOVE_BOOK":
      var myList = state.myList.filter(function (item) {
        item.id !== action.payload;
      });
      newState = Object.assign({}, state, {
        myList: myList
      });
      return newState;
      break;
    case "OPEN_INFO_BOOK":
      newState = Object.assign({}, state, {
        openInfoBook: action.payload,
        popUpOpen: true
      });
      console.log('============NEW STATe');
      console.log(newState);
      return newState;
      break;
    case "CLOSE_INFO_BOOK":
      newState = Object.assign({}, state, {
        popUpOpen: false
      });
      return newState;
      break;
    case "OPEN_MY_LIST":
      newState = Object.assign({}, state, {
        listOpen: true
      });
      console.log('============NEW STATe');
      console.log(newState);
      return newState;
      break;
    case "CLOSE_MY_LIST":
      newState = Object.assign({}, state, {
        listOpen: false
      });
      return newState;
      break;

    default:
      return state;
      break;
  }
};

/***/ }),

/***/ 241:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var booksDataReducer = exports.booksDataReducer = function booksDataReducer() {
    return [{
        id: '1',
        title: 'Spider-Verse',
        author: 'Christos Gage',
        category: 'Superhero',
        published: 'April 29, 2015',
        coverURL: 'https://is2-ssl.mzstatic.com/image/thumb/Video124/v4/27/db/6d/27db6d6e-8f9c-94e9-65d6-d8f982be7e9f/pr_source.lsr/268x0w.png',
        review: '"Spider-Verse" is a 2014 comic book storyline published by Marvel Comics. It features multiple alternative versions of Spider-Man that had appeared in various media, all under attack by Morlun and his family, the Inheritors'
    }, {
        id: '2',
        title: 'Dark Reign',
        author: 'Daniel Way',
        category: 'Fiction',
        published: 'July 17 2009',
        coverURL: 'http://t2.gstatic.com/images?q=tbn:ANd9GcTHUF2gvR5-j54WKG4DkR3682NZlFGVuwXOXhW61-NUXPiUePJO',
        review: '"Dark Reign" is a 2008–09 comic book branding used by Marvel Comics. It deals with the aftermath of the "Secret Invasion" storyline, which led to a shift of power in the Marvel Universe toward Norman Osborn. The title "Dark Reign" refers to Osborns rise to national power and the ramifications thereof. '
    }, {
        id: '3',
        title: 'Fear Itself',
        author: 'Matt Fraction',
        category: 'Comics',
        published: 'October 12 2011',
        coverURL: 'https://i.annihil.us/u/prod/marvel/i/mg/9/c0/4e68c38da4b74/portrait_uncanny.jpg',
        review: 'The comic "Fear Itself" is a 2011 crossover comic book storyline published by Marvel Comics, consisting of a seven-issue, eponymous miniseries written by Matt Fraction and illustrated by Stuart Immonen'
    }, {
        id: '4',
        title: 'Deadpool Kills the Marvel Universe',
        author: 'Cullen Bunn',
        category: 'Comics',
        published: ' August 1, 2012',
        coverURL: 'https://images-na.ssl-images-amazon.com/images/I/81GMUwoP7QL.jpg',
        review: '"An infinite number of realities come under attack when a rogue self-aware version of Deadpool sets out to destroy his own fictional existence and all of reality along with it by gutting the progenitors of the universe -- all the other Deadpools!"'
    }, {
        id: '5',
        title: 'Planet Hulk',
        author: 'Greg Pak',
        category: 'Comics',
        published: 'May 16 2006',
        coverURL: 'https://images-na.ssl-images-amazon.com/images/S/cmx-images-prod/Item/15083/15083._SX360_CLs%7C360,553%7Ccu/cmx-cu-sash-lg.png%7C0,0,361,554%20208,401,152,152_QL80_TTD_.jpg',
        review: '"Planet Hulk" is a Marvel Comics storyline that ran primarily through issues of The Incredible Hulk started in 2006. It dealt with the Marvel heroes decision to send the Hulk away, his acclimation to and conquest of the planet where he landed, and his efforts to return to Earth to take his revenge."'
    }];
};

/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var addingBook = exports.addingBook = function addingBook(book) {
    return {
        type: 'ADD_BOOK',
        payload: book
    };
};
var removingBook = exports.removingBook = function removingBook(book) {
    return {
        type: 'REMOVE_BOOK',
        payload: book
    };
};
var openingInfoBook = exports.openingInfoBook = function openingInfoBook(book) {
    return {
        type: 'OPEN_INFO_BOOK',
        payload: book
    };
};
var closingInfoBook = exports.closingInfoBook = function closingInfoBook(book) {
    return {
        type: 'CLOSE_INFO_BOOK',
        payload: book
    };
};
var openingMyList = exports.openingMyList = function openingMyList() {
    return {
        type: 'OPEN_MY_LIST'
    };
};
var closingMyList = exports.closingMyList = function closingMyList() {
    return {
        type: 'CLOSE_MY_LIST'
    };
};

/***/ })

},[239]);