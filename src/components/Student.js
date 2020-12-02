import React from 'react';

const Student = (student) => {
    return (
        <div className='student'>
            <p>STUDENT</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Cohort:</strong> {student.startingCohort}</p>
            <p><strong>Current Block:</strong> {student.startingCohort}</p>
        </div>
        
    )
}


export default Student;