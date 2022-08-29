import { FontAwesome } from '@expo/vector-icons';
import React from 'react';

import * as S from './styles';

const Rate: React.FC = () => {
    return (
        <S.Container>
            <FontAwesome name="star" size={12} color="black" />
            <S.RateText>4.65</S.RateText>
        </S.Container>
    );
}

export default Rate;