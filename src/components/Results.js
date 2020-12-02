import React from 'react';
import Student from './Student';

const Results = (props) => {
  const { students, searchTerm } = props;
  return (
    <div>
      <ul className="results-container">
        {students.map((student) => {
          return <Student key={student._id} {...student} />;
        })}
      </ul>
    </div>
  );
};

export default Results;
