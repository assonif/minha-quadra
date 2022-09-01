import React from 'react';
import { Text } from 'react-native';
import * as S from './styles';

const CustomInput: React.FC = () => {
    return (
        <S.Container>
            <Text>Observação:</Text>
            <S.InputContainer>

                <S.Input multiline={true}></S.Input>
            </S.InputContainer>
        </S.Container>

    );
}

export default CustomInput;