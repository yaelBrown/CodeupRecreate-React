import React, { Component } from 'react'
import Navbar from './components/Navbar';
import Reboot from './components/Reboot';
import Programs from './components/Programs';
import Why from './components/Why';
import Hire from './components/Hire';
import Upcoming from './components/Upcoming';
import Recognitions from './components/Recognitions';
import Key from './components/Key';
import Contacts from './components/Contacts';
import Footer from './components/Footer';



export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Reboot/>
        <Programs/>
        <Why/>
        <Hire/>
        <Upcoming/>
        <Recognitions/>
        <Key/>
        <Contacts/>
        <Footer/>
      </div>
    )
  }
}
