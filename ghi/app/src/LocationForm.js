import React from 'react';

class LocationForm extends React.Component { async
    constructor(props) {
        super(props)
        this.state = {states: []};
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleRoomChange = this.handleRoomChange.bind(this);
        this.handleCityChange = this.handleCityChange.bind(this);
      }
    handleNameChange(event) {
        const value = event.target.value;
        this.setState({name: value})
      } 
    handleRoomChange(event) {
        const value = event.target.value;
        this.setState({roomChange: value})
      }
    handleCityChange(event) {
        const value = event.target.value;
        this.setState({cityChange: value})
      }   
    componentDidMount() {
        const url = 'http://localhost:8000/api/states/';

        const response = await fetch(url);

        if (response.ok) {
            const data = await response.json();
            this.setState({states: data.states});
            {this.state.states.map(state => {
                return (
                  <option key={state.abbreviation} value={state.abbreviation}>
                    {state.name}
                  </option>
                );
              })}
        }
    }
    render() {
        return (
            <div className="row">
                <div className="offset-3 col-6">
                    <div className="shadow p-4 mt-4">
                        <h1>Create a new location</h1>
                        <form id="create-location-form">
                            <div className="form-floating mb-3">
                                <input onChange={this.handleNameChange} placeholder="Name" required type="text" name="name" id="name" class="form-control" />
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleRoomChange} placeholder="Room count" required type="number" name="room_count" id="room_count" class="form-control" />
                                <label htmlFor="room_count">Room count</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input onChange={this.handleCityChange} placeholder="City" required type="text" name="city" id="city" class="form-control" />
                                <label htmlFor="city">City</label>
                            </div>
                            <div className="mb-3">
                                <select required id="state" name="state" className="form-select">
                                    <option selected value="state">Choose a state</option>
                                </select>
                            </div>
                            <button className="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default LocationForm;