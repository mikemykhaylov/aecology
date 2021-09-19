import styled from 'styled-components/macro';

import { DARK_GRAY } from '../../constants/websiteColors';

export const Heading1 = styled.h1`
  margin: 0;
  font-family: Manrope, sans-serif;
  font-style: normal;
  font-variation-settings: 'wght' 800;
  font-size: 3.157rem;
  color: ${(props) => props.color || DARK_GRAY};
`;

export const Heading2 = styled.h2`
  margin: 0;
  font-family: Manrope, sans-serif;
  font-style: normal;
  font-variation-settings: 'wght' 700;
  font-size: 2.369rem;
  color: ${(props) => props.color || DARK_GRAY};
`;
export const Heading3 = styled.h3`
  margin: 0;
  font-family: Manrope, sans-serif;
  font-style: normal;
  font-variation-settings: 'wght' 600;
  font-size: 1.777rem;
  color: ${(props) => props.color || DARK_GRAY};
  font-feature-settings: 'pnum' on, 'lnum' on;
`;
export const Heading4 = styled.h4`
  margin: 0;
  font-family: Manrope, sans-serif;
  font-style: normal;
  font-variation-settings: 'wght' 500;
  font-size: 1.333rem;
  color: ${(props) => props.color || DARK_GRAY};
`;
export const Heading5 = styled.h5`
  margin: 0;
  font-family: Manrope, sans-serif;
  font-style: normal;
  font-variation-settings: 'wght' 400;
  font-size: 1rem;
  color: ${(props) => props.color || DARK_GRAY};
`;
export const Text = styled.p`
  margin: 0;
  font-family: Rubik, sans-serif;
  font-style: normal;
  font-variation-settings: 'wght' 400;
  font-size: 1rem;
  line-height: 24px;
  color: ${(props) => props.color || DARK_GRAY};
`;

export const LinkText = styled(Text)`
  text-decoration: underline;
`;
