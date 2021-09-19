import { GridItem } from '@chakra-ui/react';
import styled from 'styled-components/macro';
import { LIGHT_GRAY } from '../../constants/websiteColors';

export const CardContainer = styled(GridItem)`
  width: 100%;
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid ${LIGHT_GRAY};
  box-sizing: border-box;
  padding: 32px;
  & > *:not(:last-child) {
    margin-bottom: 48px;
  }
`;

export const CardHeading = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-sizing: border-box;
  & > *:not(:last-child) {
    margin-right: 24px;
  }
`;
