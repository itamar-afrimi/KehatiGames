// types.ts

import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore';

export type RootStackParamList = {
    Welcome: undefined;
    Login: undefined;
    SignUp: undefined;
    Game: undefined;
    CreateTournament: undefined;
    TournamentScreen: undefined;
};

export interface Tournament {
    title: string;
    creator: string;
    createdAt: FirebaseFirestoreTypes.FieldValue;
    participants: string[];
    games: Array<{
        gameID: string;
        status: string;
        results: string;
    }>;
}
