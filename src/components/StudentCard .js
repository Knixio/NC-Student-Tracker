import React from 'react';
import {Link} from '@reach/router';

const Student = (student) => {

    return (
        <div className='student'>
            <p>STUDENT</p>
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Cohort:</strong> {student.startingCohort}</p>
            <p><strong>Current Block:</strong> {student.currentBlock}</p>
            
            <Link to={student._id}>
                <button>View Profile</button>
            </Link>
            
        </div>
        
    )
}


export default Student;