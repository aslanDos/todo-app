import { 
	View, 
	Text, 
	StyleSheet, 
	TextInput, 
	TouchableOpacity, 
	ActivityIndicator, 
	Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Link, router } from "expo-router";
import { KeyboardShift } from "@/components/KeyboardShift";
import { useState } from "react";
import COLORS from "@/constants/Colors";
import { useRouter } from "expo-router";
import { useAuthStore } from "@/store/authStore";

export default function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

	const { user, isLoading, register } = useAuthStore();

	const handleSignup = async () => {

		const result = await register(username, email, password);

		if (!result.success) Alert.alert("Error", result.error)

	}

	const router = useRouter();

  return (
    <KeyboardShift>
      <View style={styles.container}>
        <View style={styles.card}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.title}>Task Tracker ✏️</Text>
            <Text style={styles.subtitle}>Keep track off your tasks</Text>
          </View>

          <View style={styles.formContainer}>
            {/* Username input */}
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Usename</Text>
              <View style={styles.inputContainer}>
                {/* Icon */}
                <Ionicons
                  name="person-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your username"
                  placeholderTextColor={COLORS.placeholderText}
                  value={username}
                  onChangeText={setUsername}
                  autoCapitalize="none"
                />
              </View>
            </View>

						{/* Email input */}
						<View style={styles.inputGroup}>
              <Text style={styles.label}>Email</Text>
              <View style={styles.inputContainer}>
                {/* Icon */}
                <Ionicons
                  name="at-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your email"
                  placeholderTextColor={COLORS.placeholderText}
                  value={email}
                  onChangeText={setEmail}
                  autoCapitalize="none"
									keyboardType="email-address"
                />
              </View>
            </View>

						{/* Password input */}
						<View style={styles.inputGroup}>
              <Text style={styles.label}>Password</Text>
              <View style={styles.inputContainer}>
                {/* Icon */}
                <Ionicons
                  name="lock-closed-outline"
                  size={20}
                  color={COLORS.primary}
                  style={styles.inputIcon}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Enter your password"
                  placeholderTextColor={COLORS.placeholderText}
                  value={password}
                  onChangeText={setPassword}
                  autoCapitalize="none"
									secureTextEntry={!showPassword}
                />

								{/* Show/Hide password */}
								<TouchableOpacity
										onPress={() => setShowPassword(!showPassword)}
										style={styles.eyeIcon}>
										<Ionicons 
											name={showPassword ? "eye-outline": "eye-off-outline"} 
											size={20} 
											color={COLORS.primary} />
									</TouchableOpacity>
              </View>
            </View>

						{/* Signup button */}
						<TouchableOpacity
								style={styles.button}
								onPress={handleSignup}
								disabled={isLoading}>
								{isLoading ? (
									<ActivityIndicator color={COLORS.white} />
								) : (
									<Text style={styles.buttonText}>Sign up</Text>
								)}
							</TouchableOpacity>

							{/* Login link */}
							<View style={styles.signupContainer}>
								<Text style={styles.signupText}>Already have an account?</Text>
								<TouchableOpacity onPress={() => router.back()}>
									<Text style={styles.signupLink}>Login</Text>
								</TouchableOpacity>
							</View>
          </View>
        </View>
      </View>
    </KeyboardShift>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: COLORS.background,
    padding: 20,
    justifyContent: "center",
  },
  card: {
    backgroundColor: COLORS.cardBackground,
    borderRadius: 16,
    padding: 24,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    borderWidth: 2,
    borderColor: COLORS.border,
  },
  header: {
    alignItems: "center",
    marginBottom: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "700",
    fontFamily: "SpaceMono-Bold",
    color: COLORS.primary,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
  formContainer: { marginBottom: 16 },
  inputGroup: { marginBottom: 20 },
  label: {
    fontSize: 14,
    marginBottom: 8,
    color: COLORS.textPrimary,
    fontWeight: "500",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.inputBackground,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORS.border,
    paddingHorizontal: 12,
  },
  inputIcon: { marginRight: 10 },
  input: {
    flex: 1,
    height: 48,
    color: COLORS.textDark,
  },
  eyeIcon: { padding: 8 },
  button: {
    backgroundColor: COLORS.primary,
    borderRadius: 12,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "600",
  },
  signupContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 24,
  },
  signupText: {
    color: COLORS.textSecondary,
    marginRight: 5,
  },
  signupLink: {
    color: COLORS.primary,
    fontWeight: "600",
  },
});
