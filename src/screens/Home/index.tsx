import React from 'react';
import ListItem from '../../components/ListItem';
import * as S from './styles';

const Home = () => {
    return (
        <S.Container>
            <S.List>
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
                <ListItem />
            </S.List>
        </S.Container>
    );
}

export default Home;