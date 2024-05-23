import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

const data = [
  { name: "Jan", uv: 10, pv: 20, amt: 30 },
  { name: "Feb", uv: 30, pv: 40, amt: 20 },
  { name: "Mar", uv: 60, pv: 80, amt: 10 },
  { name: "Apr", uv: 40, pv: 90, amt: 15 },
  { name: "May", uv: 90, pv: 80, amt: 20 },
  { name: "Jun", uv: 70, pv: 60, amt: 30 },
  { name: "Jul", uv: 20, pv: 70, amt: 25 },
  { name: "Aug", uv: 50, pv: 50, amt: 10 },
  { name: "Sep", uv: 80, pv: 40, amt: 30 },
  { name: "Oct", uv: 30, pv: 30, amt: 20 },
  { name: "Nov", uv: 70, pv: 20, amt: 10 },
  { name: "Dec", uv: 10, pv: 10, amt: 15 },
];

const renderLineChart = (
  <LineChart
    width={560}
    height={270}
    data={data}
    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
  >
    <CartesianGrid strokeDasharray="3 3" vertical={false} />
    <XAxis dataKey="name" tickLine={null} />
    <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tickLine={null} />
    <Line type="monotone" dataKey="pv" stroke="#FFAB00" dot={false} />
    <Line type="monotone" dataKey="uv" stroke="#0557A2" dot={false} />
    <Line type="monotone" dataKey="amt" stroke="#28C76F" dot={false} />
  </LineChart>
);

const CSEP = () => {
  return (
    <>
      <section className="chart-sec">
        <div className="chart-heading">
          <h4>CSEP</h4>
          <div className="time">
            <p id="month">Monthly</p>
            <p>Weekly</p>
          </div>
        </div>
        <div className="chart-info">
          <ul>
            <li className="design">Design</li>
            <li className="development">Development</li>
            <li className="testing">Testing</li>
          </ul>
        </div>
        <div className="chart">{renderLineChart}</div>
      </section>
    </>
  );
};

export default CSEP;
