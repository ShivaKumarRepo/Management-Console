import React from "react";
import { BarChart, XAxis, YAxis, Tooltip, Bar, CartesianGrid } from "recharts";

const Academic = () => {
  const data = [
    { name: "Jan", pv: 3 },
    { name: "Feb", pv: 2 },
    { name: "Mar", pv: 5 },
    { name: "Apr", pv: 4 },
    { name: "May", pv: 6 },
    { name: "Jun", pv: 7 },
    { name: "Jul", pv: 8 },
    { name: "Aug", pv: 9 },
    { name: "Sep", pv: 5 },
    { name: "Oct", pv: 4 },
    { name: "Nov", pv: 6 },
    { name: "Dec", pv: 10 },
  ];

  const renderBarChart = (
    <BarChart
      width={560}
      height={275}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <XAxis dataKey="name" tickLine={null} />
      <YAxis
        domain={[0, 12]}
        ticks={[0, 2, 4, 6, 8, 10, 12]}
        tickLine={null}
        allowDecimals={false}
      />
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <Bar dataKey="pv" fill="#0557A2" barSize={15} />
    </BarChart>
  );

  return (
    <>
      <section className="chart-sec">
        <div className="chart-heading">
          <h4>Academic Performance</h4>
          <div className="time">
            <p id="month">Monthly</p>
            <p>Weekly</p>
          </div>
        </div>
        <div className="chart">{renderBarChart}</div>
      </section>
    </>
  );
};

export default Academic;
