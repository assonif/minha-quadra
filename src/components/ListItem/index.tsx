import React, { useState } from 'react';
// import Quadra from '../../assets/quadra.png';

import * as S from './styles';

const items = [require('../../assets/quadra.png'), require('../../assets/volei.png')]

const ListItem: React.FC = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <S.Container>
            <S.ImageContainer>
                <S.Image source={items[selectedIndex]} />
            </S.ImageContainer>

            <S.Title>Winner Tennis Center</S.Title>
            <S.Info>Horarios disponíveis hoje</S.Info>
        </S.Container>
    );
}

export default ListItem;