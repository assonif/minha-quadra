import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import * as S from './styles';

const SocialNetworks: React.FC = () => {
    return (
        <S.Container>
            <S.PressableItem>
                <FontAwesome name="whatsapp" size={48} color="#25D366" />
            </S.PressableItem>

            <S.PressableItem>
                <FontAwesome name="instagram" size={48} color="black" />
            </S.PressableItem>

            <S.PressableItem>
                <FontAwesome name="facebook-square" size={48} color="#4267B2" />
            </S.PressableItem>
        </S.Container>
    );
}

export default SocialNetworks;