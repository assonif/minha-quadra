import { Ionicons } from '@expo/vector-icons';
import React, { useMemo } from 'react';

import * as S from './styles';

interface IStatusProps {
    status: 'pending' | 'approved' | 'declined';
}

const Status = ({ status }: IStatusProps) => {
    const statusRender = useMemo(() => {
        switch (status) {
            case 'approved':
                return (
                    <>
                        <Ionicons name="checkmark-circle-outline" size={24} color="#38b000" />
                        <S.Text color="#38b000">Aprovado</S.Text>
                    </>
                )
            case 'pending':
                return (
                    <>
                        <Ionicons name="ios-alert-circle-outline" size={24} color="#ffab3b" />
                        <S.Text color="#ffab3b">Aguardando aprovação</S.Text>
                    </>
                )
            case 'declined':
                return (
                    <>
                        <Ionicons name="ios-alert-circle-outline" size={24} color="#ef233c" />
                        <S.Text color="#ef233c">Recusado</S.Text>
                    </>
                )
        }
    }, [status])
    return (
        <S.Container>
            {statusRender}
        </S.Container>
    );
}

export default Status;