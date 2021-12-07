import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  forgotPassword: {
    fontSize: 14,
    fontFamily: theme.fonts.medium,
    color: theme.colors.white.subTitle,
    marginTop: 18,
  }
})