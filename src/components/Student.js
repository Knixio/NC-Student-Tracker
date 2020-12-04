import React from "react";

const axios = require("axios");

class Student extends React.Component {
  state = {
    student: [],
  };
  componentDidMount() {
    this.fetchStudentData().then((student) => {
      this.setState({ student });
    });
  }

  fetchStudentData = () => {
    return axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students/${this.props.student_id}`
      )
      .then((response) => {
        return response.data.student;
      });
  };

  render() {
    const { student } = this.state;
    return (
      <div className="student">
        <p>
          <strong>Name:</strong> {student.name}
        </p>
        <p>
          <strong>Cohort:</strong> {student.startingCohort}
        </p>
      </div>
    );
  }
}

export default Student;
