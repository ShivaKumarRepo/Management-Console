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
  { name: "Jan", uv: 10, pv: 20 },
  { name: "Mar", uv: 60, pv: 80 },
  { name: "Apr", uv: 40, pv: 40 },
  { name: "May", uv: 30, pv: 80 },
  { name: "Jun", uv: 70, pv: 60 },
  { name: "Jul", uv: 20, pv: 70 },
  { name: "Aug", uv: 50, pv: 50 },
  { name: "Sep", uv: 80, pv: 40 },
  { name: "Oct", uv: 30, pv: 30 },
  { name: "Nov", uv: 70, pv: 20 },
  { name: "Dec", uv: 50, pv: 10 },
];
const renderLineChart = (
  <LineChart
    width={560}
    height={270}
    data={data}
    margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
  >
    <CartesianGrid strokeDasharray="3 3" vertical={false}/>
    <XAxis dataKey="name"  tickLine={null}/>
    <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tickLine={null}/>
    <Line type="monotone" dataKey="pv" stroke="#28C76F" dot={false}/>
    <Line type="monotone" dataKey="uv" stroke="#0557A2" dot={false}/>
  </LineChart>
);
const CSAP = () => {
  return (
    <>
      <section className="chart-sec">
        <div className="chart-heading">
          <h4>CSAP</h4>
          <div className="time">
            <p id="month">Monthly</p>
            <p>Weekly</p>
          </div>
        </div>
        <div className="chart-info">
          <ul>
            <li className="design">GRE</li>
            <li className="development">TOFEL</li>
          </ul>
        </div>
        <div className="chart">{renderLineChart}</div>
      </section>
    </>
  );
};

export default CSAP;
