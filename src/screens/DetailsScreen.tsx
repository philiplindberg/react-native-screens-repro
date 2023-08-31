import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { Text, View, Button } from 'react-native'
import { RootStackParamList } from '../types'

type Props = NativeStackScreenProps<RootStackParamList, 'Details'>

export default function DetailsScreen({ navigation }: Props) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{ color: 'black', fontSize: 18 }}>Details Screen</Text>

      <View style={{ marginTop: 30 }}>
        <Button title='Back to Home Screen' onPress={() => navigation.navigate('Home')} />
      </View>
    </View>
  )
}
