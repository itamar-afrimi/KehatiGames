// CreateTournamentScreen.tsx

import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Alert, View, ScrollView } from 'react-native';
import { TextInput, Button, Text, List, Avatar, IconButton } from 'react-native-paper';
import styled from 'styled-components/native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../type.ts';
import { addTournament } from "../database_handling/TournamentService.tsx";
import auth from '@react-native-firebase/auth';

type CreateTournamentScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'CreateTournament'>;

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

const Input = styled(TextInput)`
    width: 100%;
    margin-bottom: 10px;
`;

const UserList = styled(View)`
    width: 100%;
    margin-top: 20px;
`;

const CreateTournamentScreen = () => {
    const navigation = useNavigation<CreateTournamentScreenNavigationProp>();
    const [title, setTitle] = useState('');
    const [userToAdd, setUserToAdd] = useState('');
    const [participants, setParticipants] = useState<string[]>([]);
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

    const handleAddParticipant = () => {
        if (userToAdd) {
            setParticipants([...participants, userToAdd]);
            setUserToAdd('');
        }
    };

    const handleCreateTournament = async () => {
        console.log('handleCreateTournament called'); // Log when function is called
        if (!userID) {
            Alert.alert('Error', 'User not authenticated');
            return;
        }
        try {
            await addTournament(title, participants);
            console.log('Tournament created successfully'); // Log success message
            Alert.alert('Success', 'Tournament created successfully!');
            setTitle('');
            setParticipants([]);
            navigation.navigate('Game'); // Navigate to UserEnterScreen
        } catch (error) {
            console.error('Error creating tournament: ', error); // Log error
            Alert.alert('Error', 'Failed to create tournament. Please try again.');
        }
    };


    const handleUpdateEndedGames = () => {
        Alert.alert('Update Ended Games', 'Feature not implemented yet.');
    };

    return (
        <Container>
            <Title>Create Tournament</Title>
            <Input
                label="Tournament Title"
                value={title}
                onChangeText={setTitle}
            />
            <View style={styles.inputWithButton}>
                <Input
                    label="Add Participant"
                    value={userToAdd}
                    onChangeText={setUserToAdd}
                    style={styles.input}
                />
                <IconButton
                    icon="plus"
                    size={24}
                    onPress={handleAddParticipant}
                    style={styles.iconButton}
                />
            </View>
            <ScrollView style={styles.userList}>
                <Text style={styles.participantsTitle}>Participants:</Text>
                {participants.map((participant, index) => (
                    <List.Item
                        key={index}
                        title={participant}
                        left={props => <Avatar.Text {...props} label={participant[0]} />}
                        right={props => (
                            <IconButton
                                icon="delete"
                                onPress={() => setParticipants(participants.filter(p => p !== participant))}
                            />
                        )}
                    />
                ))}
            </ScrollView>
            <Button mode="contained" onPress={handleCreateTournament} style={styles.button}>
                Create Tournament
            </Button>
            <Button mode="outlined" onPress={handleUpdateEndedGames} style={styles.button}>
                Update Ended Games
            </Button>
        </Container>
    );
};

const styles = StyleSheet.create({
    inputWithButton: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        flex: 1,
    },
    iconButton: {
        marginLeft: 10,
    },
    userList: {
        width: '100%',
        marginTop: 20,
    },
    participantsTitle: {
        fontSize: 18,
        marginVertical: 10,
    },
    button: {
        marginTop: 20,
        width: '100%',
    },
});

export default CreateTournamentScreen;
