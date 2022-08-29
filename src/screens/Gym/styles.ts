import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  flex:1;
`;

export const Tab = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;

  background: #fff;

`;

interface ITabPressableProps {
    isSelected: boolean;
}

export const TabPressable = styled.Pressable<ITabPressableProps>`
  width: 50%;
  padding: ${RFValue(16)}px;

  display: flex;
  align-items: center;

  ${({ isSelected, theme }) => isSelected && css`
    border-bottom-color: ${theme.colors.primary};
    border-bottom-width: 2px;
    border-bottom-style: solid;
  `}
`;

export const TabText = styled.Text<ITabPressableProps>`
    ${({ isSelected, theme }) => isSelected && css`
        font-weight: bold;
        color: ${theme.colors.primary};
    `}
`;