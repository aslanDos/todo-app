import { 
    StyleSheet, 
    View, 
    Text, 
    TouchableOpacity 
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import { TaskType } from "../types/TaskType";

const TaskItem = ({
    task,
    deleteTask,
    handleDone
}: {
    task: TaskType,
    deleteTask: (id: number) => void,
    handleDone: (id: number) => void
}) => {
    return (
    <View style={styles.taskCard}>
            <View style={styles.taskInfo}>
                <Checkbox
                    value={task.isDone} 
                    onValueChange={() => handleDone(task.id)}/>
                <Text style={[
                    styles.taskText,
                    task.isDone && {textDecorationLine: "line-through"}
                ]}>{task.title}</Text>
            </View>

            <TouchableOpacity 
                onPress={() => {
                    deleteTask(task.id);
                    alert(`Task was deleted`)
                    }}>
                <Ionicons name="trash" size={24} color="red" />
            </TouchableOpacity>

        </View>
    );
}

export default TaskItem;

const styles = StyleSheet.create({
    taskCard: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        borderRadius: 10,
        paddingVertical: 16,
        paddingHorizontal: 20,
        marginBottom: 10,
    },
    taskInfo: {
        flexDirection: "row",
        gap: 10,
    },
    taskText: {
        fontSize: 16,
        color: "#333",
    }
})