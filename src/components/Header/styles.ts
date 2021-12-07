import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 313
  },
  title: {
    fontSize: 42,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white.title
  },
  subTitle: {
    fontSize: 24,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white.subTitle,
    marginTop: 9
  },
  box: {
    width: 45,
    height: 43,
    backgroundColor: theme.colors.green[100],
    borderRadius: 12,
    marginBottom: 28
  }
})