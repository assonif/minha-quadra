import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.Pressable`
  width: 100%;

  margin-bottom: ${RFValue(16)}px;
`;

export const Title = styled.Text`
  font-weight: bold;
`;

export const Info = styled.Text`
  margin-top: ${RFValue(4)}px;
  font-size: ${RFValue(12)}px;
`;

export const ImageContainer = styled.View`
  border-radius: 16px;
  overflow: hidden;

  max-width: ${RFPercentage(100)}px;

`;

export const Image = styled.Image``

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-top: ${RFValue(10)}px;
`;

export const Column = styled.View`
  display: flex;
`;

export const TagList = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  max-width: ${RFPercentage(40)}px;

  margin-top: ${RFValue(8)}px;
`;