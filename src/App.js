import React from 'react';
import Header from './components/Header';
import SearchBox from './components/SearchBox';
import { Link, Router } from '@reach/router';
import StudentList from './components/StudentList';
import Home from './components/Home';
import GradStudents from './components/GradStudents';



const App = () => {
  //function for onclick
  //searchBox updates state value in App
  //Pass down to studentList
    return (
      <div className="App">
        <Header />
        <SearchBox />
        <div className='results-box'>
          <Router>
            <Home path='/'/>
            <StudentList path='/students'/>
            {/* <GradStudents path='/students/graduates/*'/> */}
          </Router>

        </div>
      </div>
    );
  
}

export default App;
