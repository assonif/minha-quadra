import { BottomSheetView } from '@gorhom/bottom-sheet';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled(BottomSheetView)`
  padding: 0 ${RFValue(16)}px;

  flex: 1;
`;

export const Header = styled.View`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
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