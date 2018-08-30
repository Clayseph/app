import React, { Component } from 'react';
import axios from 'axios';

import './Tracker.css';

export default class Tracker extends Component {
    constructor() {
        super();
        this.state = {

        };
    }

    componentDidMount() {
        axios.get('/workouts/')
            .then((response) => {
                this.setState({
                    workoutList: response.data,
                });
                console.log(response);
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <div>Workout Tracker</div>
                {this.state.workoutList ? this.state.workoutList.map((workout, id) => (
                    <div className="row" key={id}>
                        <div className="name item">{workout.name}</div>
                        <div className="item">{workout.weight}{'lbs'}</div>
                        <div className="item">{workout.sets}{' sets'}</div>
                        <div className="item">{workout.reps}{' reps'}</div>
                    </div>
                )) : null}
            </div>
        );
    }
}
