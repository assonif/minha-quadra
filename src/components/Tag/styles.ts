import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 2px 6px;
  background: #e5e5e5;

  margin: 2px;

  margin-right: 4px;

  border-radius: 24px;
`;

export const Text = styled.Text`
    font-size: ${RFValue(12)}px;
    font-weight: bold;
`;