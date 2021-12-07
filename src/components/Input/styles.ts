import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 38
  },
  input: {
    width: 258,
    borderBottomWidth: 2,
    borderColor: '#253842',
    marginLeft: 18,
    fontFamily: theme.fonts.regular,
    fontSize: 18,
    padding: 8,
    color: theme.colors.white.subTitle
  }
})