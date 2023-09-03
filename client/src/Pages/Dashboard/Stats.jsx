import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Stats = () => {
  const sampleHabits = [
    { name: "Meditate", progress: 5 },
    { name: "Stretch", progress: 8 },
    { name: "Drink more water", progress: 3 },
    { name: "Sleep 7 hours per night", progress: 10 },
  ];

  // State to hold habit data
  const [habits, setHabits] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setHabits(sampleHabits);
    }, 1000);
  }, []);

  return (
    <ResponsiveContainer
      width="100%"
      height={300}
      style={{
        color: "#fff",
      }}
    >
      <BarChart width={500} height={300} data={habits}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          style={{
            color: "#fff",
          }}
        />
        <Legend />
        <Bar dataKey="progress" fill="#fff0e" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default Stats;
