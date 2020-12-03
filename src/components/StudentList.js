import { Router } from '@reach/router';
import React from 'react';
import GradStudents from './GradStudents';
import StudentCard  from './StudentCard ';


const axios = require('axios');
const API = 'https://nc-student-tracker.herokuapp.com/api/students';

class StudentList extends React.Component {
  state = {
    students: [],
    blocks: [],
    graduated: '',
  }

  componentDidMount() {
    this.fetchStudentData(API).then((students) => {
      this.setState({ students });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.graduated !== prevState.graduated) {
      this.fetchStudentData(API)
    }
  }

  
  fetchStudentData = (API) => {
    const paramsObj = {
      graduated: this.state.graduated
    }
    return axios.get(API, paramsObj).then((response) => {
      return response.data.students;
    });
  }
  
  render() {
   
    return (
      <section>
      <ul className='student-list'>
          {this.state.students.map((student) => {
            return <StudentCard key={student._id} {...student} />;
          })}
      </ul>
      <Router>
        <StudentCard path="/:student_id"/>
      </Router>
      </section>
      
    );
  }
}

export default StudentList;
