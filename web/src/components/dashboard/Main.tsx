import React from 'react';
import styled from 'styled-components/macro';
import { Grid } from '@chakra-ui/react';
import Logo from '../icons/Logo';
import {
  DARK_GRAY,
  GRAY,
  LIGHTER_PRIMARY,
  LIGHTER_SECONDARY,
  LIGHTER_TERTIARY,
  LIGHT_GRAY,
  PRIMARY,
  SECONDARY,
  TERTIARY,
} from '../../constants/websiteColors';
import dummyData from '../../constants/dummyData';
import Navbar from '../general/Navbar';
import ConsumptionCard from './ConsumptionCard';
import ActivityCard from './ActivityCard';
import DailyTip from './DailyTipCard';
import Home from '../icons/Home';
import Statistics from '../icons/Statistics';
import Ecology from '../icons/Ecology';
import AppliancesCard from './AppliancesCard';
import Electricity from '../icons/Electricity';
import CarbonDioxide from '../icons/CarbonDioxide';
import Water from '../icons/Water';

const MainContainer = styled.div`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;
`;

const LeftSideSection = styled.aside`
  width: 5vw;
  min-width: 64px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding-top: 48px;
  box-sizing: border-box;
  border: 1px solid ${LIGHT_GRAY};
  & > *:not(:last-child) {
    margin-bottom: 10vh;
  }
`;

const SideNav = styled.nav`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  & > *:not(:last-child) {
    margin-bottom: 5vw;
  }
`;

const PageContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-sizing: border-box;
  padding: 0 5vw 0 5vw;
  & > *:not(:last-child) {
    margin-bottom: 48px;
  }
`;

const Main: React.FC = () => {
  return (
    <MainContainer>
      <LeftSideSection>
        <Logo size={40} fill={PRIMARY} />
        <SideNav>
          <Home fill={DARK_GRAY} size={40} />
          <Ecology fill={GRAY} size={40} />
          <Statistics fill={GRAY} size={40} />
          <Electricity fill={GRAY} size={40} />
        </SideNav>
      </LeftSideSection>
      <PageContainer>
        <Navbar />
        <Grid
          templateColumns="repeat(auto-fit, minmax(300px, 1fr))"
          autoRows="1fr"
          gap="32px"
          width="100%"
        >
          <DailyTip />
          <ConsumptionCard
            data={dummyData[0]}
            heading="CO2 Emissions"
            prevWeekColor={LIGHTER_TERTIARY}
            currWeekColor={TERTIARY}
            icon={<CarbonDioxide size={40} fill={TERTIARY} />}
          />
          <ConsumptionCard
            data={dummyData[1]}
            heading="Electricity"
            prevWeekColor={LIGHTER_SECONDARY}
            currWeekColor={SECONDARY}
            icon={<Electricity size={40} fill={SECONDARY} />}
          />
          <ConsumptionCard
            data={dummyData[2]}
            heading="Water"
            prevWeekColor={LIGHTER_PRIMARY}
            currWeekColor={PRIMARY}
            icon={<Water size={40} fill={PRIMARY} />}
          />
          <ActivityCard heading="What have you done for nature today?" />
          <AppliancesCard heading="Your electrical appliances" />
        </Grid>
      </PageContainer>
    </MainContainer>
  );
};

export default Main;
