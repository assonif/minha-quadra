import React from 'react';
import { Pressable } from 'react-native';
import * as S from './styles';

import { AntDesign } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';


interface ICustomBottomSheetProps {
    onClose: () => void;
}

const CustomBottomSheet = ({ onClose }: ICustomBottomSheetProps) => {
    return (
        <S.Container>
            <S.Header>
                <Pressable onPress={onClose}>
                    <AntDesign name="close" size={24} color="black" />
                </Pressable>
                <S.SaveButtonContainer>
                    <S.SaveButtonText>Salvar</S.SaveButtonText>
                </S.SaveButtonContainer>
            </S.Header>

            <RNDateTimePicker minimumDate={new Date(2022, 8, 30, 6, 30)} maximumDate={new Date(2022, 8, 30, 17, 30)} textColor='black' minuteInterval={30} is24Hour={true} value={new Date()} mode="time" display="spinner" />

        </S.Container>
    );
}

export default CustomBottomSheet;