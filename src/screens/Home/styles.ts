import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
    box-sizing: border-box;
    padding: ${RFValue(16)}px;
`;

export const List = styled.View`
  display: flex;
  align-items: center;

  padding-bottom: ${RFValue(32)}px;
`;