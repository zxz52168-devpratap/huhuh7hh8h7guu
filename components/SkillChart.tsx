import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { Skill } from '../types';

interface SkillChartProps {
  skills: Skill[];
}

const SkillChart: React.FC<SkillChartProps> = ({ skills }) => {
  // Filter top 5 skills for the chart to keep it clean
  const data = skills.slice(0, 6).map(s => ({
    name: s.name,
    level: s.level,
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-card border border-gray-700 p-3 rounded-lg shadow-xl">
          <p className="text-white font-medium">{label}</p>
          <p className="text-primary text-sm">Proficiency: {payload[0].value}%</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full h-[300px] mt-8">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          layout="vertical"
          margin={{ top: 5, right: 30, left: 40, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
          <XAxis type="number" domain={[0, 100]} hide />
          <YAxis
            dataKey="name"
            type="category"
            tick={{ fill: '#94a3b8', fontSize: 12 }}
            width={80}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'transparent' }} />
          <Bar dataKey="level" radius={[0, 4, 4, 0]} barSize={20}>
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#3b82f6' : '#60a5fa'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;