import React, { Component } from 'react';
import './App.css';
import ReservationContainer from '../ReservationContainer/ReservationContainer';
import Form from '../Form/Form';
import { getReservations, postReservation } from '../apiCalls';

class App extends Component {
  constructor() {
    super();
    this.state = {
      reservations: []
    }
  }

  componentDidMount = () => {
    getReservations()
    .then(reservations => this.setState({ reservations }))
    .catch(err => console.log(err.message))
  }

  addReservation = (newReservation) => {
    postReservation(newReservation)
    .then(resp => console.log(resp))
    .catch(err => console.log(err.message))
    this.setState({reservations: [...this.state.reservations, newReservation]})
  }

  render() {
    return (
      <div className="App">
        <h1 className='app-title'>Turing Cafe Reservations</h1>
        <div className='resy-form'>
          <Form
            addReservation={this.addReservation}
          />
        </div>
        <div>
          <ReservationContainer
            reservations={this.state.reservations}/>
        </div>
      </div>
    )
  }
}

export default App;
