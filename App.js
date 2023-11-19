import Auth from './screens/Auth';
import Accueil from './screens/Accueil';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CreateUser from './screens/CreateUser';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Auth'>
        <Stack.Screen name='Auth' component={Auth}/>
        <Stack.Screen name='Accueil' component={Accueil}/>
        <Stack.Screen name='CreateUser' component={CreateUser}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

