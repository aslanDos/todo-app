import { StyleSheet, Text, Image, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons"

export default function Header() {
  return (
    <View style={styles.header}>
        <TouchableOpacity>
            <Ionicons name="home" size={24} />
        </TouchableOpacity>
        <TouchableOpacity>
            <Image source={{uri: "https://xsgames.co/randomusers/avatar.php?g=pixel"}} style={styles.profilePhoto}/>
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
        marginBottom: 20,
    },
    profilePhoto: {
        width: 40,
        height: 40,
        borderRadius: 20,
    }
})