import { Router } from '@reach/router';
import React from 'react';
import GradStudents from './GradStudents';
import StudentCard from './StudentCard ';

const axios = require('axios');
const API = 'https://nc-student-tracker.herokuapp.com/api/students';

class StudentList extends React.Component {
  state = {
    students: [],
    blocks: [],
  };

  componentDidMount() {
    this.fetchStudentData().then((students) => {
      this.setState({ students });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.graduated !== prevProps.graduated) {
      this.fetchStudentData().then((students) => {
        this.setState({ students });
      });
    }
  }

  fetchStudentData = () => {
    if (this.props.graduated === 'all') {
      return axios
        .get('https://nc-student-tracker.herokuapp.com/api/students')
        .then((response) => {
          return response.data.students;
        });
    } else if (this.props.graduated === 'true') {
      return axios
        .get(
          'https://nc-student-tracker.herokuapp.com/api/students?graduated=true'
        )
        .then((response) => {
          return response.data.students;
        });
    } else if (this.props.graduated === 'false') {
      return axios
        .get(
          'https://nc-student-tracker.herokuapp.com/api/students?graduated=false'
        )
        .then((response) => {
          return response.data.students;
        });
    }
  };

  // fetchStudentData = (API) => {
  //   const paramsObj = {
  //     graduated: this.state.graduated,
  //   };
  //   return axios.get(API, paramsObj).then((response) => {
  //     return response.data.students;
  //   });
  // };

  render() {
    console.log(this.props);
    return (
      <section>
        <ul className="student-list">
          {this.state.students.map((student) => {
            return <StudentCard key={student._id} {...student} />;
          })}
        </ul>
      </section>
    );
  }
}

export default StudentList;
