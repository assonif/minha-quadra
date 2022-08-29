import React from 'react';
import SocialNetworks from '../SocialNetworks';
import Tag from '../Tag';
import * as S from './styles';

const items = [require('../../assets/quadra.png'), require('../../assets/volei.png')]

const GymInfo: React.FC = () => {
    return (
        <S.Container>
            <S.ImageContainer>
                <S.Image source={items[0]} />
            </S.ImageContainer>
            <S.InfoContainer>
                <S.InfoItem>
                    <S.Title>Aulas de:</S.Title>
                    <S.TagList>
                        <Tag text='Futevolei' />
                        <Tag text='Beach Tenis' />
                        <Tag text='Volei de Praia' />
                        <Tag text='Tennis' />
                    </S.TagList>
                </S.InfoItem>
                <S.InfoItem>
                    <S.Title>Valor:</S.Title>
                    <S.Info>Consultar</S.Info>
                </S.InfoItem>

                <S.InfoItem>
                    <S.Title>Locação para:</S.Title>
                    <S.TagList>
                        <Tag text='Futevolei' />
                        <Tag text='Beach Tenis' />
                        <Tag text='Volei de Praia' />
                        <Tag text='Tennis' />
                    </S.TagList>
                </S.InfoItem>

                <S.InfoItem>
                    <S.Title>Valor:</S.Title>
                    <S.Info>R$60,00/hora</S.Info>
                </S.InfoItem>

                <S.InfoItem>
                    <S.Title>Serviços:</S.Title>
                    <S.TagList>
                        <Tag text='Bar' />
                        <Tag text='Restaurante' />
                        <Tag text='Aula particular' />
                        <Tag text='Aula em grupo' />
                        <Tag text='Torneios' />
                        <Tag text='Aluguel para eventos' />
                    </S.TagList>
                </S.InfoItem>

                <S.InfoItem>
                    <S.Title>Metodos de pagamento:</S.Title>
                    <S.TagList>
                        <Tag text='PIX' />
                        <Tag text='Dinheiro' />
                        <Tag text='Credito' />
                        <Tag text='Debito' />
                    </S.TagList>
                </S.InfoItem>

                <S.InfoItem>
                    <S.Title>Informações adicionais:</S.Title>
                    <S.TagList>
                        <Tag text='Aceita Pet' />
                        <Tag text='Wifi Gratis' />
                        <Tag text='Aula experimental' />
                    </S.TagList>
                </S.InfoItem>

                <S.InfoItem>
                    <S.Title>Contatos:</S.Title>
                    <SocialNetworks />
                </S.InfoItem>

            </S.InfoContainer>

        </S.Container>
    );
}

export default GymInfo;