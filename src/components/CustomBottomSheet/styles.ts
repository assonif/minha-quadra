import { BottomSheetView } from '@gorhom/bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import styled, { css } from 'styled-components/native';

export const Container = styled(BottomSheetView)`
  padding: 0 ${RFValue(16)}px;

  flex: 1;

  display: flex;
`;

export const Header = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding-bottom:  ${RFValue(8)}px;
    border-bottom-color: #edede9;
    border-bottom-width: 1px;
`;

export const SaveButtonContainer = styled.Pressable`
    background: ${({ theme }) => theme.colors.primary};
    padding: ${RFValue(8)}px ${RFValue(16)}px;

    border-radius: 8px;
`;

export const SaveButtonText = styled.Text`
    color: white;
    font-weight: bold;
`;

export const DateText = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(16)}px;

    margin: ${RFValue(16)}px ${RFValue(8)}px ${RFValue(8)}px;
`;

export const DatePressableWrapper = styled.View`
    display: flex;
    flex-direction: row;
    align-items: flex-end;
`;

interface IDatePressableContainerProps {
    isSelected: boolean
}

export const DatePressableContainer = styled.Pressable<IDatePressableContainerProps>`
    display: flex;
    align-items: center;
    padding: ${RFValue(4)}px ${RFValue(8)}px;
    ${({ isSelected }) => isSelected && css`
        background: #f1f2f6;
    `}   
`;

export const DatePressableLabel = styled.Text`

`;

export const DatePressable = styled.View``;

export const DatePressableText = styled.Text`
    font-weight: bold;
    font-size: ${RFValue(18)}px;
`;