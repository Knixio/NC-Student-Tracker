import React from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { Link, Router } from '@reach/router';
import StudentList from './components/StudentList';

const axios = require('axios');
const API = 'https://nc-student-tracker.herokuapp.com/api/students?';

class App extends React.Component {
  state = {
    students: [],
    blocks: [],
    searchTerm: '',
  };

  componentDidMount() {
    this.fetchStudentData(API).then((students) => {
      this.setState({ students });
    });

    // this.fetchBlockData(API)
    // .then(blocks => {
    //   this.setState({ ...students,  blocks})
    // })
  }

  fetchStudentData = (API) => {
    return axios.get(API).then((response) => {
      return response.data.students;
    });
  };

  fetchBlockData = (API) => {
    return axios.get(`${API}blocks`).then((response) => {
      return response.data.blocks;
    });
  };

  // onChange = (event) => {
  //   this.setState(() => {
  //     const newState = {
  //       searchTerm: `graduated=${event.target.value}`,
  //     };
  //     return newState;
  //   });
  //   this.fetchStudentData(API);
  // };

  render() {
    const { students } = this.state;
    return (
      <div className="App">
        <Header />
        <SearchBox />
        <div className='results-box'>
          <Router>
            
            <StudentList path='/students' students={students} />
            {/* path='/students/*'? */}
            {/* student list
            student info
            student list (but graduated students) */}
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
