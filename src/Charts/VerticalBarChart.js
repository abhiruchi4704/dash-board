import React from 'react';
// import './verticalbar.css';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend, CartesianGrid} from 'recharts'
const Array = [
  {
    name: "Python",
    student: 4,
    fees: 3,
  },
  {
    name: "JavaScript",
    student: 4,
    fees: 2,
  },
  {
    name: "PHP",
    student: 2,
    fees: 0,
  },
  {
    name: "Java",
    student: 3,
    fees: 5,
  },
  {
    name: "C++",
    student: 1,
    fees: 2,
  },
  {
    name: "Swift",
    student: 2,
    fees: 1,
  },

];


const VerticalBarChart = () => {
  return (
    <div className="chart">
      <ResponsiveContainer width="100%"  aspect={3} className='grid'>
        <LineChart data={Array} width={500} height={300} margin={{ top: 5, right: 300, left: 20, bottom: 5}}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey='name'/>
          <YAxis/>
          <Tooltip/>
          <Legend/>
          <Line type="monotone" dataKey="student" stroke='red' activeDot={{r:4}}/>
          <Line type="monotone" dataKey="fees" stroke='green' activeDot={{r:4}}/>
        </LineChart>
      </ResponsiveContainer>  
    </div>
  )
}


export default VerticalBarChart