import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Login from "./screens/Auth/Login";
import Home from "./screens/Home"

const Stack = createNativeStackNavigator();

export default function App() {
  return(
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={Login} options={{headerShown: false}}/>
        <Stack.Screen name="Home" component={Home} options={{headerShown: false}}/>
      </Stack.Navigator>
  );
}

