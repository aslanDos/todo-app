import { 
    StyleSheet, 
    View,
    TextInput, 
    Platform 
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons"
  
  export default function SearchBar({searchQuery, setSearchQuery}: {
    searchQuery: string,
    setSearchQuery: (text: string) => void,
  }) {
  
    return (
      <View style={styles.searchBar}>
        <Ionicons name="search" size={24} color="333"/>
        <TextInput style={styles.input}
                   value={searchQuery}
                   onChangeText={setSearchQuery}
                   placeholder="Search"
                   autoCapitalize="sentences"
                   autoCorrect={false}
                   clearButtonMode="while-editing"/>
      </View>
    )
  }
  
  const styles = StyleSheet.create({
    searchBar: {
      flexDirection: "row",
      backgroundColor: "white",
      alignItems: "center",
      paddingHorizontal: 16,
      paddingVertical: Platform.OS === "ios" ? 16 : 8,
      borderRadius: 10,
      gap: 10,
      marginBottom: 20
    },
    input : {
      flex: 1,
      fontSize: 16,
      color: "#333",
    }
  })