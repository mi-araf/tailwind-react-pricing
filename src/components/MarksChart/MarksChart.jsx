import React, { use } from 'react';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const MarksChart = ({ marksPromise }) => {
    const marksDataRes = use(marksPromise);
    const marksData = marksDataRes.data;

    // data Processing for the chart
    const marksCharData = marksData.map(studentData => {
        const student = {
            id: studentData.id,
            name: studentData.name,
            physics: studentData.physics,
            math: studentData.math,
            chemistry: studentData.chemistry,
            biology: studentData.biology,
        };
        const avg = (student.physics + student.math + student.chemistry + student.biology) / 4;
        student.avg = avg;
        
        return student;
    });
    
    return (
        <div className='flex justify-center m-10'>
            <BarChart width={600} height={400} data={marksCharData}>
                <XAxis dataKey={'id'}></XAxis>
                <YAxis></YAxis>
                <Bar dataKey={'avg'} fill='goldenrod'></Bar>
                <Bar dataKey={'physics'} fill='gray'></Bar>
            </BarChart>
        </div>
    );
};

export default MarksChart;