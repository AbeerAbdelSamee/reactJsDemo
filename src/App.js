import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';

// import Menu from './components/MenuComponent';
// import { DISHES } from './shared/dishes';

class App extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     dishes: DISHES
  //   };
  // }
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
     
      // <Menu  dishes={this.state.dishes}/>

    //   <div className="App">
    //   <Navbar dark color="primary">
    //     <div className="container">
    //       <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
    //     </div>
    //   </Navbar>
    // </div>
    );
  }
}

export default App;
