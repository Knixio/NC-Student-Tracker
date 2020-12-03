import React from 'react';
import StudentCard from './StudentCard ';

const axios = require('axios');
const API = 'https://nc-student-tracker.herokuapp.com/api/students?graduated=true';


class GradStudents extends React.Component {
    state = {
        students: [],
        blocks: [],
        searchTerm: '',
      }
    
      componentDidMount() {
        this.fetchStudentData(API).then((students) => {
          this.setState({ students });
        });
      }
      
      fetchStudentData = (API) => {
        return axios.get(API).then((response) => {
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
          </section>
        );
      }
}

export default GradStudents;