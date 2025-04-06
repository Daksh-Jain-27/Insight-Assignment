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
import "./Miscellaneous.css";

const data = [
    { hostel: "H2", students: 28 },
    { hostel: "H3", students: 39 },
    { hostel: "H4", students: 6 },
    { hostel: "H5", students: 30 },
    { hostel: "H6", students: 36 },
    { hostel: "H9", students: 23 },
    { hostel: "H10", students: 13 },
    { hostel: "H11", students: 16 },
    { hostel: "H12", students: 11 },
    { hostel: "H13", students: 6 },
    { hostel: "H14", students: 10 },
    { hostel: "H15", students: 30 },
    { hostel: "H16", students: 1 },
    { hostel: "H17", students: 11 },
    { hostel: "H18", students: 16 }
];

const data1 = [
    { name: 'Never', value: 216 },
    { name: 'Once', value: 50 },
    { name: '<5 times', value: 8 },
    { name: '>5 times', value: 4 }
];

const COLORS1 = ["#766324",
    "#988635",
    "#b59d2f",
    "#d8bb3d",];

const data2 = [
    { name: "Walking Everywhere", value: 195 },
    { name: "Buggies/EVs", value: 161 },
    { name: "Autos", value: 151 },
    { name: "Cycling", value: 132 }
];


export default function Miscellaneous() {
    return (
        <div className="academics-container">
            <h1 className="miscellaneous-main-heading">Miscellaneous</h1>
            <h2 className="academics-heading">Q. What was your parent hostel?</h2>
            <p className="academics-subtext">Total Respondents - 284</p>
            <div className="academics-chart-container">

                <ResponsiveContainer width={700} height={350}>

                    <BarChart margin={{ top: 20, right: 10, left: 10, bottom: 50 }} data={data}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="hostel" />
                        <YAxis />
                        <Tooltip />
                        <Legend verticalAlign="top" height={36} />
                        <Bar dataKey="students" fill="#e7c657" name="No. of students" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            <h2 className="academics-heading">Q. How many times have you received pink slips for reasons other than its intended purpose?</h2>
            <p className="academics-subtext">Total Respondents - 278</p>
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
                                fill={COLORS1[index % COLORS1.length]}
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
                                style={{ color: COLORS1[index % COLORS1.length] }}
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
            <h2 className="academics-heading">Q. What mode of transportation did you prefer for getting around on campus?</h2>
            <p className="academics-subtext">Total Respondents* - 288</p>
            <div className="academics-chart-container">
                <PieChart width={900} height={450}>
                    <Pie
                        data={data2}
                        cx="50%"
                        cy="50%"
                        label={({ name }) => name}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {data2.map((entry, index) => (
                            <Cell
                                key={`cell-${index}`}
                                fill={COLORS1[index % COLORS1.length]}
                                stroke="#333"
                                strokeWidth={0.5}
                            />
                        ))}
                    </Pie>
                    <Tooltip />
                </PieChart>

                <div className="academics-legend center-last-row">
                    {data2.map((entry, index) => (
                        <div key={`legend-${index}`} className="legend-item">
                            <span
                                className="legend-color"
                                style={{ color: COLORS1[index % COLORS1.length] }}
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
            <h3>Note: *Multiple choice question - respondents could select more than one option for the question</h3>

        </div>
    );
}
