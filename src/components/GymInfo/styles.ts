import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.ScrollView`
`;

export const InfoContainer = styled.View`
    padding:  ${RFValue(16)}px;
    padding-top: ${RFValue(8)}px;

`;

export const ImageContainer = styled.View`
  overflow: hidden;

  max-width: ${RFPercentage(100)}px;

`;

export const Image = styled.Image``

export const Title = styled.Text` 
    margin-top: ${RFValue(10)}px;
    font-size: ${RFValue(12)}px;
`;

export const Info = styled.Text`
  font-size: ${RFValue(14)}px;
  font-weight: bold;
`;

export const InfoItem = styled.View`
`;

export const TagList = styled.View`
  display: flex;
  flex-direction: row;

  margin-top: ${RFValue(4)}px;

  flex-wrap: wrap;
`;
