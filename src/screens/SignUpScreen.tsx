import React from 'react';
import { SafeAreaView, ImageBackground, StyleSheet , Alert} from 'react-native';
import { Text, TextInput, Button } from 'react-native-paper';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../type.ts';
import { useNavigation } from '@react-navigation/native';
import auth from '@react-native-firebase/auth';

type SignUpScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'SignUp'>;

const SignUpScreen = () => {
    const navigation = useNavigation<SignUpScreenNavigationProp>();

    // const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const onSubmit = async () => {
        try{
            await auth().createUserWithEmailAndPassword(email, password);
            Alert.alert('Sign Up Successful', `Welcome, ${email}!`);
            navigation.navigate('Game');
        }catch(error){
            console.error(error);
        }

    };

    return (
        <ImageBackground source={require('/Users/itamarafrimi/Desktop/LastSemester/Projects/newGame/KehatiGames_/kehatiGames/assets/welcome_photo.jpg')} resizeMode="cover" style={styles.backgroundImage}>
            <SafeAreaView style={styles.container}>
                <Text style={styles.title}>Sign Up</Text>


                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    keyboardType="email-address"
                    style={styles.input}
                />

                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    secureTextEntry
                    style={styles.input}
                />

                <Button mode="contained" onPress={onSubmit} style={styles.button}>
                    Sign Up
                </Button>
            </SafeAreaView>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        width: '80%',
        backgroundColor: 'rgba(255, 255, 255, 0.8)', // Semi-transparent white background
        padding: 20,
        borderRadius: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    input: {
        marginBottom: 10,
    },
    button: {
        marginTop: 20,
    },
});

export default SignUpScreen;
