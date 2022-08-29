import React from 'react';
import ReservationItem from '../../components/ReservationItem';
import * as S from './styles';

const Reservation: React.FC = () => {
    return (
        <S.Container>
            <ReservationItem />
            <ReservationItem />
            <ReservationItem />
            <ReservationItem />
            <ReservationItem />
        </S.Container>
    );
}

export default Reservation;