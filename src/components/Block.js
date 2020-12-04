import React, { Component } from 'react';
import StudentCard from './StudentCard ';
const axios = require('axios');

class Block extends Component {
  state = {
    students: [],
  };

  componentDidMount() {
    this.fetchBlockData().then((students) => {
      this.setState({ students });
    });
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.props.block !== prevProps.block) {
      this.fetchBlockData().then((students) => {
        this.setState({ students });
      });
    }
  }
  fetchBlockData() {
    return axios
      .get(
        `https://nc-student-tracker.herokuapp.com/api/students?block=${this.state.block}`
      )
      .then((res) => {
        console.log(res);
      });
  }

  fetchBlockData = () => {
    if (this.props.block === 'all-blocks') {
      return axios
        .get('https://nc-student-tracker.herokuapp.com/api/students')
        .then((response) => {
          return response.data.students;
        });
    } else if (this.props.block === 'proj') {
      return axios
        .get('https://nc-student-tracker.herokuapp.com/api/students?block=proj')
        .then((response) => {
          return response.data.students;
        });
    } else if (this.props.block === 'be') {
      return axios
        .get('https://nc-student-tracker.herokuapp.com/api/students?block=be')
        .then((response) => {
          return response.data.students;
        });
    } else if (this.props.block === 'grad') {
      return axios
        .get('https://nc-student-tracker.herokuapp.com/api/students?block=grad')
        .then((response) => {
          return response.data.students;
        });
    } else if (this.props.block === 'fe') {
      return axios
        .get('https://nc-student-tracker.herokuapp.com/api/students?block=fe')
        .then((response) => {
          return response.data.students;
        });
    } else if (this.props.block === 'fun') {
      return axios
        .get('https://nc-student-tracker.herokuapp.com/api/students?block=fun')
        .then((response) => {
          return response.data.students;
        });
    }
  };
  render() {
    return <div>Test</div>;
  }
}

export default Block;
