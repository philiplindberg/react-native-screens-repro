import { StatusBar } from 'expo-status-bar'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { LinkingOptions, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/screens/HomeScreen'
import DetailsScreen from './src/screens/DetailsScreen'
import { RootStackParamList } from './src/types'

const navigationLinking: LinkingOptions<RootStackParamList> = {
  config: {
    screens: {
      Home: '',
      Details: 'details',
    },
  },
  prefixes: [],
}

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar style='dark' />
      <NavigationContainer linking={navigationLinking}>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomeScreen} />
          <Stack.Screen name='Details' component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
