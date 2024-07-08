import React, { useEffect, useState } from 'react';
import { SafeAreaView, StyleSheet, View, ScrollView } from 'react-native';
import { Text, List, Button } from 'react-native-paper';
import firestore from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from "../type.ts";

type UserEnterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Game'>;

const Container = styled(SafeAreaView)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: #f5f5f5;
    padding: 20px;
`;

const Title = styled(Text)`
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
`;

const UserEnterScreen = () => {
    const navigation = useNavigation<UserEnterScreenNavigationProp>();
    const [tournaments, setTournaments] = useState<any[]>([]);
    const [userID, setUserID] = useState<string | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
            const user = auth().currentUser;
            if (user) {
                setUserID(user.uid);
            }
        };
        fetchUser();
    }, []);

    useEffect(() => {
        if (userID) {
            const unsubscribe = firestore()
                .collection('tournaments')
                .where('participants', 'array-contains', userID)
                .onSnapshot(querySnapshot => {
                    const tournamentsData: any[] = [];
                    querySnapshot.forEach(documentSnapshot => {
                        tournamentsData.push({
                            ...documentSnapshot.data(),
                            key: documentSnapshot.id,
                        });
                    });
                    setTournaments(tournamentsData);
                });
            return () => unsubscribe();
        }
    }, [userID]);

    return (
        <Container>
            <Title>My Tournaments</Title>
            <ScrollView style={styles.scrollView}>
                {tournaments.map(tournament => (
                    <List.Item
                        key={tournament.key}
                        title={tournament.title}
                        description={`Created at: ${new Date(tournament.createdAt.toDate()).toLocaleString()}`}
                        // onPress={() => navigation.navigate('TournamentScreen', { tournamentId: tournament.key })}
                    />
                ))}
            </ScrollView>
            <Button mode="contained" onPress={() => navigation.navigate('CreateTournament')} style={styles.button}>
                Create New Tournament
            </Button>
            {/*/!*<Button mode="outlined" onPress={() => navigation.navigate('EditUser')} style={styles.button}>*!/*/}
            {/*    Edit User Details*/}
            {/*</Button>*/}
        </Container>
    );
};

const styles = StyleSheet.create({
    scrollView: {
        width: '100%',
    },
    button: {
        marginTop: 20,
        width: '100%',
    },
});

export default UserEnterScreen;
