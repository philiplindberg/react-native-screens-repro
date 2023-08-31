import { Button, Text, View } from 'react-native'
import { RootStackParamList } from '../types'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

type Props = NativeStackScreenProps<RootStackParamList, 'Home'>

export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: 'black', fontSize: 18 }}>Home Screen</Text>

      <View style={{ marginTop: 30 }}>
        <Button title='Nav to Details Screen' onPress={() => navigation.navigate('Details')} />
      </View>
    </View>
  )
}
