// services/tournamentService.ts

import firestore, { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';
import auth from '@react-native-firebase/auth';
import { Tournament } from '../type.ts';

export const addTournament = async (title: string, participants: string[]): Promise<void> => {
    const userID = auth().currentUser?.uid;
    if (!userID) {
        throw new Error('User not authenticated');
    }

    const tournament: Omit<Tournament, 'createdAt'> & { createdAt: FirebaseFirestoreTypes.FieldValue } = {
        title,
        creator: userID,
        createdAt: firestore.FieldValue.serverTimestamp(),
        participants,
        games: [],
    };

    console.log('Trying to add tournament', tournament);

    try {
        const docRef = await firestore().collection('tournaments').add(tournament);
        console.log('Tournament created successfully:', docRef.id);
    } catch (error) {
        console.error('Error creating tournament: ', error);
        throw new Error('Failed to create tournament');
    }
};


export const getTournaments = async (): Promise<Tournament[]> => {
    try {
        const tournamentsSnapshot = await firestore().collection('tournaments').get();
        const tournaments: Tournament[] = tournamentsSnapshot.docs.map(doc => doc.data() as Tournament);
        return tournaments;
    } catch (error) {
        console.error('Error fetching tournaments: ', error);
        throw new Error('Failed to fetch tournaments');
    }
};
