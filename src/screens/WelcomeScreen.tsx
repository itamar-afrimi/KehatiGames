// screens/WelcomeScreen.tsx
import React from 'react';
import { SafeAreaView, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Text, useTheme } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../type.ts';

type WelcomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;

const WelcomeScreen = () => {
    const navigation = useNavigation<WelcomeScreenNavigationProp>();
    const { colors } = useTheme();

    return (
        <ImageBackground
            source={require('/Users/itamarafrimi/Desktop/LastSemester/Projects/newGame/KehatiGames_/kehatiGames/assets/welcome_photo.jpg')}
            style={styles.backgroundImage}
        >
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Welcome to KehatiGames!</Text>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('Login')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Login
                </Button>
                <Button
                    mode="contained"
                    onPress={() => navigation.navigate('SignUp')}
                    style={styles.button}
                    labelStyle={styles.buttonLabel}
                >
                    Sign Up
                </Button>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch' for different cover properties
        justifyContent: 'center',
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        color: '#010906', // Change this to your desired text color
        textAlign: 'center',
        marginBottom: 100,
        backgroundColor: 'rgba(0,0,0,0)', // Semi-transparent background for text
        paddingHorizontal: 20,
        paddingVertical: 2,
    },

    button: {
        marginTop: 10,
        width: '80%',
    },
    buttonLabel: {
        fontSize: 16,
    },

});

export default WelcomeScreen;


// import React from 'react';
// import styled from 'styled-components/native';
// import { SafeAreaView, Button } from 'react-native';
// import { useNavigation } from '@react-navigation/native';
// import { RootStackParamList } from '../type.ts';
// import {NativeStackNavigationProp} from "react-native-screens/native-stack";
//
// type WelcomeScreenNavigationProp = NativeStackNavigationProp<
//     RootStackParamList,
//     'Welcome'
// >;
// const Container = styled.SafeAreaView`
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   background-color: #f5f5f5;
// `;
//
// const Title = styled.Text`
//   font-size: 24px;
//   font-weight: bold;
//   margin-bottom: 20px;
//   color: brown;
// `;
//
// const StyledImage = styled.Image`
//   width: 300px;
//   height: 200px;
//   margin-bottom: 20px;
// `;
//
// const WelcomeScreen = () => {
//     const navigation = useNavigation<WelcomeScreenNavigationProp>();
//
//     return (
//         <Container>
//             <Title>Welcome to KehatiGames!</Title>
//             <StyledImage source={require('/Users/itamarafrimi/Desktop/LastSemester/Projects/newGame/kehatiGames/assets/welcome_photo.jpg')} />
//             <Button title="Login" onPress={() => navigation.navigate('Login')} />
//             <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
//         </Container>
//     );
// };
//
// export default WelcomeScreen;
