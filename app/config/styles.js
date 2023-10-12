import { Platform } from 'react-native'
import colors from './colors'

const text = {
  fontSize: 18,
  color: colors.primary,
  fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
  width: "100%"
}

const defaultStyles = {
  colors,
  text
}

export default defaultStyles;