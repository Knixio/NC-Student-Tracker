import React from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { Link, Router } from '@reach/router';
import StudentList from './components/StudentList';
import Home from './components/Home';
import GradStudents from './components/GradStudents';
import Student from './components/Student';

class App extends React.Component {
  //function for onclick
  //searchBox updates state value in App
  //Pass down to studentList
  state = {
    graduated: 'all',
  };
  handleOnClick = (event) => {
    console.log(event.target.value);
    this.setState({ graduated: event.target.value });
  };

  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox handleOnClick={this.handleOnClick} />
        <div className="results-box">
          <Router>
            <Home path="/" />
            <StudentList path="/students" graduated={this.state.graduated} />
            <Student path="/students/:student_id" />
            {/* <GradStudents path='/students/graduates/*'/> */}
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
