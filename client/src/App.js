import React, { Component, Router} from 'react';
import logo from './logo.svg';
import './App.css';
import WorkoutConfig from './Workout/WorkoutConfig';
import Tracker from './Workout/Tracker';

class App extends Component {
  state = {
    users:[],
    page: 'tracker'
  }
  componentDidMount(){

    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({users}));
    // fetch('/users/add',{
    //   method:'POST'
    // })
  }
  render() {

    return (
      <div className="App">
    
      {this.state.page ==='workoutConfig' ? <WorkoutConfig users={this.state.users}/> : null }
      {this.state.page ==='tracker' ? <Tracker/> : null }
      </div>
    );
  }
}

export default App;
