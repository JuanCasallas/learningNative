import { createStackNavigator } from '@react-navigation/stack'
import { Home, Notifications, Profile } from './src/containers'

const App = () => {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Notifications" component={Notifications} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
});

export default App;
