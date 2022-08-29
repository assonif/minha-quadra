import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-top: ${RFValue(16)}px;
`;

interface ITextProps {
    color: string;
}

export const Text = styled.Text<ITextProps>`
  font-weight: bold;
  color: ${({ color }) => color}
`;