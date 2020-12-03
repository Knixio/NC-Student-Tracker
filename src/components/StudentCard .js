import React from 'react';
import { Link } from '@reach/router';

const Student = (student) => {
  if (student.currentBlock === 'grad') {
    return (
      <div className="student">
        <p>STUDENT</p>
        <p>
          <strong>Name:</strong> {student.name}
        </p>

        <p>
          <strong>Cohort:</strong> {student.startingCohort}
        </p>
        <p>
          <strong>Current Block:</strong> {student.currentBlock}
        </p>

        <Link to={`/students/${student._id}`}>
          <button>View Profile</button>
        </Link>
        <span className="stamp is-approved">Graduated</span>
      </div>
    );
  } else {
    return (
      <div className="student">
        <p>STUDENT</p>
        <p>
          <strong>Name:</strong> {student.name}
        </p>

        <p>
          <strong>Cohort:</strong> {student.startingCohort}
        </p>
        <p>
          <strong>Current Block:</strong> {student.currentBlock}
        </p>

        <Link to={`/students/${student._id}`}>
          <button>View Profile</button>
        </Link>
      </div>
    );
  }
};

export default Student;
