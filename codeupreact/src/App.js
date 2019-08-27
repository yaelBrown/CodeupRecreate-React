import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Layout from './components/Layout';


export default class App extends Component {
  render() {
    return (
      <navbar/>
    );
  };
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);