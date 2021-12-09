import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  button: {
    width: 313,
    height: 58,
    marginTop: 64,
    backgroundColor: theme.colors.green[100],
    borderRadius: 12
  },
  buttonOpacity: {
    width: 313,
    height: 58,
    marginTop: 64,
    backgroundColor: '#286053',
    borderRadius: 12
  },
  title: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: theme.colors.white.title,
    marginRight: 8
  },
  titleOpacity: {
    fontSize: 20,
    fontFamily: theme.fonts.bold,
    color: '#3DD598',
    marginRight: 8
  }
})