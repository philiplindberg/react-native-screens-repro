export type RootStackParamList = {
  Home: undefined
  Details: undefined
}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
