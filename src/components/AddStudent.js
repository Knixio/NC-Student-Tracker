import React from "react";
import axios from "axios";

class AddStudent extends React.Component {
  state = {
    name: "",
    startingCohort: 0,
  };

  handleOnChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const student = {
      name: this.state.name,
      startingCohort: this.state.startingCohort,
    };

    return axios.post(
      `https://nc-student-tracker.herokuapp.com/api/students`,
      student
    );
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input
              id="name"
              type="text"
              name="name"
              onChange={this.handleOnChange}
            />
          </label>
          <label>
            Starting Cohort:
            <input
              id="startingCohort"
              type="number"
              name="startingCohort"
              step="1"
              min="1"
              max="20"
              onChange={this.handleOnChange}
            />
          </label>
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default AddStudent;
