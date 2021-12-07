import { StyleSheet } from "react-native";
import { theme } from "../../global/styles/theme";

export const styles = StyleSheet.create({
  container: {
    width: 313,
    height: 58,
    marginTop: 64
  },
  button: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
  },
  title: {
    fontSize: 18,
    fontFamily: theme.fonts.regular,
    color: theme.colors.white.title,
    marginRight: 8
  }
})