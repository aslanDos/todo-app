import { 
	View, 
	Text, 
	StyleSheet, 
	Image, 
	Dimensions, 
	TextInput, 
	TouchableOpacity,
	ActivityIndicator,
} from "react-native";
import { Link } from "expo-router";
import COLORS from "@/constants/Colors";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { KeyboardShift } from "@/components/KeyboardShift";

const {width} = Dimensions.get("window");

export default function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = () => {}

    return(
			<KeyboardShift>
        <View style={styles.container}>
					{/* Image */}
					<View style={styles.imageContainer}>
						<Image 
							source={require("@/assets/images/Login.png")} 
							style={styles.image}
							resizeMode="contain"/>
					</View>

					<View style={styles.card}>
						<View style={styles.formContainer}>
							{/* Email */}
							<View style={styles.inputGroup}>
								<Text style={styles.label}>Email</Text>
								<View style={styles.inputContainer}>
									{/* Icon */}
									<Ionicons 
										name="at-outline"
										size={20}
										color={COLORS.primary}
										style={styles.inputIcon} />
									<TextInput 
										style={styles.input}
										placeholder="Enter your email"
										placeholderTextColor={COLORS.placeholderText}
										value={email}
										onChangeText={setEmail}
										keyboardType="email-address"
										autoCapitalize="none">

									</TextInput>
								</View>
							</View>

							{/* Password */}
							<View style={styles.inputGroup}>
								<Text style={styles.label}>Password</Text>
								<View style={styles.inputContainer}>
									{/* Left Icon */}
									<View style={styles.inputIcon}>
										<Ionicons 
											name="lock-closed-outline"
											size={20}
											color={COLORS.primary}
											style={styles.inputIcon} />
									</View>

									{/* Input */}
									<TextInput 
										style={styles.input}
										placeholder="Enter your password"
										placeholderTextColor={COLORS.placeholderText}
										value={password}
										onChangeText={setPassword}
										autoCapitalize="none"
										secureTextEntry={!showPassword} />
									
									{/* Right Icon */}
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

							{/* Button */}
							<TouchableOpacity
								style={styles.button}
								onPress={handleLogin}
								disabled={isLoading}>
								{isLoading ? (
									<ActivityIndicator color={COLORS.white} />
								) : (
									<Text style={styles.buttonText}>Login</Text>
								)}

							</TouchableOpacity>
						</View>

						{/* Sign Up */}
						<View style={styles.signupContainer}>
							<Text style={styles.signupText}>Don't have an account?</Text>
							<Link href={"/Signup"} asChild>
								<TouchableOpacity>
									<Text style={styles.signupLink}>Sign Up</Text>
								</TouchableOpacity>
							</Link>
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
        padding: 16
    },
		imageContainer: {
			alignItems: "center",
			width: "100%",
			marginTop: 32,
		},
		image: {
			width: width*0.75,
			height: width*0.75,
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
		formContainer: {
			marginBottom: 16,
		},
		inputGroup: {
			marginBottom: 20,
		},
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
		inputIcon: {
			marginRight: 10,
		},
		input: {
			flex: 1,
			height: 48,
			color: COLORS.textDark,
		},
		eyeIcon: {
			padding: 8,
		},
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
		}
})