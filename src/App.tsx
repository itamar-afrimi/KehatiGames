import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen.tsx';
import LoginScreen from './screens/LoginScreen.tsx';
import SignUpScreen from './screens/SignUpScreen.tsx';
import GameEnterScreen from "./screens/GameEnterScreen.tsx";
import CreateTournament from "./screens/CreateTournament.tsx";
import { RootStackParamList } from './type.ts';
import {PaperProvider, DefaultTheme} from "react-native-paper";

const Stack = createStackNavigator<RootStackParamList>();

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#4A90E2', // Custom primary color
        text: '#FF6347',   // Custom text color
    },
};
const App = () => {
    return (
        <PaperProvider theme={theme}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Welcome">
                    <Stack.Screen name="Welcome" component={WelcomeScreen} />
                    <Stack.Screen name="Login" component={LoginScreen} />
                    <Stack.Screen name="SignUp" component={SignUpScreen} />
                    <Stack.Screen name="Game" component={GameEnterScreen} />
                    <Stack.Screen name="CreateTournament" component={CreateTournament}/>
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
};


export default App;




// import React from 'react';
// import { SafeAreaView, View, StyleSheet, TextInput, Button, Image, } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
// import auth from '@react-native-firebase/auth';
// import { Text, Provider as PaperProvider } from '@react-native-paper';
// import LottieView from 'lottie-react-native';
//
// type RootStackParamList = {
//     Login: undefined;
//     SignUp: undefined;
//     Welcome: undefined;
// };
//
// type LoginScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Login'>;
// type SignUpScreenNavigationProp = StackNavigationProp<RootStackParamList, 'SignUp'>;
// type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;
//
// type LoginProps = {
//     navigation: LoginScreenNavigationProp;
// };
//
// type SignUpProps = {
//     navigation: SignUpScreenNavigationProp;
// };
//
// type WelcomeProps = {
//     navigation: WelcomeScreenNavigationProp;
// };
// const Stack = createStackNavigator();
//
// function LoginScreen({ navigation}: LoginProps) {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//
//   const handleLogin = async () => {
//     try {
//       await auth().signInWithEmailAndPassword(email, password);
//       navigation.replace('Welcome');
//     } catch (error) {
//       console.error(error);
//     }
//   };
//
//   return (
//       <SafeAreaView style={styles.container}>
//         <Text>Login</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//         />
//         <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//         />
//         <Button title="Login" onPress={handleLogin} />
//         <Button title="Sign Up" onPress={() => navigation.navigate('SignUp')} />
//       </SafeAreaView>
//   );
// }
//
// function SignUpScreen({ navigation } : SignUpProps) {
//   const [email, setEmail] = React.useState('');
//   const [password, setPassword] = React.useState('');
//
//   const handleSignUp = async () => {
//     try {
//       await auth().createUserWithEmailAndPassword(email, password);
//       navigation.replace('Welcome');
//     } catch (error) {
//       console.error(error);
//     }
//   };
//
//   return (
//       <SafeAreaView style={styles.container}>
//         <Text>Sign Up</Text>
//         <TextInput
//             style={styles.input}
//             placeholder="Email"
//             value={email}
//             onChangeText={setEmail}
//         />
//         <TextInput
//             style={styles.input}
//             placeholder="Password"
//             value={password}
//             onChangeText={setPassword}
//             secureTextEntry
//         />
//         <Button title="Sign Up" onPress={handleSignUp} />
//         <Button title="Back to Login" onPress={() => navigation.goBack()} />
//       </SafeAreaView>
//   );
// }
//
// function createTournament() {
//
// }
//
// function WelcomeScreen({navigation} : WelcomeProps) {
//
//
//     return (
//       <SafeAreaView style={styles.container}>
//         <Text style={styles.title}>Welcome to KehatiGames!</Text>
//         <Image source={require('/Users/itamarafrimi/Desktop/LastSemester/Projects/newGame/kehatiGames/assets/welcome_photo.jpg')}
//                style={styles.image} />
//           <Button title="Create new Tournament" onPress={createTournament} />
//           {/*<Button title="My tournaments" onPress={()=> navigation.navigate("my tournaments")} />*/}
//
//       </SafeAreaView>
//   );
// }
//
// export default function App() {
//   return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName="Welcome">
//             <Stack.Screen name="Welcome" component={WelcomeScreen} />
//             <Stack.Screen name="Login" component={LoginScreen} />
//             <Stack.Screen name="SignUp" component={SignUpScreen} />
//         </Stack.Navigator>
//       </NavigationContainer>
//   );
// }
//
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     paddingHorizontal: 10,
//     paddingBottom: 200,
//   },
//   input: {
//     height: 40,
//     borderColor: 'gray',
//     borderWidth: 1,
//     marginBottom: 12,
//     paddingHorizontal: 10,
//   },
//   title: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   image: {
//     width: 340,
//     height: 200,
//     resizeMode: 'cover',
//   },
// });
//
