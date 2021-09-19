import { Grid } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components/macro';
import { DARK_GRAY, PRIMARY } from '../../constants/websiteColors';
import { Heading3, Heading4 } from '../general/Headings';
import Laundry from '../icons/Laundry';
import NatureHelp from '../icons/NatureHelp';
import PowerOff from '../icons/PowerOff';
import Recycle from '../icons/Recycle';
import Shower from '../icons/Shower';
import { CardContainer, CardHeading } from './Card';

const ActivitiesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: stretch;
`;

const Activity = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 24px;
  }
`;

const ActivityCard = ({ heading }: { heading: string }) => {
  return (
    <CardContainer colSpan={2}>
      <CardHeading>
        <NatureHelp fill={PRIMARY} size={40} />
        <Heading3>{heading}</Heading3>
      </CardHeading>
      <ActivitiesContainer>
        <Grid width="100%" templateColumns="repeat(2, 1fr)" columnGap="16px" rowGap="16px">
          <Activity>
            <Recycle fill={DARK_GRAY} size={40} />
            <Heading4>Recycled</Heading4>
          </Activity>
          <Activity>
            <Shower fill={DARK_GRAY} size={40} />
            <Heading4>Took a short shower</Heading4>
          </Activity>
          <Activity>
            <Laundry fill={DARK_GRAY} size={40} />
            <Heading4>Did laundry myself</Heading4>
          </Activity>
          <Activity>
            <PowerOff fill={DARK_GRAY} size={40} />
            <Heading4>Turned off lights</Heading4>
          </Activity>
        </Grid>
      </ActivitiesContainer>
    </CardContainer>
  );
};

ActivityCard.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default ActivityCard;
