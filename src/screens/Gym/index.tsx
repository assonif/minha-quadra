import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Agenda, AgendaEntry, AgendaSchedule, DateData } from 'react-native-calendars';
import GymInfo from '../../components/GymInfo';
import * as S from './styles';

const timeToString = (time: number) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
};

const Gym: React.FC = () => {
    const [selectedTabIndex, setSelectedTabIndex] = useState(0);

    const [items, setItems] = useState<AgendaSchedule>({})

    const loadItems = (day: DateData) => {
        const auxitems = items || {};

        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);

                if (!auxitems[strTime]) {
                    auxitems[strTime] = [];

                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        auxitems[strTime].push({
                            name: '14:00 - 18:00h | Quadra disponivel',
                            height: 350,
                            day: strTime
                        });
                        auxitems[strTime].push({
                            name: '20:00 - 22:00h | Quadra disponivel',
                            height: 150,
                            day: strTime
                        });
                    }
                }
            }

            const newItems: AgendaSchedule = {};
            Object.keys(auxitems).forEach(key => {
                newItems[key] = auxitems[key];
            });
            setItems(newItems)
        }, 1000);
    }

    const renderItem = (reservation: AgendaEntry, isFirst: boolean) => {
        const fontSize = isFirst ? 16 : 14;
        const color = isFirst ? 'black' : '#43515c';

        return (
            <TouchableOpacity
                onPress={() => Alert.alert(reservation.name)}
                style={[styles.item, { height: reservation.height }]}
            >
                <Text style={{ fontSize, color }}>{reservation.name}</Text>
            </TouchableOpacity>
        );
    }

    const renderEmptyDate = () => {
        return (
            <View style={styles.emptyDate}>
                <Text>This is empty date!</Text>
            </View>
        );
    }

    return (
        <S.Container>
            <S.Tab>
                <S.TabPressable isSelected={selectedTabIndex === 0} onPress={() => setSelectedTabIndex(0)}>
                    <S.TabText isSelected={selectedTabIndex === 0}>
                        Info
                    </S.TabText>
                </S.TabPressable>
                <S.TabPressable isSelected={selectedTabIndex === 1} onPress={() => setSelectedTabIndex(1)}>
                    <S.TabText isSelected={selectedTabIndex === 1}>
                        Agendar
                    </S.TabText>
                </S.TabPressable>
            </S.Tab>
            {selectedTabIndex === 0 && <GymInfo />}

            {selectedTabIndex === 1 && (<Agenda
                items={items}
                loadItemsForMonth={loadItems}
                selected={'2022-08-29'}
                renderItem={renderItem}
                renderEmptyDate={renderEmptyDate}
                showOnlySelectedDayItems
                hideKnob={false}
            />)}

        </S.Container>
    );
}

export default Gym;

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'white',
        flex: 1,
        borderRadius: 5,
        padding: 10,
        marginRight: 10,
        marginTop: 17
    },
    emptyDate: {
        height: 15,
        flex: 1,
        paddingTop: 30
    }
});