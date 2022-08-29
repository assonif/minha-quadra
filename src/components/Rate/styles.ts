import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const RateText = styled.Text`
  margin-left: ${RFValue(4)}px;
  font-size: ${RFValue(12)}px;
`;