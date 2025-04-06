import React, { useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";
import "./Academics.css";

const cpiData = [
    { name: "CPI<7", AE: 2, CH: 6, CE: 2, CSE: 2, EE: 4, ME: 9, MM: 4, Other: 11 },
    { name: "7<CPI<8", AE: 7, CH: 5, CE: 11, CSE: 7, EE: 9, ME: 12, MM: 4, Other: 17 },
    { name: "8<CPI<9", AE: 12, CH: 6, CE: 4, CSE: 7, EE: 18, ME: 24, MM: 5, Other: 32 },
    { name: "CPI>9", AE: 5, CH: 4, CE: 1, CSE: 17, EE: 20, ME: 8, MM: 2, Other: 12 }
];

const departments = [
    { key: "AE", label: "Aerospace Engineering" },
    { key: "CH", label: "Chemical Engineering" },
    { key: "CE", label: "Civil Engineering" },
    { key: "CSE", label: "Computer Science & Engineering" },
    { key: "EE", label: "Electrical Engineering" },
    { key: "ME", label: "Mechanical Engineering" },
    { key: "MM", label: "Metallurgical Engineering" },
    { key: "Other", label: "Other" }
];

const stackedColors = [
    "#0B2C4D", "#194569", "#2B5B88", "#4C83B6",
    "#6796BF", "#85ADD0", "#A1C2DE", "#BDD7EC"
];


const degreeData = [
    { name: "BTech", value: 161 },
    { name: "M.Tech", value: 47 },
    { name: "Dual Degree", value: 38 },
    { name: "M.Sc", value: 16 },
    { name: "B.S.", value: 10 },
    { name: "IDDDP", value: 6 },
    { name: "PhD", value: 5 },
    { name: "MBA", value: 3 },
    { name: "M.Des", value: 2 },
    { name: "M.S.", value: 2 },
    { name: "B.Des", value: 1 }
];

const minorsData = [
    { name: "I did neither", value: 124 },
    { name: "Yes, a minor", value: 55 },
    { name: "Both a minor and an honours", value: 26 },
    { name: "Yes, honours", value: 24 },
    { name: "Yes, a double minor", value: 2 }
];

const BASE_DARK_COLOR1 = "#0A1C2A";
const COLORS = [
    BASE_DARK_COLOR1,
    "rgba(10, 28, 42, 0.9)",
    "rgba(10, 28, 42, 0.8)",
    "rgba(10, 28, 42, 0.7)",
    "rgba(10, 28, 42, 0.6)",
    "rgba(10, 28, 42, 0.5)",
    "rgba(10, 28, 42, 0.4)",
    "rgba(10, 28, 42, 0.3)",
    "rgba(10, 28, 42, 0.2)",
    "rgba(10, 28, 42, 0.15)",
    "rgba(10, 28, 42, 0.1)",
];
const BASE_COLOR = "#12355B";
const COLORS2 = [
    BASE_COLOR,
    "rgba(18, 53, 91, 0.9)",
    "rgba(18, 53, 91, 0.8)",
    "rgba(18, 53, 91, 0.7)",
    "rgba(18, 53, 91, 0.6)"
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


const Academics = () => {
    const [selectedDepts, setSelectedDepts] = useState(departments.map(dep => dep.key));

    const toggleDept = (deptKey) => {
        if (selectedDepts.includes(deptKey)) {
            setSelectedDepts(selectedDepts.filter(d => d === deptKey));
        } else {
            setSelectedDepts([...selectedDepts, deptKey]);
        }
    };

    const resetDepts = () => {
        setSelectedDepts(departments.map(dep => dep.key));
    };
    return (
        <div className="academics-container">
            <h1 className="academics-main-heading">Academics</h1>
            <h2 className="academics-heading">Q. What degree are you graduating with?</h2>
            <p className="academics-subtext">Total Respondents - 291</p>
            <div className="academics-chart-container">
                <PieChart width={500} height={450}>
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
                                fill={COLORS[index % COLORS.length]}
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
                                style={{ color: COLORS[index % COLORS.length] }}
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
            <h2 className="academics-heading">Q. If you are getting a UG degree, did you pursue and complete Minors or Honors?</h2>
            <p className="academics-subtext">Total Respondents - 231</p>
            <div className="academics-chart-container">
                <PieChart width={700} height={450}>
                    <Pie
                        data={minorsData}
                        cx="50%"
                        cy="50%"
                        label={({ name }) => name}
                        outerRadius={180}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {minorsData.map((entry, index) => (
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
                    {minorsData.map((entry, index) => (
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
            <h2 className="academics-heading">Q. What is your CPI?</h2>
            <p className="academics-subtext">Total Respondents - 289</p>
            <div className="academics-filter-buttons">
                {departments.map((dept, index) => (
                    <button
                        key={dept.key}
                        onClick={() => toggleDept(dept.key)}
                        style={{ backgroundColor: selectedDepts.includes(dept.key) ? stackedColors[index] : "#ccc", color: "white", margin: "5px", padding: "10px", borderRadius: "8px", border: "none" }}
                    >
                        {dept.label}
                    </button>
                ))}
                <button onClick={resetDepts} style={{ backgroundColor: "#f44336", color: "white", margin: "5px", padding: "10px", borderRadius: "8px", border: "none" }}>Reset</button>
            </div>
            <div className="academics-chart-container">
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={cpiData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }} >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {departments.map((dept, index) => (
                            selectedDepts.includes(dept.key) && (
                                <Bar key={dept.key} dataKey={dept.key} stackId="a" fill={stackedColors[index]} />
                            )
                        ))}
                    </BarChart>
                </ResponsiveContainer>
            </div>



        </div>
    );
};

export default Academics;
