import React from 'react';
import ListItem from '../../components/ListItem';
import * as S from './styles';

interface IHomeProps {
    navigation: any;
}

const Home = ({ navigation }: IHomeProps) => {
    return (
        <S.Container>
            <S.List>
                <ListItem navigation={navigation} />
                <ListItem navigation={navigation} /><ListItem navigation={navigation} /><ListItem navigation={navigation} /><ListItem navigation={navigation} /><ListItem navigation={navigation} />
            </S.List>
        </S.Container>
    );
}

export default Home;