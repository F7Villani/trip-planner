import dayjs from "dayjs";
import Weather from "../../models/Weather";
import { Bar,  ComposedChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

interface WeatherModelChart{
  date: Date,
  temperature: number[]
}

interface WeatherChartProps {
  weathers: Weather[]
}

function WeatherChart({ weathers }: WeatherChartProps) {

  return (
    <ResponsiveContainer width="100%" height={400}>
    <ComposedChart data={weathers}>
      {/* <XAxis
        dataKey="date"
        tick={{ fontSize: 12, fill: '#555' }}
        tickFormatter={(date) => dayjs(date).format('DD/MM')}
      /> */}
      <Tooltip 
        cursor={false} 
        labelFormatter={(date: Date) => dayjs(date).format("DD/MM/YYYY")}
        itemStyle={{fontSize: 15}}
      />
      <Bar
        dataKey="preciptition"
        barSize={40}
        fill="#20B2AA"
        name="Precipitação"
      />
      {/* <Bar
        dataKey="temperature"
        barSize={40}
        fill="#20B2AA"
        name="Precipitação"
      /> */}
      <Line
        type="monotone"
        dataKey="maxTemperature"
        stroke="#B8346A"
        name="Máxima"
        dot={false}
      />
      <Line
        type="monotone"
        dataKey="minTemperature"
        color="#10A0FF"
        name="Mínima"
        dot={false}
      /> 
    </ComposedChart>
  </ResponsiveContainer>
  );
}

export default WeatherChart;