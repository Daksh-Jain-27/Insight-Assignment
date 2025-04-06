import React from "react";

import { PieChart, Pie, Cell } from "recharts";
import {
    BarChart,
    Bar,
    XAxis,
    YAxis,
    Tooltip,
    CartesianGrid,
    ResponsiveContainer,
    Legend,
} from "recharts";
import "./Personal.css";

const nativePlaceData = [
    { state: "Maharashtra", students: 87 },
    { state: "Madhya Pradesh", students: 28 },
    { state: "Uttar Pradesh", students: 25 },
    { state: "Rajasthan", students: 22 },
    { state: "Telangana", students: 20 },
    { state: "West Bengal", students: 18 },
    { state: "Bihar", students: 15 },
    { state: "Andhra Pradesh", students: 13 },
    { state: "Tamil Nadu", students: 10 },
    { state: "Kerala", students: 8 },
    { state: "Gujarat", students: 7 },
    { state: "Karnataka", students: 6 },
    { state: "Jharkhand", students: 5 },
    { state: "Delhi-NCR", students: 4 },
    { state: "Other", students: 24 },
];

const data = [
    { name: 'Metropolitan City', value: 116 },
    { name: 'Small City', value: 87 },
    { name: 'Town', value: 58 },
    { name: 'Village', value: 29 }
];

const COLORS2 = ['#77214a', '#a64d79', '#c36696', '#e38eb9'];

const data1 = [
    { name: "Very close, spoke to them frequently", value: 175 },
    { name: "There was some interaction; I spoke to them every now and then", value: 100 },
    { name: "I wasn't in touch with my family", value: 14 }
];

const COLORS = ["#77214a", "#a64d79", "#c36696"];

const Personal = () => {
    return (
        <div className="academics-container">
            <h1 className="personal-main-heading">Personal</h1>
            <h2 className="academics-heading">Q. Which state would you call your native place?</h2>
            <p className="academics-subtext">Total Respondents - 287</p>
            <div className="academics-chart-container">

                <ResponsiveContainer width={700} height={400}>
                    <BarChart data={nativePlaceData} margin={{ top: 20, right: 10, left: 10, bottom: 50 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="state"
                            angle={-35}
                            textAnchor="end"
                            interval={0}
                            height={120}
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Bar
                            dataKey="students"
                            fill="#c084fc"
                            name="No. of students"
                            barSize={30}
                        />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <h2 className="academics-heading">Q. Which region did you primarily grow up in?</h2>
            <p className="academics-subtext">Total Respondents* - 290</p>
            <div className="academics-chart-container">
                <PieChart width={900} height={450}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        label={({ name }) => name}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS2[index % COLORS2.length]}
                                stroke="#333"
                                strokeWidth={0.5}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>

                <div className="academics-legend center-last-row">
                    {data.map((entry, index) => (
                        <div key={`legend-${index}`} className="legend-item">
                            <span
                                className="legend-color"
                                style={{ color: COLORS2[index % COLORS2.length] }}
                            >
                                ■
                            </span>
                            <span className="legend-text">{entry.name}</span>
                        </div>
                    ))}
                </div>
            </div>
            <br></br>
            <br></br>
            <h2 className="academics-heading">Q. How close were you to your family while at college?</h2>
            <p className="academics-subtext">Total Respondents* - 289</p>
            <div className="academics-chart-container">
                <PieChart width={900} height={450}>
                    <Pie
                        data={data1}
                        cx="50%"
                        cy="50%"
                        label={({ name }) => name}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data1.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                                stroke="#333"
                                strokeWidth={0.5}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>

                <div className="academics-legend center-last-row">
                    {data1.map((entry, index) => (
                        <div key={`legend-${index}`} className="legend-item">
                            <span
                                className="legend-color"
                                style={{ color: COLORS[index % COLORS.length] }}
                            >
                                ■
                            </span>
                            <span className="legend-text">{entry.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Personal;
