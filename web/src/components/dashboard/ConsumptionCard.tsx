/* eslint-disable no-param-reassign */
/* eslint-disable no-restricted-syntax */
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ResponsiveContainer, LineChart, XAxis, YAxis, Line, Tooltip } from 'recharts';
import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import { Heading3 } from '../general/Headings';
import { CardContainer, CardHeading } from './Card';
import { auth, firestore } from '../../constants/firebase';
import Loading from '../general/Loading';

const ConsumptionCard = ({
  data,
  heading,
  prevWeekColor,
  currWeekColor,
  icon,
  category,
}: {
  data: { name: string; prev: number; curr: number }[];
  heading: string;
  prevWeekColor: string;
  currWeekColor: string;
  icon: React.ReactNode;
  category: string;
}) => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const start = new Date();
    start.setUTCHours(0, 0, 0);
    const activitiesRef = collection(firestore, 'activities');
    const userRef = doc(firestore, 'users', auth!.currentUser!.uid);
    const q = query(
      activitiesRef,
      where('userId', '==', userRef),
      where('date', '>', start),
      where('category', '==', category),
    );
    let sum = 0;
    (async () => {
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((activity) => {
        sum += activity.data().impact;
      });
      data[data.length - 1].curr = sum;
    })();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);
  return (
    <>
      {loading ? (
        <Loading height="100%" width="100%" />
      ) : (
        <CardContainer>
          <CardHeading>
            {icon}
            <Heading3>{heading}</Heading3>
          </CardHeading>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={data} margin={{ top: 5, right: 5, bottom: 5, left: -24 }}>
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
      )}
    </>
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
  category: PropTypes.string.isRequired,
};

export default ConsumptionCard;
