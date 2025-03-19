import {
    StyleSheet, 
    View,
    TextInput,
    TouchableOpacity,
} from "react-native";
import { Colors } from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";

export default function NewTask({taskText, setTaskText, addTask}:{
    taskText: string,
    setTaskText: (text: string) => void,
    addTask: () => void,
}) {

    return(
        <View style={styles.newTaskContainer}>
          <TextInput style={styles.input}
                     value={taskText}
                     onChangeText={setTaskText}
                     autoCorrect={false}
                     placeholder="Add a new task" />
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => addTask()}>
            <Ionicons name="add" size={34} color="white" />
          </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    newTaskContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#333",
    },
    input: {
        flex: 1,
        backgroundColor: "white",
        padding: 16,
        borderRadius: 10,
        fontSize: 16,
        color: "#333",
    },
    addButton: {
        backgroundColor: Colors.primary,
        borderRadius: 10,
        padding: 8,
        marginLeft: 20,
    }
})