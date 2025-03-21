import { View, Text } from "react-native";
import { StrictMode } from "react";
import { Link } from "expo-router";

export default function Index() {
  return(
    <View>
      <Link href="/(auth)/Signup">Sign up</Link>
      <Link href="/(auth)">Login</Link>
    </View>
  );
}

