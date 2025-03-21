import * as React from "react";
import { KeyboardAvoidingView, Platform} from "react-native";
import { useHeaderHeight } from "@react-navigation/elements";


export const KeyboardShift = ({children}: {children: React.ReactNode}) => {
    const headerHeight = useHeaderHeight();

    return (
        <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            enabled
            keyboardVerticalOffset={headerHeight + 100}>
            {children}
        </KeyboardAvoidingView>
    );
}