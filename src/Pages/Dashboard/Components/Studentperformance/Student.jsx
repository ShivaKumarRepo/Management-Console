import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const Student = () => {
  const data = [
    { name: "Jan", uv: 10 },
    { name: "Feb", uv: 30 },
    { name: "Mar", uv: 60 },
    { name: "Apr", uv: 40 },
    { name: "May", uv: 90 },
    { name: "Jun", uv: 70 },
    { name: "Jul", uv: 20 },
    { name: "Aug", uv: 50 },
    { name: "Sep", uv: 80 },
    { name: "Oct", uv: 30 },
    { name: "Nov", uv: 70 },
    { name: "Dec", uv: 80 },
  ];

  const renderLineChart = (
    <LineChart
      width={560}
      height={275}
      data={data}
      margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
    >
      <Line type="monotone" dataKey="uv" stroke="#0557A2" dot={false} />
      <CartesianGrid stroke="#E9EDFA" strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" tickLine={null} />
      <YAxis
        domain={[0, 100]}
        ticks={[0, 20, 40, 60, 80, 100]}
        tickLine={null}
      />
      {/* <Tooltip /> */}
    </LineChart>
  );

  return (
    <>
      <section className="chart-sec">
        <div className="chart-heading">
          <h4>Students Performance</h4>
          <div className="time">
            <p id="month">Monthly</p>
            <p>Weekly</p>
          </div>
        </div>
        <div className="chart">{renderLineChart}</div>
      </section>
    </>
  );
};

export default Student;
