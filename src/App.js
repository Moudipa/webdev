import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import AppRouter from "./components/AppRouter/AppRouter";
import ProductList from './components/ProductList';

/*function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Products</h1>
      </header>
      <ProductList />
    </div>
  );
}

export default App;*/

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppRouter />
      </Provider>
    );
  }
}

export default App;
