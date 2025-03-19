import { 
    StyleSheet,
    View,
    TextInput,
    ActivityIndicator, 
    Text, 
    Button,
    KeyboardAvoidingView,
    Image
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { FIREBASE_AUTH } from "@/FirebaseConfig";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const auth = FIREBASE_AUTH;

  const signIn = async () => {
    setIsLoading(true);
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert("Sign in failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  }

  const signUp = async () => {
    setIsLoading(true);
    try {
      const response = await createUserWithEmailAndPassword(auth, email, password);
      console.log(response);
    } catch (error: any) {
      console.log(error);
      alert("Sign up failed: " + error.message);
    } finally {
      setIsLoading(false);
    }
  }
  

  return (
    <SafeAreaView edges={["bottom"]} style={styles.container}>
        <KeyboardAvoidingView 
            behavior="padding">
            <Image source={require("@/assets/images/Login.png")} style={styles.image}/>
            <Text style={styles.title}>Login</Text>
            <View style={styles.inputContainer}>
              <TextInput
                  value={email}
                  style={styles.input} 
                  placeholder="Email"
                  autoCapitalize="none"
                  onChangeText={(text) => setEmail(text)}/>
              <TextInput 
                  value={password}
                  style={styles.input} 
                  placeholder="Password"
                  autoCapitalize="none"
                  onChangeText={(text) => setPassword(text)}/>
            </View>

            {isloading ? 
                <ActivityIndicator size="large" color="0000ff"/> :
                <>
                    <Button title="Login" onPress={signIn}></Button>
                    <Button title="Create account" onPress={signUp}></Button>
                </>
            }
        </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        justifyContent: "center",
    },
    title: {
        fontSize: 40,
        fontWeight: "bold",
        marginBottom: 20
    },
    inputContainer: {
        marginBottom: 10
    },
    input: {
        borderColor: "#ccc",
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
    },
    image: {
      width: 200,
      height: 200,
      alignSelf: "center",
      marginBottom: 20
    }
})