import Weather from "../../models/Weather";
import { Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";


interface WeatherChartProps {
  weathers: Weather[]
}

function WeatherChart({ weathers }: WeatherChartProps) {
  return (
    <ResponsiveContainer width="100%" height={400}>
    <ComposedChart data={weathers} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
      <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
      <XAxis 
        dataKey="day" 
        label={{ value: 'Dia da Semana', position: 'insideBottomRight', offset: -10, fill: '#555' }} 
        tick={{ fontSize: 12, fill: '#555' }}
      />
      <YAxis 
        yAxisId="left" 
        label={{ value: 'Precipitação (mm)', angle: -90, position: 'insideLeft', fill: '#555' }}
        tick={{ fontSize: 12, fill: '#555' }}
      />
      <YAxis 
        yAxisId="right" 
        orientation="right" 
        label={{ value: 'Temperatura (°C)', angle: -90, position: 'insideRight', fill: '#555' }}
        tick={{ fontSize: 12, fill: '#555' }}
      />
      <Tooltip 
        contentStyle={{ backgroundColor: '#fff', borderColor: '#ccc', borderRadius: 5 }} 
        itemStyle={{ color: '#555' }}
        labelStyle={{ fontWeight: 'bold', color: '#333' }}
      />
      <Legend 
        verticalAlign="top" 
        height={36} 
        wrapperStyle={{ fontSize: 12, color: '#555' }} 
      />
      <Bar 
        yAxisId="left" 
        dataKey="preciptition" 
        barSize={40} 
        fill="#82ca9d" 
        name="Precipitação" 
      />
      <Line 
        yAxisId="right" 
        type="monotone" 
        dataKey="maxTemperature" 
        stroke="#ff7300" 
        strokeWidth={2} 
        dot={{ r: 5, stroke: '#ff7300', strokeWidth: 2, fill: '#fff' }}
        activeDot={{ r: 8, stroke: '#ff7300', strokeWidth: 2, fill: '#fff' }}
        name="Temperatura Máxima" 
      />
      <Line 
        yAxisId="right" 
        type="monotone" 
        dataKey="minTemperature" 
        stroke="#387908" 
        strokeWidth={2} 
        dot={{ r: 5, stroke: '#387908', strokeWidth: 2, fill: '#fff' }}
        activeDot={{ r: 8, stroke: '#387908', strokeWidth: 2, fill: '#fff' }}
        name="Temperatura Mínima" 
      />
    </ComposedChart>
  </ResponsiveContainer>
  );
}

export default WeatherChart;