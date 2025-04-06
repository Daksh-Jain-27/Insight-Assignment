import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import "./Career.css";

const plans = [
    { name: "Consulting/Venture Capital", "7<CPI<8": 7, "8<CPI<9": 10, "CPI<7": 3, "CPI>9": 1 },
    { name: "Other", "7<CPI<8": 3, "8<CPI<9": 6, "CPI<7": 4, "CPI>9": 7 },
    { name: "Entrepreneurship", "7<CPI<8": 1, "8<CPI<9": 1, "CPI<7": 14, "CPI>9": 10 },
    { name: "Exams like UPSC, CDS etc", "7<CPI<8": 7, "8<CPI<9": 10, "CPI<7": 3, "CPI>9": 3 },
    { name: "Finance", "7<CPI<8": 10, "8<CPI<9": 6, "CPI<7": 2, "CPI>9": 10 },
    { name: "I will go where life takes me", "7<CPI<8": 15, "8<CPI<9": 8, "CPI<7": 9, "CPI>9": 1 },
    { name: "Industry/Core Engineering", "7<CPI<8": 7, "8<CPI<9": 10, "CPI<7": 4, "CPI>9": 10 },
    { name: "MBA", "7<CPI<8": 17, "8<CPI<9": 5, "CPI<7": 4, "CPI>9": 3 },
    { name: "Masters, PhD", "7<CPI<8": 12, "8<CPI<9": 11, "CPI<7": 3, "CPI>9": 4 },
    { name: "Product Management", "7<CPI<8": 5, "8<CPI<9": 3, "CPI<7": 7, "CPI>9": 5 },
    { name: "Technology", "7<CPI<8": 11, "8<CPI<9": 4, "CPI<7": 6, "CPI>9": 9 }
];

const CPI = [
    { key: "7<CPI<8", label: "7<CPI<8" },
    { key: "8<CPI<9", label: "8<CPI<9" },
    { key: "CPI<7", label: "CPI<7" },
    { key: "CPI>9", label: "CPI>9" }
];

const stackedCOLORS2 = [
    "#14532d",
    "#166534",
    "#22c55e",
    "#72f1a0"
];


const degreeData = [
    { name: "No more competitive exams for me", value: 60 },
    { name: "CAT", value: 47 },
    { name: "TOEFL", value: 50 },
    { name: "GMAT", value: 48 },
    { name: "GRE", value: 30 },
    { name: "UPSC", value: 25 },
    { name: "GATE and IIT-JAM", value: 8 },
    { name: "CFA", value: 5 },
    { name: "CDS", value: 5 },
    { name: "Others", value: 2 },
];

const cities = [
    { name: "Mumbai", value: 104 },
    { name: "Bangalore", value: 48 },
    { name: "Not sure yet", value: 22 },
    { name: "Outside India", value: 21 },
    { name: "Gurgaon", value: 19 },
    { name: "Hyderabad", value: 17 },
    { name: "Pune", value: 17 },
    { name: "Delhi", value: 15 },
    { name: "Chennai", value: 15 },
    { name: "Others", value: 10 },
];


const BASE_COLOR = "#14532d";
const COLORS2 = [
    BASE_COLOR,
    "rgba(20, 83, 45, 0.9)",
    "rgba(20, 83, 45, 0.8)",
    "rgba(20, 83, 45, 0.7)",
    "rgba(20, 83, 45, 0.6)",
    "rgba(20, 83, 45, 0.55)",
    "rgba(20, 83, 45, 0.5)",
    "rgba(20, 83, 45, 0.45)",
    "rgba(20, 83, 45, 0.4)",
    "rgba(20, 83, 45, 0.35)",
    "rgba(20, 83, 45, 0.3)",
];

// const CustomLegend = ({ payload }) => {
//     return (
//         <div className="custom-legend">
//             {payload.map((entry, index) => (
//                 <span
//                     key={`item-${index}`}
//                     className="legend-item"
//                     style={{
//                         display: "inline-block",
//                         marginRight: 12,
//                         color: "black", // always black
//                         fontSize: "14px"
//                     }}
//                 >
//                     <span
//                         style={{
//                             display: "inline-block",
//                             width: 12,
//                             height: 12,
//                             backgroundColor: entry.color,
//                             marginRight: 6
//                         }}
//                     />
//                     {entry.value}
//                 </span>
//             ))}
//         </div>
//     );
// };


const Career = () => {
    const [selectedDepts, setSelectedDepts] = useState(CPI.map(dep => dep.key));

    const toggleDept = (deptKey) => {
        if (selectedDepts.includes(deptKey)) {
            setSelectedDepts(selectedDepts.filter(d => d === deptKey));
        } else {
            setSelectedDepts([...selectedDepts, deptKey]);
        }
    };

    const resetDepts = () => {
        setSelectedDepts(CPI.map(dep => dep.key));
    };
    return (
        <div className="academics-container">
            <h1 className="career-main-heading">Career</h1>
            <h2 className="academics-heading">Q. What is your CPI?</h2>
            <p className="academics-subtext">Total Respondents - 289</p>
            <div className="academics-filter-buttons">
                {CPI.map((dept, index) => (
                    <button
                        key={dept.key}
                        onClick={() => toggleDept(dept.key)}
                        style={{ backgroundColor: selectedDepts.includes(dept.key) ? stackedCOLORS2[index] : "#ccc", color: "white", margin: "5px", padding: "10px", borderRadius: "8px", border: "none" }}
                    >
                        {dept.label}
                    </button>
                ))}
                <button onClick={resetDepts} style={{ backgroundColor: "#f44336", color: "white", margin: "5px", padding: "10px", borderRadius: "8px", border: "none" }}>Reset</button>
            </div>
            <div className="academics-chart-container">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={plans} margin={{ top: 20, right: 10, left: 70, bottom: 50 }} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis
                            dataKey="name"
                            tick={{ angle: -15, textAnchor: "end" }}
                            interval={0}
                        />
                        <YAxis />
                        <Tooltip />
                        {CPI.map((dept, index) => (
                            selectedDepts.includes(dept.key) && (
                                <Bar key={dept.key} dataKey={dept.key} stackId="a" fill={stackedCOLORS2[index]} />
                            )
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            </div>




            <br></br>
            <br></br>
            <h2 className="academics-heading">Q. Where are you headed to after graduating from college?</h2>
            <p className="academics-subtext">Total Respondents - 288</p>
            <div className="academics-chart-container">
                <PieChart width={700} height={450}>
                    <Pie
                        data={cities}
                        cx="50%"
                        cy="50%"
                        label={({ name }) => name}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {cities.map((entry, index) => (
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
                    {cities.map((entry, index) => (
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
            <h2 className="academics-heading">Q. After graduating from IIT Bombay, have you taken or do you plan to take any of the following exams?</h2>
            <p className="academics-subtext">Total Respondents* - 280</p>
            <div className="academics-chart-container">
                <PieChart width={900} height={450}>
                    <Pie
                        data={degreeData}
                        cx="50%"
                        cy="50%"
                        label={({ name }) => name}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {degreeData.map((entry, index) => (
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
                    {degreeData.map((entry, index) => (
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
            <h3>Note: *Multiple choice question - respondents could select more than one option for the question</h3>



        </div>
    );
};

export default Career;
