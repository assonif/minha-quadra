import React from 'react';
import { Text, View } from 'react-native';
import Status from '../Status';
import Tag from '../Tag';
import * as S from './styles';

const ReservationItem: React.FC = () => {
    return (
        <S.Container>
            <S.InfoContainer>
                <S.Title>Winner Tennis Center</S.Title>
                <S.Info>25/05/2022 - Terça-feira</S.Info>
                <S.Info>16:00h - 17:00h</S.Info>
                <Status status='approved' />
            </S.InfoContainer>
            <S.RightContainer>
                <Tag text="Beach Tennis" />
                <View>
                    <Text>
                        Valor total:
                    </Text>
                    <S.Title>R$ 60,00</S.Title>
                </View>

            </S.RightContainer>


            {/* <Status status='approved' />
            <Status status='declined' /> */}
        </S.Container>
    );
}

export default ReservationItem;