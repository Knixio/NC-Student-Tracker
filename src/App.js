import React from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { Link, Router } from '@reach/router';
import StudentList from './components/StudentList';
import Home from './components/Home';
import Student from './components/Student';
import Block from './components/Block';

class App extends React.Component {
  //function for onclick
  //searchBox updates state value in App
  //Pass down to studentList
  state = {
    graduated: 'all',
    block: '',
  };

  handleOnClick = (event) => {
    console.log(event.target.value);
    this.setState({ graduated: event.target.value });
  };
  handleOnChange = (event) => {
    console.log(event.target.value);
    this.setState({ [event.target.id]: event.target.value });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <SearchBox
          handleOnClick={this.handleOnClick}
          handleOnChange={this.handleOnChange}
        />
        <div className="results-box">
          <Router>
            <Home path="/" />
            <StudentList path="/students" graduated={this.state.graduated} />
            <Student path="/students/:student_id" />
            <Block path="/students/:block" block={this.state.block} />
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
