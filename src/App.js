import React, { Component } from 'react';

import './App.css';
import './tachyons.css'

import './Components/TopBanner/TopBanner';
import './Components/Navigation/Navigation';
import Navigation from './Components/Navigation/Navigation';

import TopBanner from './Components/TopBanner/TopBanner';
import SignIn from './Components/SignIn/SignIn';
import Register from './Components/Register/Register';
import VehicleList from './Components/VehicleList/VehicleList';

//import NavExample from './Components/Test/Test';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: "signin",
      isSignedIn: false,
    }
  }

  onRouteChange = (newRoute) =>{
    if (newRoute === "vehicleList"){
      this.setState({isSignedIn: true});
    } else {
      this.setState({isSignedIn: false});
    }
    this.setState({route: newRoute});
    console.log('onRouteChange: ', newRoute);
  }

  renderSwitch(param) {
    switch(param) {      
        case 'signin':
          return <SignIn onRouteChange={this.onRouteChange} />;        
        case 'register':
          return <Register onRouteChange={this.onRouteChange} />;   
        case 'vehicleList':
          return <VehicleList onRouteChange={this.onRouteChange} />;   
      default:
        return 'No Route';
    }
  }

  render() {
    return (
      <div className="App"> 
        <TopBanner />           
         <Navigation onRouteChange={this.onRouteChange} isSignedIn = {this.state.isSignedIn}/>
         <div>
         {   
           this.renderSwitch(this.state.route)
          //  (this.state.route === 'signin')?
          //     <SignIn onRouteChange={this.onRouteChange} />: <Register onRouteChange={this.onRouteChange} />
         }
         </div>
      </div>
    );
  }
}

export default App;
