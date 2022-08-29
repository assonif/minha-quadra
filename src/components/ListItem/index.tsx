import React, { useState } from 'react';
import Rate from '../Rate';
import Tag from '../Tag';

import { Feather } from '@expo/vector-icons';

import * as S from './styles';

const items = [require('../../assets/quadra.png'), require('../../assets/volei.png')]

interface IListItemProps {
    navigation: any;
}

const ListItem = ({ navigation }: IListItemProps) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <S.Container onPress={() => navigation.navigate('Gym')}>
            <S.ImageContainer>
                <S.Image source={items[selectedIndex]} />
            </S.ImageContainer>

            <S.InfoContainer>
                <S.Column>
                    <S.Title>Winner Tennis Center</S.Title>
                    <S.TagList>
                        <Tag text='Futevolei' />
                        <Tag text='Beach Tenis' />
                        <Tag text='Volei de Praia' />
                        <Tag text='Tennis' />
                    </S.TagList>

                    <S.Info><Feather name="info" size={12} color="black" style={{ marginRight: 4 }} />{' '}Horarios disponíveis hoje</S.Info>
                </S.Column>
                <Rate />
            </S.InfoContainer>


        </S.Container>
    );
}

export default ListItem;