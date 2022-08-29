import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  margin-top: ${RFValue(8)}px;

  padding-bottom: ${RFValue(16)}px;
`;

export const PressableItem = styled.Pressable`
`;
