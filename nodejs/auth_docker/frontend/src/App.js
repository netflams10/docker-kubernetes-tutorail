import React from 'react'

// State management
import store from './redux/store';
import { Provider } from 'react-redux';

// Styles
import "./asssets/scss/index.scss";

// Navigation Entry Point
import Navigation from "./navigation";


const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

const mapStateToProps = state => ({
    error: state.error.error,
    state: state.error.message
})

export default App;
