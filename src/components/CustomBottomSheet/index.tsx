import React, { useCallback, useState } from 'react';
import { Pressable, View } from 'react-native';
import * as S from './styles';

import { AntDesign } from '@expo/vector-icons';
import RNDateTimePicker from '@react-native-community/datetimepicker';




interface ICustomBottomSheetProps {
    onClose: () => void;
}

type Time = 'start' | 'end' | null;

const CustomBottomSheet = ({ onClose }: ICustomBottomSheetProps) => {
    const [selectedValue, setSelectedValue] = useState<Time>('start');


    const handleSelectTime = useCallback((value: Time, current?: Time) => {
        if (value === current || value === null) {
            setSelectedValue(null)
            return;
        }

        setSelectedValue(value);
    }, [])
    return (
        <S.Container>
            <S.Header>
                <Pressable onPress={onClose}>
                    <AntDesign name="close" size={24} color="black" />
                </Pressable>
                <S.SaveButtonContainer>
                    <S.SaveButtonText>Reservar</S.SaveButtonText>
                </S.SaveButtonContainer>
            </S.Header>

            <S.DateText>Hoje, 30 de Agosto</S.DateText>

            <S.DatePressableWrapper>
                <S.DatePressableContainer isSelected={selectedValue === 'start'} onPress={() => handleSelectTime('start', selectedValue)} >
                    <View>
                        <S.DatePressableLabel>Início:</S.DatePressableLabel>
                        <S.DatePressable>
                            <S.DatePressableText>06:00h</S.DatePressableText>
                        </S.DatePressable>
                    </View>
                </S.DatePressableContainer>
                <AntDesign style={{ margin: 8 }} name="arrowright" size={24} color="black" />
                <S.DatePressableContainer isSelected={selectedValue === 'end'} onPress={() => handleSelectTime('end', selectedValue)}>
                    <View>
                        <S.DatePressableLabel>Fim:</S.DatePressableLabel>
                        <S.DatePressable>
                            <S.DatePressableText>08:00h</S.DatePressableText>
                        </S.DatePressable>
                    </View>
                </S.DatePressableContainer>
            </S.DatePressableWrapper>
            {selectedValue === 'start' && <RNDateTimePicker style={{ backgroundColor: '#f1f2f6', }} minimumDate={new Date(2022, 8, 30, 6, 30)} maximumDate={new Date(2022, 8, 30, 17, 30)} textColor='black' minuteInterval={30} is24Hour={true} value={new Date()} mode="time" display="spinner" />}
            {selectedValue === 'end' && <RNDateTimePicker style={{ backgroundColor: '#f1f2f6', }} minimumDate={new Date(2022, 8, 30, 8, 0)} maximumDate={new Date(2022, 8, 30, 17, 30)} textColor='black' minuteInterval={30} is24Hour={true} value={new Date()} mode="time" display="spinner" />}
        </S.Container >
    );
}

export default CustomBottomSheet;