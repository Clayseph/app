import React, { Component} from 'react';
import './App.css';
import WorkoutConfig from './Workout/WorkoutConfig';
import Tracker from './Workout/Tracker';
import { AppBar, Drawer, IconButton, Divider} from '@material-ui/core';
import {ChevronLeft, Menu} from '@material-ui/icons';

class App extends Component {
  state = {
    users:[],
    page: 'tracker',
    open: true
  }
  constructor(props){
    super(props);
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }
  componentDidMount(){

    fetch('/users')
    .then(res => res.json())
    .then(users => this.setState({users}));
    // fetch('/users/add',{
    //   method:'POST'
    // })
  }
  handleDrawerOpen(){
    this.setState({open: true});
  }
  handleDrawerClose(){
    this.setState({open: false});
  }
  render() {

    return (
      <div className="App">
      <AppBar>
      <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={this.handleDrawerOpen}
              >
                <Menu />
              </IconButton>
        <Drawer
        variant="persistent"
        anchor={'left'}
        open={this.state.open}
        >
        <div>
          <IconButton onClick={this.handleDrawerClose}>
            <ChevronLeft/>
          </IconButton>
        </div>
        <Divider/>
        </Drawer>
        Workout Tracker</AppBar>
      {this.state.page ==='workoutConfig' ? <WorkoutConfig users={this.state.users}/> : null }
      {this.state.page ==='tracker' ? <Tracker/> : null }
      </div>
    );
  }
}

export default App;
