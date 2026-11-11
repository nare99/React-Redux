import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Form from './views/Form';
import Users from './views/Users';


class App extends React.Component{

  render() {
    // console.log(store.getState())
    return (
      <Provider store={store}>
        <div className="App">
          <Form />
          <Users />
        </div>
      </Provider>
    );
  }
}

export default App;
