import React from 'react';
import StudentCgpaFormTable from '../../../../../components/ui/StudentCgpaForm';
import { BASE_URL } from '../../../../../api';

const initialStudentsState = [

    { rank: 1, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 2, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 3, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 4, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 5, stdname: '', cgpa: '', dept: 'TT' },
    { rank: 1, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 2, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 3, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 4, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 5, stdname: '', cgpa: '', dept: 'TM' },
    { rank: 1, stdname: '', cgpa: '', dept: 'FC' },
    { rank: 2, stdname: '', cgpa: '', dept: 'FC' },
    { rank: 3, stdname: '', cgpa: '', dept: 'FC' },
    { rank: 4, stdname: '', cgpa: '', dept: 'FC' },
    { rank: 5, stdname: '', cgpa: '', dept: 'FC' },
   
];

const FirstYearDiplomaTables = () => {

    const FetchUrl = `${BASE_URL}/api/diploma/get/first`
    const SubmitUrl = `${BASE_URL}/api/diploma/submit/first`
    const year = "First"

    return (
        <div>
            <StudentCgpaFormTable
                title="First Year Diploma"
                initialState={initialStudentsState}
                FetchUrl={FetchUrl}
                SubmitUrl={SubmitUrl}
                year={year}
            />
        </div>
    );
};
export default FirstYearDiplomaTables;