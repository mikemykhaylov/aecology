import React from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip } from 'recharts';
import { Heading3 } from '../general/Headings';
import { CardContainer, CardHeading } from './Card';

const ConsumptionCard = ({
  data,
  heading,
  prevWeekColor,
  currWeekColor,
  icon,
}: {
  data: { name: string; prev: number; curr: number }[];
  heading: string;
  prevWeekColor: string;
  currWeekColor: string;
  icon: React.ReactNode;
}) => {
  return (
    <CardContainer>
      <CardHeading>
        {icon}
        <Heading3>{heading}</Heading3>
      </CardHeading>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -32 }}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line
            type="monotone"
            strokeWidth="3"
            strokeDasharray="10 10"
            dataKey="prev"
            stroke={prevWeekColor}
            dot={{ strokeDasharray: '' }}
          />
          <Line type="monotone" dataKey="curr" strokeWidth="3" stroke={currWeekColor} />
        </LineChart>
      </ResponsiveContainer>
    </CardContainer>
  );
};

ConsumptionCard.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      prev: PropTypes.number,
      curr: PropTypes.number,
    }),
  ).isRequired,
  heading: PropTypes.string.isRequired,
  prevWeekColor: PropTypes.string.isRequired,
  currWeekColor: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
};

export default ConsumptionCard;
