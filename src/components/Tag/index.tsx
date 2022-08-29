import React from 'react';
import * as S from './styles';

interface ITagProps {
    text: string;
}

const Tag = ({ text }: ITagProps) => {
    return (<S.Container><S.Text>{text}</S.Text></S.Container>);
}

export default Tag;