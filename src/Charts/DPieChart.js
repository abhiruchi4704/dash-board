import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
class DPieChart extends React.Component {
   COLORS = [ "#82ca9d", "#FFBB28", "#FF8042"];
   pieData = [
      {
         name: "Apple",
         value: 55.85
      },
      {
         name: "Samsung",
         value: 30.91
      },
      {
         name: "Redmi",
         value: 14
      },
    //   {
    //      name: "One Plus",
    //      value: 16.14
    //   },
      
   ];
   CustomTooltip = ({ active, payload, label }) => {
      if (active) {
         return (
         <div
            className="custom-tooltip"
            style={{
               backgroundColor: "#ffff",
               padding: "1px",
               border: "1px solid #cccc"
            }}
         >
            <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
         </div>
      );
   }
   return null;
};
render() {
   return (
    < div style={{ display: "flex" }}>
      <PieChart width={390} height={260}>
      <Pie
         data={this.pieData}
         color="#000000"
         dataKey="value"
         nameKey="name"
         cx="50%"
         cy="50%"
         outerRadius={120}
         fill="#8884d8"
      >
         {this.pieData.map((entry, index) => (
            <Cell
               key={`cell-${index}`}
               fill={this.COLORS[index % this.COLORS.length]}
            />
         ))}
      </Pie>
      <Tooltip content={<this.CustomTooltip />} />
      <Legend />
      </PieChart>
     
      </div>
      );
   }
}
export default DPieChart;