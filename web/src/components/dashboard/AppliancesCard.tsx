import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/macro';
import { Grid } from '@chakra-ui/react';
import {
  DARKER_PRIMARY,
  GRAY,
  LIGHTER_PRIMARY,
  LIGHTER_SECONDARY,
  LIGHTER_TERTIARY,
  LIGHT_GRAY,
  PRIMARY,
  SECONDARY,
  TERTIARY,
} from '../../constants/websiteColors';
import { Heading3, Heading4 } from '../general/Headings';
import { CardContainer, CardHeading } from './Card';
import Appliances from '../icons/Appliances';

const Counter = styled.div<{ bgColor: string }>`
  height: 40px;
  width: 40px;
  background-color: ${(props) => props.bgColor};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
`;

const AppliancesContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  & > *:not(:last-child) {
    margin-right: 32px;
    flex-grow: 1;
  }
`;

const Category = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  & > *:not(:last-child) {
    margin-right: 24px;
  }
`;

const AddCategoryButton = styled.button`
  width: 20%;
  background-color: ${DARKER_PRIMARY};
  color: ${LIGHT_GRAY};
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition-duration: 75ms;
  &:active {
    box-shadow: inset 0px 4px 22px 4px rgba(0, 0, 0, 0.5);
  }
`;

const AppliancesCard = ({ heading }: { heading: string }) => {
  return (
    <CardContainer colSpan={2}>
      <CardHeading>
        <Appliances fill={TERTIARY} size={40} />
        <Heading3>{heading}</Heading3>
      </CardHeading>
      <AppliancesContainer>
        <Grid templateColumns="repeat(2, 1fr)" gap="16px">
          <Category>
            <Counter bgColor={LIGHTER_PRIMARY}>
              <Heading4 color={PRIMARY}>4</Heading4>
            </Counter>
            <Heading4>Lighting</Heading4>
          </Category>
          <Category>
            <Counter bgColor={LIGHTER_SECONDARY}>
              <Heading4 color={SECONDARY}>3</Heading4>
            </Counter>
            <Heading4>Smart Devices</Heading4>
          </Category>
          <Category>
            <Counter bgColor={LIGHTER_TERTIARY}>
              <Heading4 color={TERTIARY}>5</Heading4>
            </Counter>
            <Heading4>Household</Heading4>
          </Category>
          <Category>
            <Counter bgColor={LIGHT_GRAY}>
              <Heading4 color={GRAY}>2</Heading4>
            </Counter>
            <Heading4>Miscellaneous</Heading4>
          </Category>
        </Grid>
        <AddCategoryButton type="button">
          <Heading4 color={LIGHT_GRAY}>Add</Heading4>
        </AddCategoryButton>
      </AppliancesContainer>
    </CardContainer>
  );
};

AppliancesCard.propTypes = {
  heading: PropTypes.string.isRequired,
};

export default AppliancesCard;
