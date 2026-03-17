import React from 'react';
import { Line, LineChart, XAxis, YAxis } from 'recharts';

const resultData = [
    { "id": 1, "name": "Student 1", "physics": 78, "math": 85, "chemistry": 80, "biology": 75 },
    { "id": 2, "name": "Student 2", "physics": 88, "math": 92, "chemistry": 86, "biology": 90 },
    { "id": 3, "name": "Student 3", "physics": 65, "math": 70, "chemistry": 68, "biology": 72 },
    { "id": 4, "name": "Student 4", "physics": 90, "math": 95, "chemistry": 93, "biology": 89 },
    { "id": 5, "name": "Student 5", "physics": 55, "math": 60, "chemistry": 58, "biology": 62 },
    { "id": 6, "name": "Student 6", "physics": 72, "math": 78, "chemistry": 74, "biology": 70 },
    { "id": 7, "name": "Student 7", "physics": 85, "math": 88, "chemistry": 82, "biology": 84 },
    { "id": 8, "name": "Student 8", "physics": 60, "math": 65, "chemistry": 63, "biology": 67 },
    { "id": 9, "name": "Student 9", "physics": 92, "math": 96, "chemistry": 94, "biology": 91 },
    { "id": 10, "name": "Student 10", "physics": 70, "math": 75, "chemistry": 72, "biology": 68 }
]

const ResultChat = () => {
    return (
        <div className='flex justify-center m-10'>
            <LineChart width={600} height={400} data={resultData}>
                <XAxis dataKey="id"></XAxis>
                <YAxis></YAxis>
                <Line dataKey="math" />
                <Line dataKey="chemistry" stroke='red' />
            </LineChart>
        </div>
    );
};

export default ResultChat;