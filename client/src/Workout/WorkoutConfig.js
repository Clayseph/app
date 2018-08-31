import React, { Component } from 'react';
import axios from 'axios';

export default class WorkoutConfig extends Component {
    constructor() {
        super();
        this.updateWorkoutName = this.updateWorkoutName.bind(this);
        this.updateWeight = this.updateWeight.bind(this);
        this.updateReps = this.updateReps.bind(this);
        this.updateSets = this.updateSets.bind(this);
        this.addWorkout = this.addWorkout.bind(this);
    }

    updateWorkoutName(event) {
        this.setState({
            name: event.target.value
        });
    }

    updateWeight(event) {
        this.setState({
            weight: event.target.value
        });
    }

    updateReps(event) {
        this.setState({
            reps: event.target.value
        });
    }

    updateSets(event) {
        this.setState({
            sets: event.target.value
        });
    }

    addWorkout(event) {
        const workout = {
            name: this.state.name,
            weight: this.state.weight,
            reps: this.state.reps,
            sets: this.state.sets
        };
        axios.post('/workouts/add', workout)
            .then((response) => {
                console.log(response);
            });
    }

    render() {
        return (
            <div>
                <div>Add a Workout</div>
                <div>Name: <input onChange={this.updateWorkoutName} /></div>
                <div>Weight: <input onChange={this.updateWeight} /></div>
                <div>Reps: <input onChange={this.updateReps} /></div>
                <div>Sets: <input onChange={this.updateSets} /></div>
                <button type="submit" onClick={this.addWorkout}>Save Workout</button>
            </div>

        );
    }
}
