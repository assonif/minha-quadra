import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;

  border-radius: 16px;
  background: white;

  box-shadow: 4px 3px 5px rgba(0, 0, 0, 0.1);

  margin-bottom: ${RFValue(16)}px;

  padding: ${RFValue(16)}px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const Info = styled.Text`
  `

export const InfoContainer = styled.View`
`

export const RightContainer = styled.View`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
`