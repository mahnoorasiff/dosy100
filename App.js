import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import AppSecond from './Appsecond';

const initialState = {
  pic: 'dog'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'Dog':
      return { pic: 'dog' }
    case 'Bunny':
      return { pic: 'bunny' }
    case 'Panda':
      return { pic: 'panda' }
    case 'Cat':
      return { pic: 'cat' }
    case 'Koala':
      return { pic: 'koala' }
    case 'Monkey':
      return { pic: 'monkey' }

  }
  return state
}

const store = createStore(reducer)


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <AppSecond />
      </Provider>
    );
  }
}


export default App;
