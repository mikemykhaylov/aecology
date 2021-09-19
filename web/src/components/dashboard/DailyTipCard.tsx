import React from 'react';
import styled from 'styled-components/macro';
import { PRIMARY } from '../../constants/websiteColors';
import { Heading3 } from '../general/Headings';
import Tip from '../icons/Tip';
import { CardContainer, CardHeading } from './Card';

const DailyTipCardContainer = styled(CardContainer)`
  text-align: center;
`;

const DailyTip = () => {
  return (
    <DailyTipCardContainer>
      <CardHeading>
        <Tip size={40} fill={PRIMARY} />
        <Heading3>Daily eco-tip</Heading3>
      </CardHeading>
      <Heading3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Heading3>
    </DailyTipCardContainer>
  );
};

export default DailyTip;
