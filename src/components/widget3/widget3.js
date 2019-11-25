import React, { PureComponent } from 'react';
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from 'recharts';

const data = [
  {
    subject: '1er Trimestre', A: 90, B: 110, fullMark: 150,
  },
  {
    subject: '2nd Trimestre', A: 80, B: 130, fullMark: 150,
  },
  {
    subject: '3ème Trimestre', A: 70, B: 130, fullMark: 150,
  },
 
];

export default class Widget3 extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/6ebcxbx4/';

  render() {
    return (
      <RadarChart cx={300} cy={250} outerRadius={150} width={500} height={500} data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis />
        <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
      </RadarChart>
    );
  }
}
