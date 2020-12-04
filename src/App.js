import React from "react";
import Header from "./components/Header";
import SearchBox from "./components/SearchBox";
import { Link, Router, navigate } from "@reach/router";
import StudentList from "./components/StudentList";
import Home from "./components/Home";
import Student from "./components/Student";
import Block from "./components/Block";
import AddStudent from "./components/AddStudent";

class App extends React.Component {
  //function for onclick
  //searchBox updates state value in App
  //Pass down to studentList
  state = {
    graduated: "all",
    block: "all",
  };

  handleOnClick = (event) => {
    this.setState({ graduated: event.target.value });
  };

  handleOnChange = (event) => {
    navigate(`/block/${event.target.value}`);
  };

  render() {
    console.log(this.state.block);
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
            <Block path="/block/:block" />
            <AddStudent path="/students/add_student" />
          </Router>
        </div>
      </div>
    );
  }
}
export default App;
