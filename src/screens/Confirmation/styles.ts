import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    padding: ${RFValue(32)}px;
`;

export const ContentContainer = styled.View`
    background: white;
    flex: 1;
    box-shadow: 4px 3px 5px rgba(0, 0, 0, 0.1);
    padding: ${RFValue(16)}px;
`;

export const Title = styled.Text`
`;