import React from 'react';
import StudentCard  from './StudentCard ';

const StudentList = (props) => {
  const { students, searchTerm } = props;
  return (
    <div className='student-list'>
      
        {students.map((student) => {
          return <StudentCard key={student._id} {...student} />;
        })}
      
    </div>
  );
};

export default StudentList;
