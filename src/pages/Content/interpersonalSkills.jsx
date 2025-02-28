import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, LabelList } from "recharts";

const data = [
  { name: "Ability to work under pressure", value: 95 },
  { name: "Communication", value: 100 },
  { name: "Creativity", value: 100 },
  { name: "Detail Oriented", value: 100 },
  { name: "Good Team Player", value: 100 },
  { name: "Multitasking", value: 98 },
  { name: "Problem Solving", value: 100 },
  { name: "Critical Thinking", value: 100 },
  { name: "Time Management", value: 90 },
];

// Define an array of colors
const colors = ["#fe9a33", "#339c47", "#7acdf3", "#FF33A8", "#FFD700", "#8A2BE2", "#7acdf3", "#2da7e4", "#DC143C"];

const Inter = () => {
  return (
    <div style={{ width: "100%", height: 400 }}>
      
      <h4 style={{ textShadow: "0 0 2px #fff, 0 0 4px #fff", marginBottom:'100px' }}>
        <b>KEY COMPETENCIES</b>
      </h4>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={data} layout="vertical" margin={{ left: 50, right: 50 }}>
          {/* Darken X and Y Axes */}
          <XAxis 
            type="number" 
            domain={[0, 100]} 
            tickCount={6} 
            allowDecimals={false} 
            tick={{ fill: "white", fontSize: 12 }} 
            stroke="white"
            tickFormatter={(tick) => `${tick}%`} // Add % symbol
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            width={180} 
            tick={{ fill: "white", fontSize: 14 }} 
            stroke="white"
          />
          <Tooltip formatter={(value) => `${value}%`} /> {/* Add % to tooltip */}
          <Bar dataKey="value" barSize={20} minPointSize={5}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
            ))}
            {/* Display percentage inside bars */}
            <LabelList dataKey="value" position="insideRight" fill="black" fontSize={14}   formatter={(value) => `${value}%`} />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      <div>  
  <h1 style={{ 
    textAlign: "center", 
    color: "#AFFC41", 
    fontSize: "30px", 
    marginTop: "30px", 
    position: "relative", 
    right: "-100px" // Adjust value as needed
  }}>
    INTERPERSONAL SKILLS
  </h1>
</div>

     
    </div>
  );
};

export default Inter;





